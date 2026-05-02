"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";
import { Question } from "../../data/questions";

interface QuizResult {
  userName: string;
  score: number;
  total: number;
  difficulty: string;
  subject: string;
  scoresByType: { mcq: number; short: number; number: number; };
  history: Array<{ question: Question; userAnswer: string | number; isCorrect: boolean; }>;
  timestamp: number;
}

export default function ResultPage() {
  const [result, setResult] = useState<QuizResult | null>(null);
  const [showReview, setShowReview] = useState(false);
  const [certificateName, setCertificateName] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem("lastQuizResult");
    if (data) {
      const parsed = JSON.parse(data);
      setResult(parsed);
      setCertificateName(parsed.userName || "");
      if (parsed.score >= 7) {
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
      }
    } else router.push("/");
  }, [router]);

  const generateCertificate = () => {
    if (!certificateName.trim()) {
      alert("Please enter your name to generate certificate.");
      return;
    }
    setIsGenerating(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = 1200;
    canvas.height = 800;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#2563eb";
    ctx.lineWidth = 40;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#0f172a";
    ctx.lineWidth = 10;
    ctx.strokeRect(60, 60, canvas.width - 120, canvas.height - 120);
    ctx.fillStyle = "#0f172a";
    ctx.font = "bold 60px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("CERTIFICATE OF EXCELLENCE", canvas.width / 2, 180);
    ctx.font = "24px sans-serif";
    ctx.fillText("PROUDLY PRESENTED TO", canvas.width / 2, 260);
    ctx.fillStyle = "#2563eb";
    ctx.font = "italic bold 80px sans-serif";
    ctx.fillText(certificateName.toUpperCase(), canvas.width / 2, 380);
    ctx.fillStyle = "#0f172a";
    ctx.font = "24px sans-serif";
    ctx.fillText(`FOR SUCCESSFULLY COMPLETING THE CIVIL ENGINEERING QUIZ`, canvas.width / 2, 480);
    ctx.fillText(`Subject: ${result?.subject.toUpperCase()} | Difficulty: ${result?.difficulty.toUpperCase()}`, canvas.width / 2, 530);
    ctx.font = "bold 40px sans-serif";
    ctx.fillText(`SCORE: ${result?.score} / ${result?.total}`, canvas.width / 2, 620);
    ctx.font = "20px sans-serif";
    ctx.fillText(`Date: ${new Date().toLocaleDateString()}`, canvas.width / 2, 700);
    ctx.fillText("CivilMaster Academy", canvas.width / 2, 730);
    const link = document.createElement("a");
    link.download = `CivilMaster_Certificate_${certificateName}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    setIsGenerating(false);
  };

  if (!result) return null;

  return (
    <div className="flex-grow flex flex-col items-center px-4 pt-0 pb-12 md:px-12 md:pt-0 md:pb-20 max-w-5xl mx-auto w-full space-y-4 no-anim">
      <div className="bg-command" />
      
      <div className="w-full command-card rounded-[3rem] p-8 md:p-14 text-center relative overflow-hidden">
        <div className="w-full flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center gap-2 text-slate-400 font-bold uppercase text-[10px] tracking-widest hover:text-indigo-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Dashboard
          </Link>
          <div className="tag-tech bg-indigo-50 text-indigo-600 border-indigo-100">Mission_Status: COMPLETED</div>
        </div>

        <h1 className="text-3xl md:text-5xl heading-pro text-slate-900 mb-4 tracking-tighter">Mission <span className="text-indigo-600">Report</span></h1>
        
        <div className="text-7xl mb-6">
          {result.score >= 8 ? "🏆" : result.score >= 5 ? "🌟" : "📚"}
        </div>
        <p className="text-2xl font-bold text-slate-600 mb-10 italic">
          Er. {result.userName}, your score is <span className="text-indigo-600 text-4xl">{result.score}</span> / {result.total}
        </p>

        <div className="max-w-md mx-auto p-6 bg-slate-50 rounded-[2rem] border-2 border-slate-100 mb-8">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Claim Your Credential</h3>
          <input
            type="text"
            placeholder="Enter Full Name"
            value={certificateName}
            onChange={(e) => setCertificateName(e.target.value)}
            className="w-full p-4 mb-4 rounded-xl border border-slate-200 bg-white font-bold outline-none focus:border-indigo-500 text-center"
          />
          <button
            onClick={generateCertificate}
            disabled={isGenerating}
            className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20 uppercase tracking-widest text-sm"
          >
            {isGenerating ? "GENERATING..." : "DOWNLOAD CERTIFICATE"}
          </button>
        </div>

        <canvas ref={canvasRef} className="hidden" />

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => window.location.reload()} className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold transition-all shadow-xl hover:scale-105 active:scale-95 uppercase tracking-widest text-sm">RESTART MISSION</button>
          <button onClick={() => setShowReview(!showReview)} className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-900 rounded-xl font-bold transition-all hover:bg-slate-50 uppercase tracking-widest text-sm">
            {showReview ? "HIDE ANALYSIS" : "ANALYZE ANSWERS"}
          </button>
        </div>
      </div>

      {showReview && (
        <div className="w-full space-y-6 animate-in fade-in slide-in-from-top-10 duration-500">
          <h2 className="text-4xl font-black text-slate-900 text-center mb-8 uppercase tracking-tighter">Detailed Analysis</h2>
          {result.history.map((item, idx) => (
            <div key={idx} className={`p-8 rounded-[2.5rem] border-4 glass-card ${item.isCorrect ? "border-emerald-100" : "border-rose-100"}`}>
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-slate-800 leading-tight">{item.question.question}</h3>
                <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${item.isCorrect ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"}`}>
                  {item.isCorrect ? "Correct" : "Mistake"}
                </span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed italic">
                <span className="font-black text-slate-900 not-italic mr-2">Insight:</span>
                {item.question.explanation}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
