"use client";

import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
	prompt: () => Promise<void>;
	userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

export function PwaInstallPrompt() {
	const [isVisible, setIsVisible] = useState(true);
	const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

	useEffect(() => {
		const timer = window.setTimeout(() => setIsVisible(false), 3000);

		const onBeforeInstallPrompt = (event: Event) => {
			event.preventDefault();
			setDeferredPrompt(event as BeforeInstallPromptEvent);
		};

		window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);

		// If the event was captured earlier (script placed before hydration), pick it up
		if ((window as any).__deferredInstallPrompt) {
			setDeferredPrompt((window as any).__deferredInstallPrompt as BeforeInstallPromptEvent);
		}

		return () => {
			window.clearTimeout(timer);
			window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
		};
	}, []);

	const handleInstall = async () => {
		if (!deferredPrompt) return;
		await deferredPrompt.prompt();
		await deferredPrompt.userChoice;
		setDeferredPrompt(null);
	};

	if (!isVisible) return null;

	return (
		<button
			type="button"
			onClick={handleInstall}
			className="fixed bottom-4 right-4 z-50 rounded-2xl bg-slate-900 px-5 py-3 text-[11px] font-black uppercase tracking-widest text-white shadow-2xl transition hover:scale-105"
			aria-label="Install CivilMaster app"
		>
			Install App
		</button>
	);
}
