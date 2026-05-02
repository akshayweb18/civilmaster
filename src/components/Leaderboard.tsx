"use client";

import React, { useEffect, useState } from "react";

interface ScoreEntry {
  name: string;
  score: number;
  total: number;
  difficulty: string;
  subject: string;
  timestamp: number;
}

export const Leaderboard = () => {
  const [scores, setScores] = useState<ScoreEntry[]>([]);

  useEffect(() => {
    const history = localStorage.getItem("quizHistory");
    if (history) {
      const parsed: any[] = JSON.parse(history);
      // Sort by score (desc) and then by timestamp (desc)
      const sorted = parsed
        .map(h => ({
          name: h.userName || "Guest Engineer",
          score: h.score,
          total: h.total,
          difficulty: h.difficulty,
          subject: h.subject,
          timestamp: h.timestamp
        }))
        .sort((a, b) => b.score - a.score || b.timestamp - a.timestamp)
        .slice(0, 5); // Top 5
      setScores(sorted);
    }
  }, []);

  if (scores.length === 0) return null;

  return (
    <div className="w-full glass-card rounded-[2.5rem] p-8 md:p-10 border-2 border-slate-900 dark:border-white overflow-hidden relative">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      </div>

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">Top Hall of Fame</h2>
        <span className="px-3 py-1 bg-amber-100 text-amber-700 text-[10px] font-black rounded-full uppercase tracking-widest">Global Ranking</span>
      </div>

      <div className="space-y-4">
        {scores.map((entry, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all hover:scale-[1.02] ${idx === 0 ? "bg-amber-50 border-amber-200 dark:bg-amber-900/20" : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800"
              }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-sm ${idx === 0 ? "bg-amber-500 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-400"
                }`}>
                {idx + 1}
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white leading-none mb-1">{entry.name}</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{entry.subject} • {entry.difficulty}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl font-black text-slate-900 dark:text-white">{entry.score} <span className="text-xs text-slate-400">/ {entry.total}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
