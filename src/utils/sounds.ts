"use client";

// Simple royalty-free sound URLs
const SOUNDS = {
  correct: "https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3", // Success chime
  wrong: "https://assets.mixkit.co/active_storage/sfx/2959/2959-preview.mp3",   // Error/Buzz
  click: "https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3",   // Subtle click
  finish: "https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3",  // Fanfare
};

export const playSound = (type: keyof typeof SOUNDS) => {
  if (typeof window === "undefined") return;
  const audio = new Audio(SOUNDS[type]);
  audio.volume = 0.4;
  audio.play().catch(() => {
    // Ignore autoplay block errors
  });
};
