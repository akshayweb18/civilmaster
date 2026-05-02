"use client";

import React from "react";

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full bg-slate-200/50 rounded-full h-3 mb-6 relative overflow-hidden backdrop-blur-sm border border-slate-300/30">
      <div
        className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(37,99,235,0.4)]"
        style={{ width: `${percentage}%` }}
      />
      <div className="absolute top-0 right-3 text-[10px] font-bold text-slate-500 h-full flex items-center">
        {Math.round(percentage)}%
      </div>
    </div>
  );
};
