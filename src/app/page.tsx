"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Difficulty, Subject } from "../data/questions";
import { DifficultyCard } from "../components/DifficultyCard";

const SUBJECTS: { id: Subject; label: string; icon: string; color: string }[] = [
  { id: "mixed", label: "All Topics", icon: "🌐", color: "from-slate-800 to-slate-900" },
  { id: "field", label: "Field Practice", icon: "🚧", color: "from-amber-500 to-orange-600" },
  { id: "structures", label: "Structures", icon: "📐", color: "from-rose-500 to-pink-600" },
  { id: "geotech", label: "Geotechnical", icon: "🌱", color: "from-emerald-600 to-teal-700" },
  { id: "transport", label: "Transportation", icon: "🛣️", color: "from-blue-500 to-indigo-600" },
  { id: "env", label: "Environmental", icon: "💧", color: "from-cyan-500 to-blue-600" },
  { id: "materials", label: "Materials", icon: "🧱", color: "from-slate-600 to-slate-700" },
  { id: "survey", label: "Surveying", icon: "🔭", color: "from-violet-500 to-purple-600" },
];

const DAILY_TIPS = [
  { code: "IS 456", tip: "Minimum curing period for concrete is 7 days for OPC and 10 days for mineral admixtures." },
  { code: "IS 1786", tip: "For TMT bars, the percentage elongation should not be less than 14.5% for Fe500 grade." },
  { code: "Field Tip", tip: "Always check the 'Slump' of concrete before pouring to ensure workability and strength." },
];

