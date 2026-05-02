"use client";

import React from "react";
import { Difficulty } from "../data/questions";

interface DifficultyCardProps {
  difficulty: Difficulty;
  isSelected: boolean;
  onClick: () => void;
  description: string;
  icon: string;
}

export const DifficultyCard: React.FC<DifficultyCardProps> = ({
  difficulty,
  isSelected,
  onClick,
  description,
  icon,
}) => {
  const getTheme = () => {
    switch(difficulty) {
      case "beginner": return { color: "emerald", shadow: "shadow-emerald-500/20", border: "border-emerald-500/30" };
      case "medium": return { color: "amber", shadow: "shadow-amber-500/20", border: "border-amber-500/30" };
      case "expert": return { color: "rose", shadow: "shadow-rose-500/20", border: "border-rose-500/30" };
      default: return { color: "blue", shadow: "shadow-blue-500/20", border: "border-blue-500/30" };
    }
  };

  const theme = getTheme();

  return (
    <button
      onClick={onClick}
      className={`
        group relative w-full p-8 rounded-[2.5rem] border-2 transition-all duration-300 text-left flex flex-col no-anim
        ${isSelected 
          ? `bg-slate-900 border-slate-900 shadow-2xl scale-[1.02] ${theme.shadow}` 
          : `bg-white border-slate-100 text-slate-900 hover:border-slate-300 shadow-sm`}
      `}
    >
      {/* Visual Header */}
      <div className="flex items-start justify-between mb-8">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shadow-xl transition-all ${
          isSelected ? `bg-slate-800 border ${theme.border}` : "bg-slate-50 border border-slate-100"
        }`}>
          <span className={isSelected ? "animate-pulse" : ""}>{icon}</span>
        </div>
        {isSelected && (
          <div className={`px-4 py-1.5 bg-${theme.color}-500 text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg`}>
            Tier Active
          </div>
        )}
      </div>
      
      {/* Content Area */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h3 className={`text-3xl font-display font-black uppercase tracking-tighter leading-none italic ${isSelected ? "text-white" : "text-slate-900"}`}>
            {difficulty}
          </h3>
          {isSelected && <div className={`w-2 h-2 rounded-full bg-${theme.color}-500 shadow-[0_0_10px_rgba(0,0,0,0.5)]`} />}
        </div>
        <p className={`text-sm font-bold uppercase tracking-wide leading-relaxed ${isSelected ? "text-slate-400" : "text-slate-500"}`}>
          {description}
        </p>
      </div>

      {/* Footer Decoration */}
      {!isSelected && (
        <div className="mt-8 pt-4 border-t border-slate-50 group-hover:border-slate-200 flex items-center justify-between">
          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest group-hover:text-slate-900">Deploy Mission</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-300 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      )}

      {/* Background Accent Glow (Only when selected) */}
      {isSelected && (
        <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-${theme.color}-500/10 blur-[60px] pointer-events-none rounded-full`} />
      )}
    </button>
  );
};
