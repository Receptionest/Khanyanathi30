import { useState } from "react";
import { enterpriseTiers } from "../data";
import { sound } from "../utils/audio";
import { Check, ShieldCheck, ArrowRight } from "lucide-react";

type PricingProps = {
  onOpenQuote: () => void;
};

export default function PricingSection({ onOpenQuote }: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly">("quarterly");

  const handleCycleToggle = (cycle: "monthly" | "quarterly") => {
    sound.playClick();
    setBillingCycle(cycle);
  };

  return (
    <section id="pricing" className="relative scroll-mt-20 overflow-hidden bg-ink-950 py-20 lg:py-32 border-t border-white/10 tech-grid">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-signal-400">
            <ShieldCheck className="h-4 w-4" />
            <span>COMMERCIAL PROCUREMENT ARCHITECTURE</span>
          </div>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            TRANSPARENT ENTERPRISE TIERS
          </h2>
          <p className="mt-4 font-body text-mist-300 text-sm sm:text-base">
            Predictable per-worker monthly pricing. Zero surprise invoices, zero returns penalties, and full OHS Act compliance packs included automatically.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-full border border-white/15 bg-ink-900 p-1 font-mono text-xs">
              <button
                type="button"
                onClick={() => handleCycleToggle("monthly")}
                className={`rounded-full px-5 py-2 transition-all ${
                  billingCycle === "monthly"
                    ? "bg-white/10 text-white font-bold"
                    : "text-mist-400 hover:text-white"
                }`}
              >
                MONTH-TO-MONTH
              </button>
              <button
                type="button"
                onClick={() => handleCycleToggle("quarterly")}
                className={`flex items-center gap-2 rounded-full px-5 py-2 transition-all ${
                  billingCycle === "quarterly"
                    ? "bg-signal-400 text-ink-950 font-bold shadow-[0_0_15px_rgba(255,170,20,0.3)]"
                    : "text-mist-400 hover:text-white"
                }`}
              >
                <span>ANNUAL AGREEMENT</span>
                <span className="rounded bg-black/20 px-1.5 py-0.5 text-[9px] font-bold">
                  SAVE 15%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {enterpriseTiers.map((tier) => {
            const isHighlight = tier.highlight;
            const rate = tier.ratePerWorker
              ? billingCycle === "quarterly"
                ? Math.round(tier.ratePerWorker * 0.85)
                : tier.ratePerWorker
              : null;

            return (
              <div
                key={tier.id}
                className={`hud-panel corner-brackets relative flex flex-col justify-between rounded-md p-6 sm:p-8 transition-all ${
                  isHighlight
                    ? "hud-panel-active bg-ink-850/90 shadow-[0_20px_50px_rgba(255,170,20,0.2)] lg:scale-105 z-10"
                    : "border-white/10 bg-ink-900/60"
                }`}
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between font-mono text-[10px]">
                    <span
                      className={`rounded px-2 py-0.5 font-bold tracking-wider ${
                        isHighlight
                          ? "bg-signal-400 text-ink-950"
                          : "bg-white/10 text-mist-300"
                      }`}
                    >
                      {tier.badge}
                    </span>
                    <span className="text-mist-500 font-semibold">{tier.sla}</span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-bold text-white">
                    {tier.name}
                  </h3>
                  <p className="mt-1 font-body text-xs text-mist-400 leading-relaxed">
                    {tier.subtitle}
                  </p>

                  {/* Rate Display */}
                  <div className="mt-6 border-y border-white/10 py-4">
                    {rate ? (
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-mono text-base font-normal text-mist-400">R</span>
                        <span className="font-display text-4xl sm:text-5xl font-extrabold text-white">
                          {rate}
                        </span>
                        <span className="font-mono text-xs text-mist-500">
                          / worker / month
                        </span>
                      </div>
                    ) : (
                      <div className="font-display text-3xl font-bold text-signal-400">
                        CONSIGNMENT SLA
                      </div>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <ul className="mt-6 space-y-3 font-mono text-xs text-mist-300">
                    {tier.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 shrink-0 text-signal-400 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <button
                    type="button"
                    onClick={() => {
                      sound.playSuccess();
                      onOpenQuote();
                    }}
                    className={`flex w-full items-center justify-center gap-2 rounded-sm py-3.5 font-display text-xs font-bold uppercase tracking-wider transition-all ${
                      isHighlight
                        ? "bg-signal-400 text-ink-950 hover:bg-signal-300 shadow-[0_0_20px_rgba(255,170,20,0.4)]"
                        : "border border-white/20 bg-white/5 text-white hover:border-signal-400 hover:text-signal-400"
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commercial Terms Footer Banner */}
        <div className="mt-12 rounded border border-white/10 bg-ink-900/40 p-4 text-center font-mono text-xs text-mist-400">
          ENTERPRISE TERMS: 30 TO 60 DAYS COMMERCIAL CREDIT ON APPROVED REVIEWS · SANS & ISO CONFORMITY REPORTS INCLUDED WITH EVERY CONSIGNMENT
        </div>
      </div>
    </section>
  );
}
