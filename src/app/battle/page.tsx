"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { questions, Question, Difficulty, Subject } from "../../data/questions";
import { QuestionCard } from "../../components/QuestionCard";
import { ProgressBar } from "../../components/ProgressBar";
import { playSound } from "../../utils/sounds";

type Player = {
  name: string;
  score: number;
};

const SUBJECTS: { id: Subject; label: string; icon: string }[] = [
  { id: "mixed", label: "All Topics", icon: "🌐" },
  { id: "field", label: "Field Practice", icon: "🚧" },
  { id: "structures", label: "Structures", icon: "📐" },
  { id: "geotech", label: "Geotechnical", icon: "🌱" },
  { id: "transport", label: "Transportation", icon: "🛣️" },
  { id: "env", label: "Environmental", icon: "💧" },
  { id: "materials", label: "Materials", icon: "🧱" },
  { id: "survey", label: "Surveying", icon: "🔭" },
];

export default function BattlePage() {
  const router = useRouter();
  const [gameState, setGameState] = useState<"setup" | "playing" | "switching" | "results">("setup");
  const [player1, setPlayer1] = useState<Player>({ name: "", score: 0 });
  const [player2, setPlayer2] = useState<Player>({ name: "", score: 0 });
  const [currentPlayer, setCurrentPlayer] = useState<1 | 2>(1);
  
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");
  const [subject, setSubject] = useState<Subject>("field");
  const [battleQuestions, setBattleQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState<string | undefined>(undefined);
  const [timeLeft, setTimeLeft] = useState(15);

  const startBattle = () => {
    if (!player1.name || !player2.name) {
      alert("Please enter names for both engineers!");
      return;
    }
    
    // 1. Filter by Difficulty
    let pool = questions.filter((q) => q.difficulty === difficulty);
    
    // 2. Filter by Subject if not 'mixed'
    if (subject !== "mixed") {
      const subjectPool = pool.filter((q) => q.subject === subject);
      if (subjectPool.length > 0) pool = subjectPool;
    }
    
    // 3. Fallback: If pool is still empty, use any questions matching difficulty
    if (pool.length === 0) {
      pool = questions.filter(q => q.difficulty === difficulty);
    }

    // 4. Shuffle and pick exactly 10, filling from the broader bank if needed
    const shuffled = [...new Set([
      ...[...pool].sort(() => 0.5 - Math.random()),
      ...[...questions.filter((q) => q.difficulty === difficulty)].sort(() => 0.5 - Math.random()),
      ...[...questions].sort(() => 0.5 - Math.random()),
    ])].slice(0, 10);

    setBattleQuestions(shuffled);

    setGameState("playing");
    playSound("click");
  };

  useEffect(() => {
    if (gameState !== "playing" || isAnswered) return;
    if (timeLeft === 0) { handleAnswer("TIME_UP"); return; }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isAnswered, gameState]);

  const handleAnswer = (answer: string) => {
    if (isAnswered) return;
    setCurrentAnswer(answer);
    
    const currentQ = battleQuestions[currentIndex];
    const isCorrect = answer !== "TIME_UP" && answer === currentQ.answer;

    if (isCorrect) {
      playSound("correct");
      if (currentPlayer === 1) setPlayer1(p => ({ ...p, score: p.score + 1 }));
      else setPlayer2(p => ({ ...p, score: p.score + 1 }));
    } else {
      playSound("wrong");
    }
    setIsAnswered(true);
  };

  const nextStep = () => {
    playSound("click");
    if (currentIndex < battleQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsAnswered(false);
      setCurrentAnswer(undefined);
      setTimeLeft(15);
    } else {
      if (currentPlayer === 1) setGameState("switching");
      else setGameState("results");
      playSound("finish");
    }
  };

  const startSecondPlayer = () => {
    setCurrentPlayer(2);
    setCurrentIndex(0);
    setIsAnswered(false);
    setCurrentAnswer(undefined);
    setTimeLeft(15);
    setGameState("playing");
  };

  if (gameState === "setup") {
    return (
      <div className="grow flex flex-col items-center justify-center px-4 py-6 md:p-6 max-w-2xl mx-auto w-full space-y-8 md:space-y-12 animate-in fade-in zoom-in duration-300">
        <div className="text-center space-y-3 md:space-y-4">
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter italic leading-none">Arena Setup</h1>
          <p className="text-slate-500 font-bold uppercase tracking-[0.28em] md:tracking-[0.4em] text-[10px] md:text-xs">Engineer vs Engineer Duel</p>
        </div>

        <div className="w-full glass-card rounded-[2.5rem] md:rounded-[4rem] p-5 md:p-12 space-y-8 md:space-y-12 border-4 border-slate-900 shadow-[0_40px_100px_rgba(0,0,0,0.1)] relative overflow-hidden">
          {/* Identity Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="space-y-3 md:space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 block px-2">Engineer 1 Name</label>
              <input 
                type="text" 
                placeholder="e.g. Haresh" 
                value={player1.name} 
                onChange={(e) => setPlayer1({...player1, name: e.target.value})} 
                className="w-full p-4 md:p-6 rounded-2xl md:rounded-3xl border-4 border-slate-100 bg-white text-base md:text-xl font-bold outline-none focus:border-blue-500 transition-all shadow-inner" 
              />
            </div>
            <div className="space-y-3 md:space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-600 block px-2">Engineer 2 Name</label>
              <input 
                type="text" 
                placeholder="e.g. Mayur" 
                value={player2.name} 
                onChange={(e) => setPlayer2({...player2, name: e.target.value})} 
                className="w-full p-4 md:p-6 rounded-2xl md:rounded-3xl border-4 border-slate-100 bg-white text-base md:text-xl font-bold outline-none focus:border-rose-500 transition-all shadow-inner" 
              />
            </div>
          </div>

          {/* Subject Grid */}
          <div className="space-y-4 md:space-y-6">
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 block text-center">Battle Arena Subject</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
              {SUBJECTS.map(s => (
                <button 
                  key={s.id} 
                  onClick={() => setSubject(s.id)} 
                  className={`p-4 md:p-6 rounded-2xl md:rounded-4xl border-2 flex flex-col items-center gap-2 md:gap-3 transition-all min-h-22 ${subject === s.id ? "border-slate-900 bg-slate-900 text-white scale-105 shadow-xl" : "border-slate-100 text-slate-400 hover:border-slate-300"}`}
                >
                  <span className="text-2xl md:text-3xl">{s.icon}</span>
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest leading-tight text-center">{s.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Grid */}
          <div className="space-y-4 md:space-y-6">
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 block text-center">Difficulty Tier</label>
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {(["beginner", "medium", "expert"] as Difficulty[]).map(d => (
                <button 
                  key={d} 
                  onClick={() => setDifficulty(d)} 
                  className={`p-3 md:p-5 rounded-2xl border-2 font-black text-[10px] md:text-xs uppercase tracking-widest transition-all ${difficulty === d ? "bg-slate-900 text-white border-slate-900 scale-105" : "border-slate-100 text-slate-400 hover:border-slate-200"}`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={startBattle} 
            className="w-full py-5 md:py-8 bg-blue-600 text-white rounded-2xl md:rounded-[2.5rem] font-black text-base md:text-2xl uppercase tracking-[0.2em] md:tracking-[0.3em] hover:scale-[1.02] active:scale-95 transition-all shadow-[0_20px_60px_rgba(37,99,235,0.3)] group overflow-hidden relative"
          >
            <span className="relative z-10">Enter Arena ⚔️</span>
            <div className="absolute inset-0 bg-linear-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>
    );
  }

  // Rest of the logic remains same for gameplay
  if (gameState === "switching") {
    return (
      <div className="grow flex flex-col items-center justify-center text-center px-4 py-8 md:p-12 space-y-8 md:space-y-10 animate-in zoom-in duration-500 max-w-3xl mx-auto w-full">
        <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-900 rounded-full flex items-center justify-center text-white text-4xl md:text-5xl animate-bounce shadow-2xl border-4 border-white">⚔️</div>
        <h2 className="text-4xl md:text-7xl font-black text-slate-900 uppercase leading-none italic tracking-tighter">YOUR TURN,<br/><span className="text-blue-600">{player2.name.toUpperCase()}</span>!</h2>
        <button onClick={startSecondPlayer} className="w-full sm:w-auto px-10 md:px-20 py-5 md:py-10 bg-slate-900 text-white rounded-3xl md:rounded-[3rem] font-black text-xl md:text-3xl shadow-[0_30px_70px_rgba(0,0,0,0.2)] hover:scale-105 transition-all uppercase tracking-widest">READY?</button>
      </div>
    );
  }

  if (gameState === "results") {
    const winner = player1.score > player2.score ? player1 : player2.score > player1.score ? player2 : null;
    return (
      <div className="grow flex flex-col items-center justify-center px-4 py-8 md:p-6 max-w-5xl mx-auto w-full space-y-10 md:space-y-16 animate-in fade-in zoom-in">
        <h1 className="text-4xl md:text-7xl font-black text-slate-900 uppercase italic tracking-tighter text-center">Duel Results</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 w-full">
          <div className={`p-8 md:p-14 rounded-[2.5rem] md:rounded-[4rem] border-4 text-center glass-card transition-all ${winner === player1 ? "border-blue-500 scale-105 shadow-[0_40px_100px_rgba(37,99,235,0.2)]" : "border-slate-100 opacity-50"}`}>
            <h2 className="text-xl md:text-3xl font-black mb-4 md:mb-6 uppercase tracking-widest wrap-break-word">{player1.name}</h2>
            <div className="text-7xl md:text-9xl font-black text-slate-900">{player1.score}</div>
          </div>
          <div className={`p-8 md:p-14 rounded-[2.5rem] md:rounded-[4rem] border-4 text-center glass-card transition-all ${winner === player2 ? "border-rose-500 scale-105 shadow-[0_40px_100px_rgba(244,63,94,0.2)]" : "border-slate-100 opacity-50"}`}>
            <h2 className="text-xl md:text-3xl font-black mb-4 md:mb-6 uppercase tracking-widest wrap-break-word">{player2.name}</h2>
            <div className="text-7xl md:text-9xl font-black text-slate-900">{player2.score}</div>
          </div>
        </div>
        <button onClick={() => router.push("/")} className="w-full sm:w-auto px-10 md:px-16 py-5 md:py-8 bg-slate-900 text-white rounded-2xl md:rounded-4xl font-black text-xl md:text-3xl hover:scale-105 transition-all shadow-2xl uppercase tracking-widest">Back to Home</button>
      </div>
    );
  }

  return (
    <div className="grow flex flex-col items-center px-4 py-4 md:p-12 max-w-4xl mx-auto w-full relative">
      <div className="w-full flex items-start md:items-center justify-between gap-3 md:gap-6 mb-6 md:mb-12">
        <div className="flex items-center gap-2 md:gap-6 min-w-0">
          <div className={`px-4 md:px-8 py-3 md:py-5 rounded-2xl md:rounded-4xl border-4 font-black shadow-xl text-[10px] md:text-xl transition-all ${currentPlayer === 1 ? "bg-blue-600 text-white border-blue-600 scale-105 md:scale-110" : "bg-white text-slate-300 border-slate-100"}`}>
            {player1.name}: {player1.score}
          </div>
          <div className="text-xl md:text-3xl font-black text-slate-200 italic">VS</div>
          <div className={`px-4 md:px-8 py-3 md:py-5 rounded-2xl md:rounded-4xl border-4 font-black shadow-xl text-[10px] md:text-xl transition-all ${currentPlayer === 2 ? "bg-rose-600 text-white border-rose-600 scale-105 md:scale-110" : "bg-white text-slate-300 border-slate-100"}`}>
            {player2.name}: {player2.score}
          </div>
        </div>
        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex flex-col items-center justify-center border-4 glass-card font-black ${timeLeft <= 5 ? "text-rose-600 border-rose-600 animate-pulse" : "text-slate-900 border-slate-900"}`}>
          <span className="text-2xl md:text-3xl">{timeLeft}</span>
        </div>
      </div>
      <ProgressBar current={currentIndex + 1} total={10} />
      <QuestionCard 
        question={battleQuestions[currentIndex]} 
        onAnswer={handleAnswer} 
        isAnswered={isAnswered} 
        userAnswer={currentAnswer} 
        correctAnswer={battleQuestions[currentIndex]?.answer as any} 
      />
      {isAnswered && (
        <div className="w-full mt-6 md:mt-10 flex justify-stretch md:justify-end">
          <button onClick={nextStep} className="w-full md:w-auto px-8 md:px-14 py-5 md:py-6 bg-slate-900 text-white rounded-2xl md:rounded-3xl font-black text-base md:text-2xl shadow-2xl transition-all hover:scale-105 uppercase tracking-widest">
            {currentIndex === 9 ? "Finish Duel" : "Next Mission"}
          </button>
        </div>
      )}
    </div>
  );
}
