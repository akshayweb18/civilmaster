import React from "react";
import PracticalCard from "../../components/PracticalCard";
import practicals from "../../data/practicals";

export default function PracticalsPage() {
  return (
    <main className="p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-black mb-6">Civil Engineering Practicals</h1>
        <p className="text-slate-600 mb-8">A large, curated collection of laboratory and field practicals for civil engineering students and instructors.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practicals.map((p) => (
            <PracticalCard key={p.id} practical={p} />
          ))}
        </div>
      </div>
    </main>
  );
}
