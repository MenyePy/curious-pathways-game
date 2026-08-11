/**
 * Tiny WebAudio sound kit — no assets, works offline.
 * Sounds are opt-out via localStorage("hv-sound") === "off".
 */
type Tone = { freq: number; dur: number; delay?: number; type?: OscillatorType };

const PRESETS: Record<string, Tone[]> = {
  correct: [
    { freq: 660, dur: 0.12 },
    { freq: 880, dur: 0.16, delay: 0.1 },
    { freq: 1180, dur: 0.22, delay: 0.22 },
  ],
  wrong: [
    { freq: 220, dur: 0.18, type: "sawtooth" },
    { freq: 160, dur: 0.28, delay: 0.14, type: "sawtooth" },
  ],
  tap: [{ freq: 520, dur: 0.06 }],
  reward: [
    { freq: 784, dur: 0.12 },
    { freq: 988, dur: 0.12, delay: 0.1 },
    { freq: 1319, dur: 0.3, delay: 0.2 },
  ],
  notify: [
    { freq: 900, dur: 0.1 },
    { freq: 1200, dur: 0.16, delay: 0.12 },
  ],
};

export type SoundName = keyof typeof PRESETS;

let ctx: AudioContext | null = null;

export function soundEnabled() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("hv-sound") !== "off";
}

export function setSoundEnabled(on: boolean) {
  if (typeof window === "undefined") return;
  localStorage.setItem("hv-sound", on ? "on" : "off");
}

export function playSound(name: SoundName) {
  if (!soundEnabled()) return;
  try {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    ctx ??= new AC();
    if (ctx.state === "suspended") void ctx.resume();
    const now = ctx.currentTime;
    for (const t of PRESETS[name] ?? []) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = t.type ?? "triangle";
      osc.frequency.value = t.freq;
      const start = now + (t.delay ?? 0);
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.18, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + t.dur);
      osc.connect(gain).connect(ctx.destination);
      osc.start(start);
      osc.stop(start + t.dur + 0.05);
    }
  } catch {
    /* audio unavailable — silent fallback */
  }
}