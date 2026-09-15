import { useState } from "react";
import { faqItems } from "../data";
import { sound } from "../utils/audio";
import { HelpCircle, ChevronDown, ShieldCheck, ArrowRight } from "lucide-react";

type FaqProps = {
  onOpenQuote: () => void;
};

export default function FaqSection({ onOpenQuote }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    sound.playClick();
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative scroll-mt-20 overflow-hidden bg-ink-900 py-20 lg:py-32 border-t border-white/10 tech-grid">
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-signal-400">
            <HelpCircle className="h-4 w-4" />
            <span>OPERATIONAL & REGULATORY INQUIRIES</span>
          </div>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            LEGAL, SANS & SUPPLY PROTOCOL FAQ
          </h2>
          <p className="mt-4 font-body text-mist-300 text-sm sm:text-base max-w-2xl mx-auto">
            Direct answers on Mine Health & Safety Act compliance, OHS Act 85 of 1993, ERP integrations, and custom co-branding protocols.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="mt-12 space-y-3">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="hud-panel corner-brackets overflow-hidden rounded-md border border-white/10 bg-ink-950 transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-5 text-left font-display text-base font-bold text-white hover:text-signal-400 transition-colors"
                >
                  <span className="flex items-center gap-3 pr-4">
                    <span className="font-mono text-xs text-signal-400 font-normal">
                      0{idx + 1} //
                    </span>
                    <span>{item.q}</span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-mist-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-signal-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-white/5 p-5 pt-3 font-body text-sm text-mist-300 leading-relaxed bg-ink-900/50">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Direct Engineer Callout */}
        <div className="mt-12 rounded-lg border border-white/15 bg-ink-950 p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-signal-400/20 text-signal-400 border border-signal-400/40">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-display text-base font-bold text-white">
                Require a custom Section 54 contingency or Mine audit review?
              </h4>
              <p className="font-body text-xs text-mist-400 mt-0.5">
                Speak directly with our senior PPE materials engineer in Johannesburg.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onOpenQuote();
            }}
            className="flex items-center gap-2 rounded bg-signal-400 px-5 py-3 font-display text-xs font-bold uppercase tracking-wider text-ink-950 shadow-[0_0_20px_rgba(255,170,20,0.35)] hover:bg-signal-300 transition-all shrink-0"
          >
            <span>CONNECT WITH ENGINEER</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
