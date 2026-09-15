import { useState, useEffect } from "react";
import { navLinks } from "../data";
import { sound } from "../utils/audio";
import { 
  ShieldAlert, 
  Volume2, 
  VolumeX, 
  Layers, 
  FileCheck, 
  ArrowRight, 
  Menu, 
  X, 
  Radio
} from "lucide-react";

type NavbarProps = {
  quoteCount: number;
  onOpenQuote: () => void;
};

export default function Navbar({ quoteCount, onOpenQuote }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [soundActive, setSoundActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleSound = () => {
    const newState = sound.toggle();
    setSoundActive(newState);
  };

  const handleNavClick = () => {
    sound.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Telemetry Ticker Bar */}
      <div className="hidden border-b border-white/5 bg-ink-950/90 text-[11px] font-mono text-mist-400 backdrop-blur-md md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-cyber-emerald">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyber-emerald opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyber-emerald"></span>
              </span>
              SYSTEM: NOMINAL // JHB · DBN · CPT HUBS ACTIVE
            </span>
            <span className="text-white/20">|</span>
            <span className="text-signal-400 font-medium">OHS ACT 85/1993 · SANS 100% VERIFIED</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="text-mist-500">FLEET DISPATCH SLA: 48 HOURS</span>
            <span className="text-white/20">|</span>
            <button
              onClick={handleToggleSound}
              className={`flex items-center gap-1.5 rounded px-2 py-0.5 transition-colors ${
                soundActive
                  ? "bg-signal-400/20 text-signal-400 border border-signal-400/40"
                  : "text-mist-400 hover:text-white"
              }`}
              title="Toggle Tactical Audio Feedback"
            >
              {soundActive ? <Volume2 className="h-3 w-3" /> : <VolumeX className="h-3 w-3" />}
              <span>AUDIO: {soundActive ? "ON" : "OFF"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-ink-950/85 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "border-b border-white/5 bg-ink-950/40 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={() => sound.playClick()}
            className="group flex items-center gap-3.5 focus:outline-none"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-sm bg-gradient-to-br from-signal-400 to-signal-600 p-[1px] shadow-[0_0_20px_rgba(255,170,20,0.3)]">
              <div className="flex h-full w-full items-center justify-center rounded-[1px] bg-ink-950 transition-all duration-300 group-hover:bg-transparent">
                <ShieldAlert className="h-5 w-5 text-signal-400 transition-transform duration-300 group-hover:scale-110 group-hover:text-ink-950" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                KHANYANATHI<span className="text-signal-400">30</span>
                <span className="rounded bg-signal-400/20 px-1 py-0.2 font-mono text-[9px] font-semibold tracking-wider text-signal-400 border border-signal-400/30">
                  TACTICAL PPE
                </span>
              </span>
              <span className="font-mono text-[9.5px] uppercase tracking-[0.25em] text-mist-500">
                Enterprise Industrial Safety
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                onMouseEnter={() => sound.playHover()}
                className="group relative flex items-center gap-1.5 px-3.5 py-2 font-mono text-[11.5px] font-medium uppercase tracking-[0.15em] text-mist-300 transition-colors hover:text-white"
              >
                <span>{link.label}</span>
                {link.tag && (
                  <span className="rounded bg-white/5 px-1 py-0.2 text-[8.5px] font-mono text-signal-400 border border-white/10 group-hover:border-signal-400/40">
                    {link.tag}
                  </span>
                )}
                <span className="absolute bottom-0 left-3 right-3 h-[2px] scale-x-0 bg-signal-400 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Action Hub */}
          <div className="flex items-center gap-3">
            {/* Quick SANS Badge */}
            <a
              href="#verify"
              onClick={() => sound.playClick()}
              className="hidden items-center gap-1.5 rounded-sm border border-white/10 bg-white/[0.03] px-2.5 py-1.5 font-mono text-[10px] text-mist-300 transition-colors hover:border-signal-400/40 hover:text-signal-400 xl:flex"
            >
              <FileCheck className="h-3.5 w-3.5 text-signal-400" />
              <span>SANS 1372 / 12702</span>
            </a>

            {/* Quote Drawer Trigger */}
            <button
              onClick={() => {
                sound.playClick();
                onOpenQuote();
              }}
              className="relative flex items-center gap-2 rounded-sm border border-white/15 bg-ink-850 px-3.5 py-2 font-mono text-xs font-semibold text-white transition-all hover:border-signal-400/60 hover:bg-ink-800"
            >
              <Layers className="h-4 w-4 text-signal-400" />
              <span className="hidden sm:inline">FLEET RFQ</span>
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-signal-400 px-1 font-mono text-[10px] font-bold text-ink-950">
                {quoteCount}
              </span>
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => {
                sound.playClick();
                onOpenQuote();
              }}
              className="hidden items-center gap-2 rounded-sm bg-gradient-to-r from-signal-400 to-signal-500 px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-ink-950 shadow-[0_0_20px_rgba(255,170,20,0.35)] transition-all hover:brightness-110 active:scale-95 sm:flex"
            >
              <span>REQUEST QUOTE</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="flex h-9 w-9 items-center justify-center rounded border border-white/10 text-white lg:hidden"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="border-b border-white/10 bg-ink-950/98 px-6 py-6 lg:hidden">
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs text-mist-400">
              <span className="flex items-center gap-2">
                <Radio className="h-3.5 w-3.5 text-cyber-emerald animate-pulse" />
                SYSTEM ONLINE
              </span>
              <button
                onClick={handleToggleSound}
                className="text-signal-400 hover:underline"
              >
                AUDIO FX: {soundActive ? "ON" : "OFF"}
              </button>
            </div>
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="flex items-center justify-between border-b border-white/5 py-2 font-display text-base font-semibold text-white hover:text-signal-400"
                >
                  <span>{link.label}</span>
                  {link.tag && (
                    <span className="font-mono text-xs text-signal-400">{link.tag}</span>
                  )}
                </a>
              ))}
              <div className="pt-4">
                <button
                  onClick={() => {
                    handleNavClick();
                    onOpenQuote();
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded bg-signal-400 py-3 font-display text-sm font-bold text-ink-950 shadow-[0_0_25px_rgba(255,170,20,0.4)]"
                >
                  <span>CONFIGURE FLEET QUOTE</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
