import type { Metadata } from "next";
import "./globals.css";
import { PwaInstallPrompt } from "../components/PwaInstallPrompt";

export const metadata: Metadata = {
  title: "CivilMaster | Professional Quiz App",
  description: "Advanced Civil Engineering Quiz for Professionals and Students",
  icons: {
    icon: "/civils.png",
    shortcut: "/civils.png",
    apple: "/civils.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-100 antialiased transition-colors duration-500 overflow-x-hidden">
        <div className="bg-mesh" />
        
        <header className="w-full px-4 py-4 md:p-6 flex justify-between items-center max-w-7xl mx-auto z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black text-xl md:text-2xl shadow-xl">C</div>
            <div>
              <span className="font-black text-lg md:text-xl uppercase tracking-tighter italic block leading-none text-slate-900">CivilMaster</span>
              <span className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-blue-600">Engineering Studio</span>
            </div>
          </div>
        </header>

        <main className="grow flex flex-col relative z-10">
          {children}
        </main>

        <footer className="px-4 py-6 md:p-12 text-center text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.35em] md:tracking-[0.5em] z-10">
          &copy; {new Date().getFullYear()} CivilMaster • Premium Professional Standard
        </footer>

        <PwaInstallPrompt />
      </body>
    </html>
  );
}
