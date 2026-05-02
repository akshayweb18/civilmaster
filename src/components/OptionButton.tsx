"use client";

import React from "react";

interface OptionButtonProps {
  option: string;
  onClick: () => void;
  isSelected: boolean;
  isCorrect: boolean;
  isWrong: boolean;
  isDisabled: boolean;
}

export const OptionButton = React.memo(({
  option,
  onClick,
  isSelected,
  isCorrect,
  isWrong,
  isDisabled,
}: OptionButtonProps) => {
  // Base style: Premium White Glass
  let statusClass = "bg-white border-slate-100 text-slate-900 shadow-sm hover:border-indigo-500 hover:shadow-md";
  
  // Feedback states
  if (isCorrect) statusClass = "bg-emerald-50 border-emerald-500 text-emerald-700 shadow-lg";
  else if (isWrong) statusClass = "bg-rose-50 border-rose-500 text-rose-700 shadow-lg";
  else if (isSelected) statusClass = "bg-indigo-600 border-indigo-600 text-white shadow-xl scale-[1.01]";

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`
        w-full p-6 md:p-8 text-left border rounded-[1.5rem] transition-all duration-200 font-bold text-xl md:text-2xl flex items-center justify-between group no-anim
        ${statusClass}
        ${isDisabled && !isCorrect && !isWrong ? "opacity-40" : ""}
      `}
    >
      <span className="flex-grow leading-tight">{option}</span>
      
      {/* Subtle Indicators */}
      <div className="shrink-0 ml-4">
        {isCorrect && <span className="text-2xl">✅</span>}
        {isWrong && <span className="text-2xl">❌</span>}
        {!isCorrect && !isWrong && (
          <div className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center ${
            isSelected ? "border-white bg-white/20" : "border-slate-300 group-hover:border-indigo-400"
          }`}>
            <div className={`w-2.5 h-2.5 rounded-full transition-all ${isSelected ? "bg-white" : "bg-transparent group-hover:bg-indigo-100"}`} />
          </div>
        )}
      </div>
    </button>
  );
});

OptionButton.displayName = "OptionButton";
