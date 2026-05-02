"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { questions, Question, Difficulty, Subject } from "../../data/questions";
import { QuestionCard } from "../../components/QuestionCard";
import { ProgressBar } from "../../components/ProgressBar";
import { playSound } from "../../utils/sounds";

export default function QuizPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const difficulty = (searchParams.get("difficulty") as Difficulty) || "beginner";
  const subject = (searchParams.get("subject") as Subject) || "mixed";
  const userName = searchParams.get("name") || "Guest Engineer";

  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string | number>>({});
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [history, setHistory] = useState<Array<{
    question: Question;
    userAnswer: string | number;
    isCorrect: boolean;
  }>>([]);

  // DATA LOADING FIX
  useEffect(() => {
    // 1. Filter by Difficulty first
    let pool = questions.filter((q) => q.difficulty === difficulty);
    
    // 2. Filter by Subject if not 'mixed'
    if (subject !== "mixed") {
      const subjectPool = pool.filter((q) => q.subject === subject);
      // Fallback: If subject pool is empty, use the main pool
      if (subjectPool.length > 0) pool = subjectPool;
    }

    // 3. Shuffle and pick exactly 10
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);
    
    // 4. Final Fallback: If even the pool is empty, take any 10 from total questions
    if (selected.length === 0) {
      setQuizQuestions(questions.slice(0, 10));
    } else {
      setQuizQuestions(selected);
    }
  }, [difficulty, subject]);

  useEffect(() => {
    if (isAnswered || quizQuestions.length === 0) return;
    if (timeLeft === 0) { handleAnswer("TIME_UP"); return; }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isAnswered, quizQuestions]);

  const handleAnswer = useCallback((answer: string | number) => {
    if (isAnswered) return;
    const currentQ = quizQuestions[currentIndex];
    let isCorrect = answer === currentQ.answer;

    if (isCorrect) {
      playSound("correct");
      setScore((prev) => prev + 1);
    } else {
      playSound("wrong");
    }
    
    setUserAnswers((prev) => ({ ...prev, [currentQ.id]: answer }));
    setHistory((prev) => [...prev, { question: currentQ, userAnswer: answer, isCorrect }]);
    setIsAnswered(true);
  }, [currentIndex, isAnswered, quizQuestions]);

  const nextQuestion = () => {
    playSound("click");
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsAnswered(false);
      setTimeLeft(15);
    } else finishQuiz();
  };

  const finishQuiz = () => {
    playSound("finish");
    const results = { userName, score, total: quizQuestions.length, difficulty, subject, history, timestamp: Date.now() };
    const pastResults = JSON.parse(localStorage.getItem("quizHistory") || "[]");
    localStorage.setItem("quizHistory", JSON.stringify([results, ...pastResults].slice(0, 20)));
    localStorage.setItem("lastQuizResult", JSON.stringify(results));
    router.push("/result");
  };

  const goBack = () => {
    if (confirm("Exit Mission? Progress will be lost.")) {
      router.push("/");
    }
  };

  if (quizQuestions.length === 0) {
    return (
      <div className="flex-grow flex flex-col items-center justify-center p-10 animate-in fade-in duration-300">
        <div className="w-16 h-16 border-4 border-slate-900 border-t-blue-600 rounded-full animate-spin mb-4"></div>
        <p className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Deploying Data...</p>
      </div>
    );
  }

  return (
    <div className="flex-grow flex flex-col items-center p-6 md:p-12 max-w-4xl mx-auto w-full relative">
      <div className="w-full flex items-center justify-between mb-8 animate-in slide-in-from-top-4 duration-300">
        <div className="space-y-1">
          <button onClick={goBack} className="flex items-center gap-2 text-slate-400 font-black uppercase text-[10px] tracking-widest hover:text-rose-500 transition-colors mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Abort Mission
          </button>
          <div className="px-3 py-1 bg-slate-900 text-white text-[8px] font-black rounded-full uppercase tracking-widest inline-block mb-1">Civil Engineer</div>
          <p className="text-4xl font-black text-slate-900 leading-none">Task <span className="text-blue-600">#{currentIndex + 1}</span></p>
        </div>
        <div className={`w-20 h-20 rounded-3xl flex flex-col items-center justify-center border-4 glass-card font-black ${timeLeft <= 5 ? "border-rose-500 text-rose-500 animate-pulse" : "text-slate-900 border-slate-900"}`}>
          <span className="text-3xl">{timeLeft}</span>
        </div>
      </div>
      
      <ProgressBar current={currentIndex + 1} total={quizQuestions.length} />
      
      <div className="w-full animate-in fade-in zoom-in duration-300">
        <QuestionCard 
          question={quizQuestions[currentIndex]} 
          onAnswer={handleAnswer} 
          isAnswered={isAnswered} 
          userAnswer={userAnswers[quizQuestions[currentIndex].id]} 
          correctAnswer={quizQuestions[currentIndex].answer} 
        />
      </div>

      {isAnswered && (
        <div className="w-full mt-10 flex justify-end animate-in slide-in-from-bottom-4 duration-300">
          <button onClick={nextQuestion} className="px-12 py-6 bg-slate-900 text-white rounded-[1.5rem] font-black text-2xl hover:scale-105 shadow-2xl transition-all uppercase tracking-widest">
            {currentIndex === quizQuestions.length - 1 ? "Complete Mission" : "Next Task"}
          </button>
        </div>
      )}
    </div>
  );
}
