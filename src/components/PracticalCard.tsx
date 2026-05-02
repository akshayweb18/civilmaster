import React from "react";
import type { Practical } from "../data/practicals";

export const PracticalCard: React.FC<{ practical: Practical }> = ({ practical }) => {
  return (
    <div className="glass-card rounded-2xl p-6 border border-slate-100">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-lg md:text-xl font-black text-slate-900 mb-1">{practical.title}</h3>
          <p className="text-sm text-slate-500">{practical.description}</p>
        </div>
        <div className="text-right">
          {practical.difficulty && (
            <span className={`px-3 py-1 text-[11px] font-black rounded-full uppercase tracking-widest ${practical.difficulty === 'Easy' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : practical.difficulty === 'Medium' ? 'bg-amber-50 text-amber-700 border border-amber-100' : 'bg-rose-50 text-rose-700 border border-rose-100'}`}>
              {practical.difficulty}
            </span>
          )}
        </div>
      </div>

      {practical.tags && (
        <div className="flex flex-wrap gap-2 mb-4">
          {practical.tags.map((t) => (
            <span key={t} className="text-xs bg-slate-50 px-2 py-1 rounded-full text-slate-600 border border-slate-100">{t}</span>
          ))}
        </div>
      )}

      <details className="text-slate-700">
        <summary className="cursor-pointer font-bold mb-2">Procedure / Steps</summary>
        <ol className="list-decimal ml-5 mt-2 space-y-2">
          {practical.steps.map((s, idx) => (
            <li key={idx} className="text-sm">{s}</li>
          ))}
        </ol>
      </details>
    </div>
  );
};

export default PracticalCard;