export default function Home() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject>("mixed");
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    setTipIndex(Math.floor(Math.random() * DAILY_TIPS.length));
  }, []);

  return (
    <div className="flex-grow flex flex-col items-center p-4 md:p-12 max-w-7xl mx-auto w-full space-y-12 md:space-y-16">
      {/* Hero Section */}
      <div className="text-center animate-in fade-in slide-in-from-top-4 duration-300">
        <div className="inline-block px-3 py-1 mb-4 bg-blue-50 text-blue-600 text-[10px] font-black rounded-full uppercase tracking-widest border border-blue-100">
          Professional Engineering Studio
        </div>
        <h1 className="text-3xl md:text-7xl font-black text-slate-900 mb-4 leading-tight tracking-tight">
          The <span className="gradient-text">Site Master</span> Challenge
        </h1>
        <p className="text-slate-500 text-sm md:text-xl max-w-2xl mx-auto leading-relaxed italic">
          Select your expertise, choose your tier, and dominate the mission.
        </p>
      </div>

      {/* Main Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full animate-in fade-in zoom-in duration-300">
        {/* Battle Arena */}
        <Link href="/battle" className="group block">
          <div className="h-full relative overflow-hidden bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-center text-white shadow-2xl transition-all duration-500 group-hover:scale-[1.01]">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent" />
            <div className="relative z-10 space-y-6">
              <span className="inline-block px-4 py-1 bg-blue-600 text-[8px] md:text-[10px] font-black rounded-full uppercase tracking-widest">Multiplayer</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none italic uppercase">
                Engineer <span className="text-blue-500 not-italic opacity-40">VS</span> Engineer
              </h2>
              <div className="flex items-center justify-center gap-4 py-2">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-xl border border-slate-700">🚧</div>
                <div className="text-2xl font-black text-blue-500 italic animate-pulse">VS</div>
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-xl border border-slate-700">🚜</div>
              </div>
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-xl font-black text-xs md:text-sm uppercase tracking-widest transition-all group-hover:bg-blue-50">
                Enter Battle Arena ⚔️
              </div>
            </div>
          </div>
        </Link>

        {/* Field Tools (NEW) */}
        <Link href="/tools" className="group block">
          <div className="h-full relative overflow-hidden bg-amber-500 rounded-[2.5rem] p-8 md:p-12 text-center text-white shadow-2xl transition-all duration-500 group-hover:scale-[1.01]">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
            <div className="relative z-10 space-y-6">
              <span className="inline-block px-4 py-1 bg-white text-amber-600 text-[8px] md:text-[10px] font-black rounded-full uppercase tracking-widest">Calculators</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none italic uppercase">
                Field <span className="text-amber-900 not-italic opacity-40">&</span> Toolkit
              </h2>
              <div className="flex items-center justify-center gap-4 py-2 text-4xl">
                🏗️ 📏 🧱
              </div>
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-xl font-black text-xs md:text-sm uppercase tracking-widest transition-all group-hover:bg-slate-800">
                Open Field Tools 🛠️
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Daily Tip Card */}
      <div className="w-full bg-slate-100 p-6 md:p-8 rounded-[2rem] border-2 border-slate-200 flex flex-col md:flex-row items-center gap-6 animate-in fade-in duration-300">
        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg shrink-0">💡</div>
        <div className="text-center md:text-left">
          <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-1">Daily IS Code Insight ({DAILY_TIPS[tipIndex].code})</p>
          <p className="text-slate-700 text-base md:text-lg font-bold italic leading-snug">{DAILY_TIPS[tipIndex].tip}</p>
        </div>
      </div>

      <div className="max-w-6xl w-full space-y-12 md:space-y-16">
        {/* Subject Mastery */}
        <div className="space-y-6">
          <h2 className="text-lg md:text-2xl font-black text-slate-900 uppercase tracking-widest flex items-center gap-3">
            <span className="w-8 h-8 md:w-10 md:h-10 bg-slate-900 rounded-xl md:rounded-2xl flex items-center justify-center text-white text-[10px] md:text-sm shadow-lg italic">01</span>
            Knowledge Mission
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {SUBJECTS.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setSelectedSubject(sub.id)}
                className={`
                  group relative p-4 rounded-2xl border-2 transition-all duration-300 text-left flex items-center gap-3
                  ${selectedSubject === sub.id ? "border-blue-600 bg-blue-50 shadow-md" : "border-slate-100 bg-white hover:border-blue-300"}
                `}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${sub.color} flex items-center justify-center text-xl shadow-md shrink-0`}>
                  {sub.icon}
                </div>
                <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{sub.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 2. Difficulty - Mission Tier */}
        <div className="space-y-8">
          <div className="px-4">
            <h2 className="text-3xl font-display font-black text-slate-900 uppercase tracking-tighter">Mission Tier</h2>
            <p className="text-slate-400 font-medium text-base">Define the responsibility level for this engineering deployment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DifficultyCard
              difficulty="beginner"
              isSelected={selectedDifficulty === "beginner"}
              onClick={() => setSelectedDifficulty("beginner")}
              description="Fundamentals & Basic Protocols"
              icon="👷"
            />
            <DifficultyCard
              difficulty="medium"
              isSelected={selectedDifficulty === "medium"}
              onClick={() => setSelectedDifficulty("medium")}
              description="Site Management & Quality Matrix"
              icon="🚧"
            />
            <DifficultyCard
              difficulty="expert"
              isSelected={selectedDifficulty === "expert"}
              onClick={() => setSelectedDifficulty("expert")}
              description="Advanced Structural Analysis"
              icon="🏗️"
            />
          </div>
        </div>

        {/* Start CTA */}
        <div className="flex flex-col items-center pt-6">
          <Link
            href={selectedDifficulty ? `/quiz?difficulty=${selectedDifficulty}&subject=${selectedSubject}` : "#"}
            onClick={(e) => !selectedDifficulty && e.preventDefault()}
            className={`
              group relative inline-flex items-center justify-center px-16 py-6 md:px-24 md:py-8 font-black text-white transition-all duration-500 bg-slate-900 rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl
              ${!selectedDifficulty ? "opacity-50 cursor-not-allowed" : "hover:scale-105 active:scale-95"}
            `}
          >
            <span className="relative z-10 flex items-center gap-3 text-lg md:text-2xl uppercase tracking-widest">
              START MISSION
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}
