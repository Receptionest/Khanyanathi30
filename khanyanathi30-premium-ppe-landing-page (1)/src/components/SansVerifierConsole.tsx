import { useState } from "react";
import { sansRecords, type SansRecord } from "../data";
import { sound } from "../utils/audio";
import { 
  FileCheck2, 
  Terminal, 
  ShieldCheck, 
  Search, 
  CheckCircle2, 
  Lock, 
  Sparkles,
  ExternalLink
} from "lucide-react";

export default function SansVerifierConsole() {
  const [selectedKey, setSelectedKey] = useState<string>("SANS-1372");
  const [verifying, setVerifying] = useState<boolean>(false);
  const [activeRecord, setActiveRecord] = useState<SansRecord>(sansRecords["SANS-1372"]);

  const handleSelectCode = (key: string) => {
    sound.playClick();
    setSelectedKey(key);
    setVerifying(true);
    sound.playScan();

    setTimeout(() => {
      setActiveRecord(sansRecords[key]);
      setVerifying(false);
      sound.playSuccess();
    }, 450);
  };

  return (
    <section id="verify" className="relative scroll-mt-20 overflow-hidden bg-ink-950 py-20 lg:py-32 border-t border-white/10 tech-grid">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-signal-400">
              <Lock className="h-4 w-4" />
              <span>CRYPTOGRAPHIC COMPLIANCE REPOSITORY</span>
            </div>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              SANS CERTIFICATE VERIFIER
            </h2>
            <p className="mt-4 max-w-2xl font-body text-mist-300 text-sm sm:text-base">
              Every Khanyanathi30 consignment travels with a digital certificate of conformity cryptographically hashed to SABS and NMISA accredited laboratory test records. Test any standard below.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-cyber-emerald bg-cyber-emerald/10 border border-cyber-emerald/30 px-3.5 py-2 rounded">
            <ShieldCheck className="h-4 w-4" />
            <span>DIRECT LINKED TO SABS ACCREDITATION REGISTRY</span>
          </div>
        </div>

        {/* Code Selector Chips */}
        <div className="mt-10 flex flex-wrap gap-2">
          {Object.keys(sansRecords).map((key) => {
            const isSelected = selectedKey === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => handleSelectCode(key)}
                className={`flex items-center gap-2 rounded px-4 py-2 font-mono text-xs font-semibold uppercase transition-all ${
                  isSelected
                    ? "bg-signal-400 text-ink-950 shadow-[0_0_15px_rgba(255,170,20,0.35)]"
                    : "border border-white/10 bg-ink-900 text-mist-300 hover:border-white/20 hover:text-white"
                }`}
              >
                <Search className="h-3 w-3" />
                <span>{key}</span>
              </button>
            );
          })}
        </div>

        {/* Verification Terminal Dashboard */}
        <div className="mt-6 hud-panel corner-brackets overflow-hidden rounded-md border border-white/15 bg-ink-900 shadow-2xl">
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-ink-950 px-4 py-3 font-mono text-xs text-mist-400">
            <div className="flex items-center gap-3">
              <span className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-signal-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-cyber-emerald/80" />
              </span>
              <span className="text-white flex items-center gap-1.5">
                <Terminal className="h-3.5 w-3.5 text-signal-400" />
                <span>K30-CERT-CONSOLE // HASH_VERIFY_DAEMON</span>
              </span>
            </div>
            <div className="flex items-center gap-2 text-[10px]">
              <span className="h-1.5 w-1.5 rounded-full bg-cyber-emerald animate-ping" />
              <span>TLS 1.3 SECURE VERIFICATION</span>
            </div>
          </div>

          {/* Terminal Screen Content */}
          <div className="p-6 sm:p-8 font-mono">
            {verifying ? (
              <div className="flex flex-col items-center justify-center py-12 text-center text-signal-400">
                <Sparkles className="h-8 w-8 animate-spin mb-4" />
                <p className="text-sm font-bold">QUERYING CSIR & SABS REPOSITORIES...</p>
                <p className="text-xs text-mist-500 mt-1">COMPUTING SHA-256 CONFORMITY CHECK...</p>
              </div>
            ) : (
              <div className="grid gap-8 lg:grid-cols-12">
                {/* Left: Terminal Output Lines */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="rounded bg-ink-950 p-4 border border-white/5 space-y-2 text-xs">
                    <p className="text-mist-500">
                      $ k30-verify --standard {activeRecord.code} --chain sabs-nmisa-rsa
                    </p>
                    <p className="text-cyber-emerald flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>STATUS: [200 OK] — {activeRecord.status}</span>
                    </p>
                    <p className="text-mist-400">
                      ISSUING LAB: <span className="text-white">{activeRecord.accreditedLab}</span>
                    </p>
                    <p className="text-mist-400">
                      CRYPTOGRAPHIC HASH: <span className="text-signal-300">{activeRecord.hash}</span>
                    </p>
                  </div>

                  {/* Standard Title & Scope */}
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      {activeRecord.standard}
                    </h3>
                    <div className="mt-3 rounded bg-ink-950/60 p-4 border border-white/5 text-xs text-mist-300 leading-relaxed">
                      <span className="text-mist-500 block mb-1">AUDIT TESTING SCOPE:</span>
                      {activeRecord.scope}
                    </div>
                  </div>
                </div>

                {/* Right: Official Seal of Conformity Card */}
                <div className="lg:col-span-4 flex flex-col justify-between rounded-lg border border-signal-400/30 bg-ink-950 p-6">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-signal-400 tracking-wider">
                        OFFICIAL ATTESTATION
                      </span>
                      <FileCheck2 className="h-5 w-5 text-signal-400" />
                    </div>

                    <div className="mt-4 text-center py-4 border-y border-white/10">
                      <span className="font-display text-lg font-bold text-white block">
                        CERTIFIED COMPLIANT
                      </span>
                      <span className="font-mono text-xs text-cyber-emerald">
                        OHS ACT 85/1993 READY
                      </span>
                    </div>

                    <div className="mt-4 space-y-2 text-xs font-mono text-mist-400">
                      <div className="flex justify-between">
                        <span>Issued:</span>
                        <span className="text-white">{activeRecord.issueDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Next Audit:</span>
                        <span className="text-white">{activeRecord.renewalDate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5">
                    <button
                      type="button"
                      onClick={() => sound.playClick()}
                      className="flex w-full items-center justify-center gap-2 rounded bg-white/5 py-2.5 text-xs font-mono text-mist-300 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <span>DOWNLOAD AUDIT PDF PACK</span>
                      <ExternalLink className="h-3.5 w-3.5 text-signal-400" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
