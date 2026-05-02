"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function FieldTools() {
  const [activeTool, setActiveTool] = useState<"concrete" | "steel" | "bricks">("concrete");

  return (
    <div className="flex-grow flex flex-col items-center p-4 md:p-12 max-w-5xl mx-auto w-full space-y-12 animate-in fade-in duration-300">
      {/* Header */}
      <div className="w-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-slate-400 font-black uppercase text-[10px] tracking-widest hover:text-slate-900 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Studio
        </Link>
        <div className="px-4 py-1.5 bg-amber-50 text-amber-600 text-[10px] font-black rounded-full uppercase tracking-widest border border-amber-100">
          Field Engineer Toolkit 🏗️
        </div>
      </div>

      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter italic">Field Calculators</h1>
        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Essential Tools for On-Site Engineering</p>
      </div>

      {/* Tool Selector */}
      <div className="grid grid-cols-3 gap-2 w-full max-w-2xl bg-slate-100 p-2 rounded-3xl">
        <button onClick={() => setActiveTool("concrete")} className={`py-4 rounded-2xl font-black text-[10px] md:text-xs uppercase transition-all ${activeTool === "concrete" ? "bg-white text-slate-900 shadow-md" : "text-slate-400 hover:text-slate-600"}`}>Concrete</button>
        <button onClick={() => setActiveTool("steel")} className={`py-4 rounded-2xl font-black text-[10px] md:text-xs uppercase transition-all ${activeTool === "steel" ? "bg-white text-slate-900 shadow-md" : "text-slate-400 hover:text-slate-600"}`}>Steel</button>
        <button onClick={() => setActiveTool("bricks")} className={`py-4 rounded-2xl font-black text-[10px] md:text-xs uppercase transition-all ${activeTool === "bricks" ? "bg-white text-slate-900 shadow-md" : "text-slate-400 hover:text-slate-600"}`}>Bricks</button>
      </div>

      {/* Tools Content */}
      <div className="w-full">
        {activeTool === "concrete" && <ConcreteCalculator />}
        {activeTool === "steel" && <SteelCalculator />}
        {activeTool === "bricks" && <BrickCalculator />}
      </div>
    </div>
  );
}

function ConcreteCalculator() {
  const [dim, setDim] = useState({ l: 0, b: 0, h: 0 });
  const volume = dim.l * dim.b * dim.h;

  // Ratios for M20 (1:1.5:3) -> Sum = 5.5
  // Dry Volume factor = 1.54
  const cement = (volume * 1.54 * (1 / 5.5)) * 28.8; // Bags (1m3 = 28.8 bags approx)
  const sand = volume * 1.54 * (1.5 / 5.5);
  const aggregate = volume * 1.54 * (3 / 5.5);

  return (
    <div className="glass-card rounded-[3rem] p-8 md:p-12 border-4 border-slate-900 shadow-2xl animate-in slide-in-from-bottom-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Length (m)</label>
          <input type="number" onChange={(e) => setDim({ ...dim, l: parseFloat(e.target.value) || 0 })} className="w-full p-6 rounded-2xl border-2 border-slate-100 bg-white font-black text-2xl outline-none focus:border-blue-500 shadow-inner" placeholder="0.0" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Width (m)</label>
          <input type="number" onChange={(e) => setDim({ ...dim, b: parseFloat(e.target.value) || 0 })} className="w-full p-6 rounded-2xl border-2 border-slate-100 bg-white font-black text-2xl outline-none focus:border-blue-500 shadow-inner" placeholder="0.0" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Height (m)</label>
          <input type="number" onChange={(e) => setDim({ ...dim, h: parseFloat(e.target.value) || 0 })} className="w-full p-6 rounded-2xl border-2 border-slate-100 bg-white font-black text-2xl outline-none focus:border-blue-500 shadow-inner" placeholder="0.0" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-6 bg-slate-900 text-white rounded-3xl text-center">
          <p className="text-[8px] font-black uppercase tracking-widest opacity-50 mb-1">Total Volume</p>
          <p className="text-3xl font-black italic">{volume.toFixed(2)} m³</p>
        </div>
        <div className="p-6 bg-blue-50 border-2 border-blue-100 rounded-3xl text-center">
          <p className="text-[8px] font-black uppercase tracking-widest text-blue-600 mb-1">Cement (Bags)</p>
          <p className="text-3xl font-black text-blue-900">{Math.ceil(cement)}</p>
        </div>
        <div className="p-6 bg-amber-50 border-2 border-amber-100 rounded-3xl text-center">
          <p className="text-[8px] font-black uppercase tracking-widest text-amber-600 mb-1">Sand (m³)</p>
          <p className="text-3xl font-black text-amber-900">{sand.toFixed(2)}</p>
        </div>
        <div className="p-6 bg-emerald-50 border-2 border-emerald-100 rounded-3xl text-center">
          <p className="text-[8px] font-black uppercase tracking-widest text-emerald-600 mb-1">Aggregate (m³)</p>
          <p className="text-3xl font-black text-emerald-900">{aggregate.toFixed(2)}</p>
        </div>
      </div>
      <p className="mt-8 text-[10px] font-bold text-slate-400 text-center uppercase tracking-widest italic">* Material estimate based on M20 standard (1:1.5:3)</p>
    </div>
  );
}

