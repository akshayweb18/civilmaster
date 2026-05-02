"use client";

import React from "react";
import { Question } from "../data/questions";
import { OptionButton } from "./OptionButton";

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: string) => void;
  isAnswered: boolean;
  userAnswer?: string | number;
  correctAnswer?: string | number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswer,
  isAnswered,
  userAnswer,
  correctAnswer,
}) => {
  if (!question) return <div className="text-center p-10 font-black uppercase text-slate-400">Mission Loading...</div>;

  const isUserCorrect = userAnswer === correctAnswer;

  return (
    <div className={`w-full glass-card rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 ${isAnswered && !isUserCorrect ? "animate-shake" : ""}`}>
      {/* Category Labels */}
      <div className="flex items-center gap-3 mb-8">
        <span className="px-4 py-1.5 bg-blue-50 text-blue-700 text-[10px] font-black rounded-full uppercase tracking-widest border border-blue-100">
          {question.subject.toUpperCase()}
        </span>
        <span className={`px-4 py-1.5 text-[10px] font-black rounded-full uppercase tracking-widest border ${question.difficulty === "beginner" ? "bg-emerald-50 text-emerald-700 border-emerald-100" :
          question.difficulty === "medium" ? "bg-amber-50 text-amber-700 border-amber-100" : "bg-rose-50 text-rose-700 border-rose-100"
          }`}>
          {question.difficulty}
        </span>
      </div>

      {/* Question Text */}
      <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-10 leading-[1.1] tracking-tight">
        {question.question}
      </h2>

      {/* 4 OPTIONS (MCQ ONLY) */}
      <div className="grid grid-cols-1 gap-4">
        {question.options && question.options.map((option, idx) => (
          <OptionButton
            key={`${question.id}-${idx}`}
            option={option}
            isSelected={userAnswer === option}
            isCorrect={isAnswered && option === question.answer}
            isWrong={isAnswered && userAnswer === option && userAnswer !== question.answer}
            isDisabled={isAnswered}
            onClick={() => onAnswer(option)}
          />
        ))}
      </div>

      {/* Engineering Insight (Only after answering) */}
      {isAnswered && (
        <div className="mt-10 p-8 bg-slate-50 rounded-[2.5rem] border-2 border-slate-100 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl">💡</span>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Engineering Insight</p>
              <p className="text-lg font-black text-slate-900 uppercase">Analysis Report</p>
            </div>
          </div>
          <p className="text-slate-600 text-xl italic leading-relaxed mb-6">
            {question.explanation}
          </p>
          {!isUserCorrect && (
            <div className="pt-6 border-t-2 border-slate-200">
              <p className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">Standard Solution</p>
              <p className="text-2xl font-black text-emerald-600 uppercase tracking-tight">
                {question.answer}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
