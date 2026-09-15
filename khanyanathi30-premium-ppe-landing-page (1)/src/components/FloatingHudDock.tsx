import { useState, useEffect } from "react";
import { sound } from "../utils/audio";
import { 
  Volume2, 
  VolumeX, 
  Layers, 
  ScanLine, 
  Calculator, 
  ArrowUp,
  FileCheck2
} from "lucide-react";

type FloatingHudProps = {
  quoteCount: number;
  onOpenQuote: () => void;
};

export default function FloatingHudDock({ quoteCount, onOpenQuote }: FloatingHudProps) {
  const [audioEnabled, setAudioEnabled] = useState(sound.enabled);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleSound = () => {
    const active = sound.toggle();
    setAudioEnabled(active);
  };

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 w-auto max-w-[94vw]">
      <div className="hud-panel corner-brackets flex items-center gap-1.5 sm:gap-3 rounded-full border border-white/20 bg-ink-950/90 px-3 py-2 shadow-[0_15px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        {/* Audio FX Toggle */}
        <button
          type="button"
          onClick={handleToggleSound}
          className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
            audioEnabled
              ? "bg-signal-400 text-ink-950 shadow-[0_0_12px_rgba(255,170,20,0.4)]"
              : "text-mist-400 hover:text-white"
          }`}
          title="Toggle Tactical Audio FX"
        >
          {audioEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
        </button>

        <span className="h-4 w-px bg-white/10 hidden sm:block" />

        {/* Quick Nav Jump Buttons */}
        <div className="hidden sm:flex items-center gap-1 font-mono text-[11px]">
          <a
            href="#anatomy"
            onClick={() => sound.playClick()}
            className="flex items-center gap-1 rounded-full px-2.5 py-1 text-mist-300 hover:bg-white/5 hover:text-signal-400 transition-colors"
          >
            <ScanLine className="h-3 w-3" />
            <span>3D ANATOMY</span>
          </a>
          <a
            href="#matrix"
            onClick={() => sound.playClick()}
            className="flex items-center gap-1 rounded-full px-2.5 py-1 text-mist-300 hover:bg-white/5 hover:text-signal-400 transition-colors"
          >
            <Layers className="h-3 w-3" />
            <span>ROLE MATRIX</span>
          </a>
          <a
            href="#roi"
            onClick={() => sound.playClick()}
            className="flex items-center gap-1 rounded-full px-2.5 py-1 text-mist-300 hover:bg-white/5 hover:text-signal-400 transition-colors"
          >
            <Calculator className="h-3 w-3" />
            <span>ROI ENGINE</span>
          </a>
          <a
            href="#verify"
            onClick={() => sound.playClick()}
            className="flex items-center gap-1 rounded-full px-2.5 py-1 text-mist-300 hover:bg-white/5 hover:text-signal-400 transition-colors"
          >
            <FileCheck2 className="h-3 w-3 text-cyber-emerald" />
            <span>SANS CHECK</span>
          </a>
        </div>

        <span className="h-4 w-px bg-white/10" />

        {/* Instant RFQ Trigger */}
        <button
          type="button"
          onClick={() => {
            sound.playClick();
            onOpenQuote();
          }}
          className="flex items-center gap-2 rounded-full bg-signal-400 px-3.5 py-1.5 font-display text-xs font-bold text-ink-950 shadow-[0_0_20px_rgba(255,170,20,0.4)] hover:bg-signal-300 transition-all"
        >
          <Layers className="h-3.5 w-3.5" />
          <span>FLEET RFQ</span>
          <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-ink-950 px-1 font-mono text-[9px] font-bold text-signal-400">
            {quoteCount}
          </span>
        </button>

        {/* Scroll Top Button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="flex h-8 w-8 items-center justify-center rounded-full text-mist-400 hover:text-white transition-colors"
          title="Return to Top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
