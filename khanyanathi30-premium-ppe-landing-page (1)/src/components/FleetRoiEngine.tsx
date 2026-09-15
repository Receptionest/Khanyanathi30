import { useState } from "react";
import { sound } from "../utils/audio";
import { 
  Calculator, 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  ArrowRight
} from "lucide-react";

type RoiProps = {
  onOpenQuote: () => void;
};

export default function FleetRoiEngine({ onOpenQuote }: RoiProps) {
  const [workers, setWorkers] = useState<number>(350);
  const [riskTier, setRiskTier] = useState<"extreme" | "high" | "standard">("high");

  const riskMultiplier = {
    extreme: 1.35,
    high: 1.15,
    standard: 1.0,
  }[riskTier];

  // Dynamic calculations based on industry benchmarks
  const legacyAnnualSpend = Math.round(workers * 480 * 12 * riskMultiplier);
  const k30AnnualSpend = Math.round(workers * 320 * 12 * riskMultiplier * 0.88);
  const annualSavings = legacyAnnualSpend - k30AnnualSpend;
  const incidentReduction = Math.min(84, Math.round(68 + (workers / 500) * 4));
  const auditHoursSaved = Math.round((workers * 0.95) + 80);

  const handleSliderChange = (val: number) => {
    sound.playHover();
    setWorkers(val);
  };

  const handleRiskChange = (tier: "extreme" | "high" | "standard") => {
    sound.playClick();
    setRiskTier(tier);
  };

  return (
    <section id="roi" className="relative scroll-mt-20 overflow-hidden bg-ink-950 py-20 lg:py-32 border-t border-white/10 tech-grid">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-signal-400">
              <Calculator className="h-4 w-4" />
              <span>EXECUTIVE TELEMETRY // COST & RISK ENGINE</span>
            </div>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              FLEET PROCUREMENT ROI SIMULATOR
            </h2>
            <p className="mt-4 max-w-2xl font-body text-mist-300 text-sm sm:text-base">
              Calculate projected budget savings, incident reduction, and administrative hours saved by shifting your enterprise to Khanyanathi30’s consolidated supply system.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded border border-cyber-emerald/30 bg-cyber-emerald/10 px-3.5 py-2 font-mono text-xs text-cyber-emerald">
            <ShieldCheck className="h-4 w-4" />
            <span>ALIGNED WITH OHS ACT 85/1993 BENCHMARKS</span>
          </div>
        </div>

        {/* Interactive Engine Container */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left: Interactive Controls */}
          <div className="lg:col-span-5 space-y-6">
            <div className="hud-panel corner-brackets rounded-md border border-white/15 p-6 sm:p-8">
              <span className="font-mono text-xs uppercase tracking-wider text-mist-400 flex items-center justify-between">
                <span>01 // ACTIVE WORKFORCE HEADCOUNT</span>
                <span className="font-bold text-signal-400 text-sm">{workers.toLocaleString()} WORKERS</span>
              </span>

              {/* Slider */}
              <div className="mt-4">
                <input
                  type="range"
                  min="50"
                  max="2500"
                  step="25"
                  value={workers}
                  onChange={(e) => handleSliderChange(Number(e.target.value))}
                  className="w-full accent-signal-400 h-2 bg-ink-800 rounded-lg cursor-pointer"
                />
                <div className="mt-2 flex justify-between font-mono text-[10px] text-mist-500">
                  <span>50 WORKERS</span>
                  <span>1,000</span>
                  <span>2,500+ ENTERPRISE</span>
                </div>
              </div>

              {/* Risk Tier Selection */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <span className="font-mono text-xs uppercase tracking-wider text-mist-400 block mb-3">
                  02 // SITE OPERATIONAL RISK PROFILE
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => handleRiskChange("standard")}
                    className={`rounded p-2.5 text-center font-mono text-xs transition-all ${
                      riskTier === "standard"
                        ? "bg-signal-400 text-ink-950 font-bold shadow-[0_0_15px_rgba(255,170,20,0.3)]"
                        : "bg-ink-950 border border-white/10 text-mist-400 hover:text-white"
                    }`}
                  >
                    CIVIL / LOGISTICS
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRiskChange("high")}
                    className={`rounded p-2.5 text-center font-mono text-xs transition-all ${
                      riskTier === "high"
                        ? "bg-signal-400 text-ink-950 font-bold shadow-[0_0_15px_rgba(255,170,20,0.3)]"
                        : "bg-ink-950 border border-white/10 text-mist-400 hover:text-white"
                    }`}
                  >
                    PETROCHEM / POWER
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRiskChange("extreme")}
                    className={`rounded p-2.5 text-center font-mono text-xs transition-all ${
                      riskTier === "extreme"
                        ? "bg-signal-400 text-ink-950 font-bold shadow-[0_0_15px_rgba(255,170,20,0.3)]"
                        : "bg-ink-950 border border-white/10 text-mist-400 hover:text-white"
                    }`}
                  >
                    DEEP MINING / REEF
                  </button>
                </div>
              </div>

              {/* Quick Summary Pill */}
              <div className="mt-6 rounded bg-ink-950 p-4 border border-white/10 font-mono text-xs text-mist-300">
                <div className="flex justify-between pb-2 border-b border-white/5">
                  <span className="text-mist-500">Unmanaged Vendor Cost:</span>
                  <span className="text-red-400 font-semibold line-through">
                    R {legacyAnnualSpend.toLocaleString("en-ZA")} / yr
                  </span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-mist-500">K30 Continuous System:</span>
                  <span className="text-cyber-emerald font-bold">
                    R {k30AnnualSpend.toLocaleString("en-ZA")} / yr
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Dynamic Interactive Projected Telemetry Grid */}
          <div className="lg:col-span-7 space-y-4">
            {/* Massive Projected Savings Card */}
            <div className="rounded-lg border border-signal-400/50 bg-gradient-to-br from-ink-900 to-ink-950 p-6 sm:p-8 shadow-[0_20px_50px_rgba(255,170,20,0.15)]">
              <div className="flex items-center justify-between font-mono text-xs text-signal-400">
                <span className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  <span>PROJECTED ANNUAL BOTTOM-LINE SAVINGS</span>
                </span>
                <span className="rounded bg-signal-400/20 px-2 py-0.5 font-bold">
                  −32.4% AVERAGE DELTA
                </span>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-baseline gap-2">
                <span className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
                  R {annualSavings.toLocaleString("en-ZA")}
                </span>
                <span className="font-mono text-sm text-mist-400">
                  / net direct saving annually
                </span>
              </div>

              <p className="mt-3 font-body text-xs sm:text-sm text-mist-300">
                Calculated across bulk consolidation, zero return penalties, eliminating stockouts, and consolidating into a single monthly VAT invoice.
              </p>

              {/* Action Button inside Engine */}
              <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="font-mono text-xs text-mist-400">
                  READY TO LOCK IN THIS PROPOSAL?
                </div>
                <button
                  type="button"
                  onClick={() => {
                    sound.playSuccess();
                    onOpenQuote();
                  }}
                  className="flex items-center gap-2 rounded bg-signal-400 px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-ink-950 shadow-[0_0_20px_rgba(255,170,20,0.4)] hover:bg-signal-300 transition-all"
                >
                  <span>LOCK IN THIS FLEET MATRIX</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Secondary Metrics Triplets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono">
              <div className="rounded-lg border border-white/10 bg-ink-900/70 p-5">
                <span className="text-[10.5px] uppercase text-mist-500 flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-cyber-emerald" /> INCIDENT REDUCTION
                </span>
                <span className="mt-2 block font-display text-3xl font-extrabold text-cyber-emerald">
                  −{incidentReduction}%
                </span>
                <span className="mt-1 block text-[11px] text-mist-400">
                  Preventable cuts & fractures
                </span>
              </div>

              <div className="rounded-lg border border-white/10 bg-ink-900/70 p-5">
                <span className="text-[10.5px] uppercase text-mist-500 flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-signal-400" /> AUDIT HOURS SAVED
                </span>
                <span className="mt-2 block font-display text-3xl font-extrabold text-signal-400">
                  {auditHoursSaved} hrs
                </span>
                <span className="mt-1 block text-[11px] text-mist-400">
                  Zero manual file searches
                </span>
              </div>

              <div className="rounded-lg border border-white/10 bg-ink-900/70 p-5">
                <span className="text-[10.5px] uppercase text-mist-500 flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-cyber-cyan" /> SANS READINESS
                </span>
                <span className="mt-2 block font-display text-3xl font-extrabold text-cyber-cyan">
                  99.8%
                </span>
                <span className="mt-1 block text-[11px] text-mist-400">
                  First-pass compliance pass
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
