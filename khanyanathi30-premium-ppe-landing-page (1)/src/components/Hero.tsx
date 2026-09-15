import { useState } from "react";
import { sound } from "../utils/audio";
import { clientLogos } from "../data";
import { 
  ShieldCheck, 
  Flame, 
  Truck, 
  FileCheck2, 
  ArrowRight, 
  Activity, 
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  ScanLine
} from "lucide-react";

type HeroProps = {
  onOpenQuote: () => void;
};

export default function Hero({ onOpenQuote }: HeroProps) {
  const [fleetMode, setFleetMode] = useState<"k30" | "legacy">("k30");

  const handleModeChange = (mode: "k30" | "legacy") => {
    sound.playClick();
    setFleetMode(mode);
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-20 lg:pt-12 lg:pb-32 tech-grid">
      {/* Ambient Radial Laser Glows */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-full max-w-7xl">
        <div className="absolute left-1/4 top-10 h-96 w-96 rounded-full bg-signal-400/10 blur-[130px]" />
        <div className="absolute right-1/4 top-28 h-80 w-80 rounded-full bg-cyber-cyan/8 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Top Operational Status Pill */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-signal-400/30 bg-signal-400/10 px-3.5 py-1.5 font-mono text-[11px] text-signal-400 shadow-[0_0_15px_rgba(255,170,20,0.2)]">
            <Sparkles className="h-3 w-3 animate-pulse" />
            <span className="font-semibold tracking-wider">K30 INDUSTRIAL SYSTEM V4.8</span>
          </div>
          <div className="hidden items-center gap-2 font-mono text-xs text-mist-400 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-cyber-emerald" />
            <span>940,000+ CERTIFIED UNITS READY IN JHB · DBN · CPT</span>
          </div>
        </div>

        {/* Main Grid: Left Typographic Punch, Right Interactive Telemetry Avatar */}
        <div className="mt-8 grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl xl:text-7xl leading-[1.04]">
              ARMOUR FOR THE TEAMS WHO{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-signal-300 via-signal-400 to-signal-500 text-glow-amber">
                BUILD THE CONTINENT.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl font-body text-base text-mist-300 sm:text-lg leading-relaxed">
              Khanyanathi30 delivers military-grade, SANS-certified industrial body armour and PPE to South Africa’s heaviest enterprises. Dispatched within 48 hours, synchronized with your ERP, and guaranteed inspection-ready under OHS Act 85 of 1993.
            </p>

            {/* Interactive Sourcing Mode Toggle */}
            <div className="mt-8 rounded-lg border border-white/10 bg-ink-900/80 p-2 backdrop-blur-md max-w-xl">
              <div className="flex items-center justify-between pb-2 px-2 text-[10.5px] font-mono text-mist-500">
                <span>COMPARE FLEET PROCUREMENT PARADIGMS:</span>
                <span className="text-signal-400">SELECT TO SIMULATE</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleModeChange("legacy")}
                  className={`flex items-center justify-center gap-2 rounded px-3 py-2.5 font-mono text-xs uppercase tracking-wider transition-all ${
                    fleetMode === "legacy"
                      ? "bg-red-500/20 text-red-400 border border-red-500/40"
                      : "text-mist-400 hover:text-white"
                  }`}
                >
                  <AlertTriangle className="h-3.5 w-3.5" />
                  <span>FRAGMENTED VENDORS</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleModeChange("k30")}
                  className={`flex items-center justify-center gap-2 rounded px-3 py-2.5 font-mono text-xs uppercase tracking-wider transition-all ${
                    fleetMode === "k30"
                      ? "bg-signal-400 text-ink-950 font-bold shadow-[0_0_20px_rgba(255,170,20,0.4)]"
                      : "text-mist-400 hover:text-white"
                  }`}
                >
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>K30 SYSTEM SUPPLY</span>
                </button>
              </div>

              {/* Dynamic Comparison Card */}
              <div className="mt-3 border-t border-white/5 pt-3 px-2 text-xs">
                {fleetMode === "legacy" ? (
                  <div className="grid grid-cols-3 gap-2 font-mono text-red-300/90 text-[11px]">
                    <div className="rounded bg-red-950/30 p-2 border border-red-900/30">
                      <span className="text-mist-500 block">Lead Time:</span> 3 - 6 Weeks
                    </div>
                    <div className="rounded bg-red-950/30 p-2 border border-red-900/30">
                      <span className="text-mist-500 block">Audit Prep:</span> 14 Days manual hunt
                    </div>
                    <div className="rounded bg-red-950/30 p-2 border border-red-900/30">
                      <span className="text-mist-500 block">Section 54 Risk:</span> Frequent Stoppages
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-2 font-mono text-signal-400 text-[11px]">
                    <div className="rounded bg-signal-400/10 p-2 border border-signal-400/20">
                      <span className="text-mist-400 block">Lead Time:</span> 48h SLA Guaranteed
                    </div>
                    <div className="rounded bg-signal-400/10 p-2 border border-signal-400/20">
                      <span className="text-mist-400 block">Audit Prep:</span> Instant Digital Hash
                    </div>
                    <div className="rounded bg-signal-400/10 p-2 border border-signal-400/20">
                      <span className="text-mist-400 block">Compliance:</span> 100% SANS Certified
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  onOpenQuote();
                }}
                className="group relative flex items-center gap-3 overflow-hidden rounded-sm bg-gradient-to-r from-signal-400 to-signal-500 px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-ink-950 shadow-[0_0_30px_rgba(255,170,20,0.4)] transition-all hover:brightness-110 active:scale-98"
              >
                <span>DEPLOY FLEET ARMOUR</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#anatomy"
                onClick={() => sound.playClick()}
                className="flex items-center gap-2.5 rounded-sm border border-white/15 bg-white/[0.04] px-6 py-4 font-mono text-xs font-semibold uppercase tracking-wider text-white transition-all hover:border-signal-400/50 hover:bg-white/[0.08]"
              >
                <ScanLine className="h-4 w-4 text-signal-400" />
                <span>INSPECT 3D ANATOMY</span>
              </a>
            </div>

            {/* Key Micro Spec Badges */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 font-mono text-xs text-mist-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-signal-400" />
                <span>SANS 1372 / 12702 / 2237</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="h-4 w-4 text-signal-400" />
                <span>40 CAL/CM² ARC RATED</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-signal-400" />
                <span>48H NATIONWIDE SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck2 className="h-4 w-4 text-cyber-emerald" />
                <span>OHS ACT 85/1993 PROOF</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Telemetry HUD with Worker Visual */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[460px]">
              {/* Outer HUD Corner Brackets */}
              <div className="hud-panel corner-brackets overflow-hidden rounded-md border border-white/15 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
                {/* Top Status Banner */}
                <div className="flex items-center justify-between border-b border-white/10 bg-ink-950 px-3 py-2 font-mono text-[10.5px]">
                  <div className="flex items-center gap-2 text-signal-400">
                    <Activity className="h-3.5 w-3.5 animate-pulse text-signal-400" />
                    <span>TACTICAL BODY TELEMETRY</span>
                  </div>
                  <span className="rounded bg-cyber-emerald/20 px-1.5 py-0.5 text-[9px] font-bold text-cyber-emerald">
                    LIVE BIO-LOCK
                  </span>
                </div>

                {/* Worker Image with Animated Target Crosshairs */}
                <div className="relative overflow-hidden rounded bg-ink-950">
                  <img
                    src="/images/k30-exo-worker.jpg"
                    alt="K30 Equipped Industrial Engineer wearing tactical safety armor"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  {/* Scanline Overlay */}
                  <div className="absolute inset-0 scanline pointer-events-none opacity-40" />

                  {/* Radar Sweep Arc */}
                  <div className="pointer-events-none absolute right-4 top-4 h-24 w-24 rounded-full border border-signal-400/20 overflow-hidden">
                    <div className="h-full w-full radar-sweep" />
                  </div>

                  {/* Hotspot 01: Head Shell */}
                  <div className="absolute left-[38%] top-[14%] flex items-center gap-2">
                    <span className="relative flex h-3.5 w-3.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-400 opacity-80" />
                      <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-signal-400 border-2 border-ink-950" />
                    </span>
                    <div className="rounded bg-ink-950/90 px-2 py-0.5 font-mono text-[9px] text-signal-300 border border-signal-400/40 backdrop-blur-sm">
                      K30 APEX // 14.8kN SHELL
                    </div>
                  </div>

                  {/* Hotspot 02: Hi-Vis Core */}
                  <div className="absolute right-[12%] top-[42%] flex items-center gap-2">
                    <span className="relative flex h-3.5 w-3.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyber-cyan opacity-80" />
                      <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-cyber-cyan border-2 border-ink-950" />
                    </span>
                    <div className="rounded bg-ink-950/90 px-2 py-0.5 font-mono text-[9px] text-cyber-cyan border border-cyber-cyan/40 backdrop-blur-sm">
                      HALO-470 // CLASS 3 360°
                    </div>
                  </div>

                  {/* Hotspot 03: Cut-F Hand */}
                  <div className="absolute left-[8%] bottom-[32%] flex items-center gap-2">
                    <span className="relative flex h-3.5 w-3.5">
                      <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-signal-400 border-2 border-ink-950" />
                    </span>
                    <div className="rounded bg-ink-950/90 px-2 py-0.5 font-mono text-[9px] text-white border border-white/20 backdrop-blur-sm">
                      FORGECUT // CUT LEVEL F
                    </div>
                  </div>

                  {/* Hotspot 04: Footwear */}
                  <div className="absolute right-[22%] bottom-[10%] flex items-center gap-2">
                    <span className="relative flex h-3.5 w-3.5">
                      <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-cyber-emerald border-2 border-ink-950" />
                    </span>
                    <div className="rounded bg-ink-950/90 px-2 py-0.5 font-mono text-[9px] text-cyber-emerald border border-cyber-emerald/40 backdrop-blur-sm">
                      IRONSTEP // S3 METATARSAL
                    </div>
                  </div>

                  {/* Bottom Telemetry HUD Card */}
                  <div className="absolute inset-x-3 bottom-3 rounded border border-white/15 bg-ink-950/90 p-3 backdrop-blur-md">
                    <div className="flex items-center justify-between font-mono text-[10px]">
                      <span className="text-mist-400">ROSTER HARNESS INTEGRITY</span>
                      <span className="font-bold text-signal-400">99.8% COMPLIANT</span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[99.8%] bg-gradient-to-r from-signal-500 to-signal-300" />
                    </div>
                    <div className="mt-2 flex items-center justify-between font-mono text-[9.5px] text-mist-500">
                      <span>DISPATCH ETA: 48H</span>
                      <span>SANS CODE: 1372/12702</span>
                      <span className="text-cyber-emerald">READY TO SHIP</span>
                    </div>
                  </div>
                </div>

                {/* Micro Stats Bar */}
                <div className="grid grid-cols-3 gap-1 border-t border-white/10 pt-2 text-center font-mono text-[10px]">
                  <div className="p-1.5 bg-ink-900/60 rounded">
                    <span className="text-mist-500 block">IMPACT</span>
                    <span className="font-bold text-white">14.8 kN</span>
                  </div>
                  <div className="p-1.5 bg-ink-900/60 rounded">
                    <span className="text-mist-500 block">VOLTAGE</span>
                    <span className="font-bold text-signal-400">20,000 V</span>
                  </div>
                  <div className="p-1.5 bg-ink-900/60 rounded">
                    <span className="text-mist-500 block">THERMAL</span>
                    <span className="font-bold text-white">+150°C</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Client Marquee */}
        <div className="mt-20 border-y border-white/10 bg-ink-950/60 py-6 backdrop-blur-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="shrink-0 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-mist-500 md:w-56">
              PROTECTING ENTERPRISE ROSTERS AT:
            </div>
            <div className="marquee relative flex-1 overflow-hidden" style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
              <div className="marquee-track flex w-max items-center gap-12 pr-12">
                {[...clientLogos, ...clientLogos].map((client, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="font-display text-base font-bold text-mist-300 transition-colors hover:text-signal-400">
                      {client.name}
                    </span>
                    <span className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-mist-500 border border-white/10">
                      {client.sector}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-signal-400/40 ml-6" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
