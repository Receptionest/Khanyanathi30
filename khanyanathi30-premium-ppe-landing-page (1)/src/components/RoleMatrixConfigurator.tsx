import { useState } from "react";
import { roleBundles, type RoleBundle } from "../data";
import { sound } from "../utils/audio";
import { 
  ShieldCheck, 
  Layers, 
  Plus, 
  Check, 
  AlertTriangle, 
  Scale, 
  Users, 
  Sparkles, 
  ArrowRight 
} from "lucide-react";

type RoleMatrixProps = {
  onAddRoleToQuote: (role: RoleBundle) => void;
  onOpenQuote: () => void;
};

export default function RoleMatrixConfigurator({ onAddRoleToQuote, onOpenQuote }: RoleMatrixProps) {
  const [activeBundle, setActiveBundle] = useState<RoleBundle>(roleBundles[0]);
  const [addedRoles, setAddedRoles] = useState<string[]>([]);

  const handleRoleSelect = (bundle: RoleBundle) => {
    sound.playClick();
    setActiveBundle(bundle);
  };

  const handleAdd = (bundle: RoleBundle) => {
    sound.playSuccess();
    onAddRoleToQuote(bundle);
    setAddedRoles((prev) => [...prev, bundle.id]);
    setTimeout(() => {
      setAddedRoles((prev) => prev.filter((id) => id !== bundle.id));
    }, 2500);
  };

  const isAdded = addedRoles.includes(activeBundle.id);

  return (
    <section id="matrix" className="relative scroll-mt-20 overflow-hidden bg-ink-900 py-20 lg:py-32 border-t border-white/10 tech-grid">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-signal-400">
              <Layers className="h-4 w-4" />
              <span>ENTERPRISE PPE MATRIX ARCHITECT</span>
            </div>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              SITE ROLE CONFIGURATOR
            </h2>
            <p className="mt-4 max-w-2xl font-body text-mist-300 text-sm sm:text-base">
              Corporate safety procurement isn’t buying random hard hats. It’s deploying complete, certified protective kits mapped to each high-risk operational role on your roster.
            </p>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onOpenQuote();
            }}
            className="flex items-center gap-2 self-start rounded-sm border border-signal-400/40 bg-signal-400/10 px-4 py-2.5 font-mono text-xs text-signal-400 transition-all hover:bg-signal-400 hover:text-ink-950"
          >
            <span>VIEW ACTIVE FLEET BUNDLES</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Role Selector Tabs */}
        <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {roleBundles.map((b) => {
            const isSelected = activeBundle.id === b.id;
            return (
              <button
                key={b.id}
                onClick={() => handleRoleSelect(b)}
                className={`relative flex flex-col p-4 text-left transition-all rounded-sm border ${
                  isSelected
                    ? "border-signal-400 bg-ink-850 shadow-[0_0_25px_rgba(255,170,20,0.25)]"
                    : "border-white/10 bg-ink-950/60 hover:border-white/20 hover:bg-ink-950"
                }`}
              >
                {isSelected && (
                  <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-signal-400" />
                )}
                <span className="font-mono text-[9px] uppercase tracking-wider text-mist-500">
                  {b.riskProfile} RISK
                </span>
                <span className="mt-2 font-display text-sm font-bold text-white line-clamp-2">
                  {b.role}
                </span>
                <span className="mt-2 font-mono text-xs font-semibold text-signal-400">
                  R {b.unitCost.toLocaleString("en-ZA")} <span className="text-[9px] text-mist-500">/ kit</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Role Interactive Inspector Dashboard */}
        <div className="mt-8 rounded-md border border-white/15 bg-ink-950 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          {/* Top Metadata Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/10 pb-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="rounded bg-signal-400/20 px-2.5 py-1 font-mono text-xs font-bold text-signal-400 border border-signal-400/30">
                  {activeBundle.riskProfile} ENVIRONMENT
                </span>
                <span className="font-mono text-xs text-mist-400">
                  INDUSTRY: {activeBundle.industry}
                </span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                {activeBundle.role}
              </h3>
            </div>

            {/* Quick Metrics & 1-Click Action */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="rounded bg-ink-900 border border-white/10 px-4 py-2 font-mono text-xs">
                <span className="text-mist-500 flex items-center gap-1.5 text-[10px]">
                  <Scale className="h-3 w-3 text-signal-400" /> TOTAL BUNDLE MASS
                </span>
                <span className="font-bold text-white">{activeBundle.bundleWeight}</span>
              </div>

              <div className="rounded bg-ink-900 border border-white/10 px-4 py-2 font-mono text-xs">
                <span className="text-mist-500 flex items-center gap-1.5 text-[10px]">
                  <Users className="h-3 w-3 text-signal-400" /> TYPICAL RATIO
                </span>
                <span className="font-bold text-white">{activeBundle.recommendedWorkerRatio}</span>
              </div>

              <button
                type="button"
                onClick={() => handleAdd(activeBundle)}
                className={`flex items-center gap-2 rounded px-5 py-3 font-display text-xs font-bold uppercase tracking-wider transition-all ${
                  isAdded
                    ? "bg-cyber-emerald text-ink-950"
                    : "bg-signal-400 text-ink-950 hover:bg-signal-300 shadow-[0_0_20px_rgba(255,170,20,0.35)]"
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>ROLE KIT ADDED</span>
                  </>
                ) : (
                  <>
                    <Plus className="h-4 w-4" />
                    <span>ADD COMPLETE ROLE TO RFQ</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 5-Item Head-to-Toe Tactical Breakdown */}
          <div className="mt-8">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-mist-400 flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-signal-400" />
              <span>HEAD-TO-TOE SPECIFICATION MANIFEST (5 PIECE BUNDLE)</span>
            </h4>

            <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
              {activeBundle.items.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded border border-white/10 bg-ink-900/80 p-4 transition-all hover:border-signal-400/50"
                >
                  <div className="flex items-center justify-between font-mono text-[10.5px]">
                    <span className="text-signal-400 font-bold uppercase">{item.category}</span>
                    <span className="text-mist-500">POS 0{idx + 1}</span>
                  </div>
                  <h5 className="mt-2 font-display text-sm font-bold text-white leading-snug">
                    {item.product}
                  </h5>
                  <p className="mt-2 font-body text-xs text-mist-400 leading-relaxed">
                    {item.spec}
                  </p>
                  <div className="mt-3 border-t border-white/5 pt-2">
                    <span className="inline-block rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-cyber-emerald border border-cyber-emerald/20">
                      {item.compliance}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hazards Countered & Compliance Seals */}
          <div className="mt-8 grid gap-6 border-t border-white/10 pt-6 md:grid-cols-2">
            <div>
              <span className="font-mono text-xs text-mist-400 flex items-center gap-2">
                <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
                <span>PRIMARY SITE HAZARDS COUNTERED:</span>
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {activeBundle.primaryHazards.map((hz, i) => (
                  <span
                    key={i}
                    className="rounded bg-red-950/40 px-2.5 py-1 font-mono text-xs text-red-300 border border-red-900/40"
                  >
                    ⚠ {hz}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="font-mono text-xs text-mist-400 flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-cyber-emerald" />
                <span>MANDATORY SANS / EN CERTIFICATION CODES:</span>
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {activeBundle.sansCertifications.map((std, i) => (
                  <span
                    key={i}
                    className="rounded bg-signal-400/10 px-2.5 py-1 font-mono text-xs text-signal-400 border border-signal-400/30"
                  >
                    ✓ {std}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
