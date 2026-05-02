import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CivilMaster | Professional Quiz App",
  description: "Advanced Civil Engineering Quiz for Professionals and Students",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-100 antialiased transition-colors duration-500">
        <div className="bg-mesh" />
        
        <header className="w-full p-6 flex justify-between items-center max-w-7xl mx-auto z-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl">C</div>
            <div>
              <span className="font-black text-xl uppercase tracking-tighter italic block leading-none text-slate-900">CivilMaster</span>
              <span className="text-[8px] font-black uppercase tracking-[0.4em] text-blue-600">Engineering Studio</span>
            </div>
          </div>
        </header>

        <main className="flex-grow flex flex-col relative z-10">
          {children}
        </main>

        <footer className="p-12 text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] z-10">
          &copy; {new Date().getFullYear()} CivilMaster • Premium Professional Standard
        </footer>
      </body>
    </html>
  );
}