function SteelCalculator() {
  const [diameter, setDiameter] = useState(0);
  const [length, setLength] = useState(0);
  const weight = (diameter * diameter * length) / 162;

  return (
    <div className="glass-card rounded-[3rem] p-8 md:p-12 border-4 border-slate-900 shadow-2xl animate-in slide-in-from-bottom-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Diameter (mm)</label>
          <select onChange={(e) => setDiameter(parseFloat(e.target.value))} className="w-full p-6 rounded-2xl border-2 border-slate-100 bg-white font-black text-2xl outline-none focus:border-blue-500 shadow-inner appearance-none">
            <option value="0">Select...</option>
            {[6, 8, 10, 12, 16, 20, 25, 32].map(d => <option key={d} value={d}>{d} mm</option>)}
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Length (m)</label>
          <input type="number" onChange={(e) => setLength(parseFloat(e.target.value) || 0)} className="w-full p-6 rounded-2xl border-2 border-slate-100 bg-white font-black text-2xl outline-none focus:border-blue-500 shadow-inner" placeholder="0.0" />
        </div>
      </div>

      <div className="p-10 bg-slate-900 text-white rounded-[2.5rem] text-center max-w-md mx-auto shadow-2xl">
        <p className="text-xs font-black uppercase tracking-[0.3em] opacity-50 mb-3">Total Estimated Weight</p>
        <p className="text-6xl font-black italic">{weight.toFixed(3)} <span className="text-2xl not-italic text-blue-500">kg</span></p>
        <p className="mt-4 text-[9px] font-bold opacity-30 uppercase tracking-widest">Formula: (D² / 162) * L</p>
      </div>
    </div>
  );
}

function BrickCalculator() {
  const [area, setArea] = useState(0);
  const [thickness, setThickness] = useState(9); // 4.5 or 9 inches

  // Approx 500 bricks per m3 (9 inch wall) or 50 bricks per m2 (4.5 inch wall)
  // Let's assume input in m2
  const bricks = thickness === 9 ? area * 100 : area * 50;

  return (
    <div className="glass-card rounded-[3rem] p-8 md:p-12 border-4 border-slate-900 shadow-2xl animate-in slide-in-from-bottom-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Wall Area (m²)</label>
          <input type="number" onChange={(e) => setArea(parseFloat(e.target.value) || 0)} className="w-full p-6 rounded-2xl border-2 border-slate-100 bg-white font-black text-2xl outline-none focus:border-blue-500 shadow-inner" placeholder="0.0" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Wall Thickness</label>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={() => setThickness(4.5)} className={`py-5 rounded-xl border-2 font-black text-xs uppercase tracking-widest transition-all ${thickness === 4.5 ? "bg-slate-900 text-white border-slate-900" : "border-slate-100 text-slate-400"}`}>4.5 inch</button>
            <button onClick={() => setThickness(9)} className={`py-5 rounded-xl border-2 font-black text-xs uppercase tracking-widest transition-all ${thickness === 9 ? "bg-slate-900 text-white border-slate-900" : "border-slate-100 text-slate-400"}`}>9 inch</button>
          </div>
        </div>
      </div>

      <div className="p-10 bg-slate-900 text-white rounded-[2.5rem] text-center max-w-md mx-auto shadow-2xl">
        <p className="text-xs font-black uppercase tracking-[0.3em] opacity-50 mb-3">Bricks Required</p>
        <p className="text-6xl font-black italic">{Math.ceil(bricks)} <span className="text-2xl not-italic text-amber-500">pcs</span></p>
        <p className="mt-4 text-[9px] font-bold opacity-30 uppercase tracking-widest italic">Includes standard mortar joints</p>
      </div>
    </div>
  );
}
