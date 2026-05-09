"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  ClipboardList,
  FileText,
  Gauge,
  Grid3X3,
  Layers3,
  Mail,
  MessageSquare,
  Network,
  RefreshCcw,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";

type PageName =
  | "Home"
  | "Capability Matrix"
  | "Entropy Diagnostic"
  | "Engagement"
  | "Office of the Administrator";

type NavItem = {
  label: PageName;
  href: string;
};

type HeroItem =
  | string
  | {
      title: string;
      body: string;
    };

type HeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  cardTitle: string;
  cardItems: HeroItem[];
  children?: React.ReactNode;
};

type CardProps = {
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  body: string;
  href?: string;
};

type CTAProps = {
  title: string;
  body: string;
  button: string;
  onClick: () => void;
};

type ProcessProps = {
  title: string;
  steps: string[];
  subline: string;
};

type InquiryModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Capability Matrix", href: "/capability-matrix" },
  { label: "Entropy Diagnostic", href: "/entropy-diagnostic" },
  { label: "Engagement", href: "/engagement" },
  { label: "Office of the Administrator", href: "/office-of-the-administrator" },
];

function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3 text-left"
      aria-label="Go to LipeProtocol home"
    >
      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-[#c9a227]/70 bg-[#c9a227]/10 text-[#e9c95f] shadow-[0_0_35px_rgba(201,162,39,0.14)] transition group-hover:bg-[#c9a227]/15">
        <Layers3 size={24} />
      </div>
      <div>
        <div className="font-serif text-2xl leading-none tracking-tight text-white">
          LipeProtocol
        </div>
        <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c9a227]">
          Structural Honesty
        </div>
      </div>
    </Link>
  );
}

function Shell({
  children,
  openInquiry,
}: {
  children: React.ReactNode;
  openInquiry: () => void;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#07090d] text-white selection:bg-[#c9a227] selection:text-black">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(201,162,39,0.12),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.06),transparent_22%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:48px_48px]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07090d]/82 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
          <Logo />

          <nav
            className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 lg:flex"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    active
                      ? "bg-[#c9a227] text-black shadow-[0_0_25px_rgba(201,162,39,0.22)]"
                      : "text-white/68 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            onClick={openInquiry}
            type="button"
            className="hidden rounded-2xl border border-[#c9a227]/55 bg-[#c9a227]/10 px-5 py-3 text-sm font-semibold text-[#f0d37c] transition hover:bg-[#c9a227] hover:text-black md:inline-flex"
          >
            Request a Briefing <ArrowRight className="ml-2" size={16} />
          </button>
        </div>
      </header>

      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#07090d] px-5 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <Logo />

        <div className="flex flex-col gap-4 lg:items-end">
          <div className="flex flex-wrap gap-2 text-sm text-white/60">
            {navItems.map((item, index) => (
              <React.Fragment key={item.href}>
                <Link href={item.href} className="hover:text-[#f0d37c]">
                  {item.label}
                </Link>
                {index < navItems.length - 1 && (
                  <span className="text-white/20">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="text-sm text-white/45">
            Building smarter AI that balances empathy with technical precision.
          </p>
        </div>
      </div>
    </footer>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#c9a227]">
      <Sparkles size={14} /> {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 flex items-center justify-center gap-4">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c9a227]/45 to-[#c9a227]/70" />
      <div className="text-center font-serif text-sm uppercase tracking-[0.36em] text-white/88">
        {children}
      </div>
      <div className="h-px flex-1 bg-gradient-to-r from-[#c9a227]/70 via-[#c9a227]/45 to-transparent" />
    </div>
  );
}

function Card({ icon: Icon, title, body, href }: CardProps) {
  const content = (
    <>
      {Icon && (
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#c9a227]/45 bg-[#c9a227]/10 text-[#e6c96f]">
          <Icon size={26} />
        </div>
      )}
      <h3 className="font-serif text-2xl text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/62">{body}</p>
      {href && (
        <div className="mt-5 text-sm text-[#c9a227] opacity-70 transition group-hover:opacity-100">
          Explore <ArrowRight className="ml-1 inline" size={14} />
        </div>
      )}
    </>
  );

  const className =
    "group rounded-[1.75rem] border border-[#c9a227]/26 bg-[linear-gradient(180deg,rgba(255,255,255,.055),rgba(255,255,255,.025))] p-6 text-left shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-[#c9a227]/55 hover:bg-white/[.065]";

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}

function Hero({
  eyebrow,
  title,
  body,
  cardTitle,
  cardItems,
  children,
}: HeroProps) {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-10 pt-16 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:pt-24">
      <div className="relative">
        <div className="pointer-events-none absolute -right-16 top-10 h-72 w-72 rounded-full border border-[#c9a227]/10" />
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-3xl font-serif text-6xl leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
          {body}
        </p>
        {children}
      </div>

      <div className="rounded-[2rem] border border-[#c9a227]/30 bg-[#10131a]/82 p-6 shadow-[0_0_60px_rgba(0,0,0,.45)] backdrop-blur-xl">
        <div className="mb-5 flex items-center gap-3 text-[#e6c96f]">
          <Grid3X3 size={22} />
          <div className="text-sm font-semibold uppercase tracking-[0.24em]">
            {cardTitle}
          </div>
        </div>

        <div className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10">
          {cardItems.map((item, index) => {
            const isString = typeof item === "string";

            return (
              <div
                key={`${cardTitle}-${index}`}
                className="grid grid-cols-[54px_1fr] items-start gap-4 bg-black/10 p-4"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c9a227]/40 text-sm font-semibold text-[#e6c96f]">
                  {index + 1}
                </div>
                <div>
                  {!isString && (
                    <div className="text-sm font-semibold text-[#e6c96f]">
                      {item.title}
                    </div>
                  )}
                  <div className="text-sm leading-6 text-white/72">
                    {isString ? item : item.body}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Dashboard() {
  const metrics = [
    { label: "Signal Clarity", value: "High", tone: "text-emerald-400", dots: 7 },
    {
      label: "Assumption Load",
      value: "Moderate",
      tone: "text-[#f2bd4b]",
      dots: 5,
    },
    {
      label: "Claim Stability",
      value: "Strong",
      tone: "text-emerald-400",
      dots: 6,
    },
    { label: "Decision Friction", value: "Low", tone: "text-sky-400", dots: 4 },
  ];

  return (
    <div className="rounded-[2rem] border border-[#c9a227]/30 bg-[#0d1016]/90 p-6 lg:p-8">
      <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
        <div className="relative flex aspect-square items-center justify-center rounded-full border border-[#c9a227]/25 bg-[#c9a227]/5">
          <div className="absolute h-3/4 w-3/4 rounded-full border border-[#c9a227]/15" />
          <div className="absolute h-1/2 w-1/2 rounded-full border border-[#c9a227]/20" />
          <div className="h-5 w-5 rounded-full bg-[#c9a227] shadow-[0_0_40px_rgba(201,162,39,.8)]" />
        </div>

        <div className="grid gap-4 md:grid-cols-5">
          <div className="rounded-2xl border border-white/10 bg-white/[.035] p-5 md:col-span-1">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c9a227]">
              Entropy Index
            </div>
            <div className="mt-4 font-serif text-5xl">0.28</div>
            <div className="mt-1 font-semibold text-[#e6c96f]">
              / Controlled
            </div>
          </div>

          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-white/[.035] p-5"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c9a227]">
                {metric.label}
              </div>
              <div className="mt-5 flex gap-1.5">
                {Array.from({ length: 8 }).map((_, index) => (
                  <span
                    key={`${metric.label}-${index}`}
                    className={`h-2.5 w-2.5 rounded-full ${
                      index < metric.dots ? "bg-current" : "bg-white/12"
                    } ${metric.tone}`}
                  />
                ))}
              </div>
              <div className={`mt-4 font-semibold ${metric.tone}`}>
                {metric.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6 border-t border-white/10 pt-5 text-center text-sm text-white/50">
        Ambiguity measured before it becomes drift.
      </p>
    </div>
  );
}

function CTA({ title, body, button, onClick }: CTAProps) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
      <div className="grid overflow-hidden rounded-[2rem] border border-[#c9a227]/30 bg-[#0d1016] lg:grid-cols-[.85fr_1.15fr]">
        <div className="relative min-h-[260px] bg-[radial-gradient(circle_at_center,rgba(201,162,39,.45),transparent_12%),linear-gradient(135deg,rgba(201,162,39,.2),transparent_30%),linear-gradient(90deg,rgba(255,255,255,.05),transparent)]">
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(90deg,rgba(201,162,39,.35)_1px,transparent_1px)] [background-size:44px_44px]" />
          <div className="absolute inset-x-12 bottom-10 h-px bg-[#c9a227]/50" />
        </div>

        <div className="p-8 lg:p-12">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
            {body}
          </p>
          <button
            onClick={onClick}
            type="button"
            className="mt-8 rounded-2xl bg-[#c9a227] px-6 py-3 font-semibold text-black transition hover:-translate-y-0.5"
          >
            {button} <ArrowRight className="ml-2 inline" size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}

function Process({ title, steps, subline }: ProcessProps) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
      <SectionTitle>{title}</SectionTitle>
      <div className="grid gap-5 md:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={step}
            className="relative rounded-[1.75rem] border border-[#c9a227]/26 bg-white/[.035] p-6 text-center"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#c9a227]/45 bg-[#c9a227]/10 text-[#e6c96f]">
              {index + 1}
            </div>
            <h3 className="mt-5 font-serif text-2xl">{step}</h3>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center font-semibold text-[#e6c96f]">
        {subline}
      </p>
    </section>
  );
}

function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  if (!isOpen) return null;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("Contact form error:", result);
        throw new Error(result.error || "Unable to send inquiry.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-[2rem] border border-[#c9a227]/35 bg-[#0d1016] p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c9a227]">
              Inquiry
            </div>
            <h2 className="mt-2 font-serif text-3xl">Request a Briefing</h2>
            <p className="mt-2 text-sm leading-6 text-white/60">
              Send a short note about the problem, stakes, and constraints.
            </p>
          </div>

          <button
            onClick={() => {
              setStatus("idle");
              onClose();
            }}
            className="rounded-full border border-white/10 px-3 py-1 text-white/60 hover:text-white"
            type="button"
            aria-label="Close inquiry modal"
          >
            ×
          </button>
        </div>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input
            name="name"
            className="w-full rounded-2xl border border-white/10 bg-white/[.04] px-4 py-3 text-white outline-none focus:border-[#c9a227]/60"
            placeholder="Name"
            required
          />

          <input
            name="email"
            className="w-full rounded-2xl border border-white/10 bg-white/[.04] px-4 py-3 text-white outline-none focus:border-[#c9a227]/60"
            type="email"
            placeholder="Email"
            required
          />

          <textarea
            name="message"
            className="min-h-32 w-full rounded-2xl border border-white/10 bg-white/[.04] px-4 py-3 text-white outline-none focus:border-[#c9a227]/60"
            placeholder="What problem are you trying to clarify?"
            required
          />

          <button
            className="w-full rounded-2xl bg-[#c9a227] px-5 py-3 font-semibold text-black disabled:cursor-not-allowed disabled:opacity-60"
            type="submit"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending..." : "Submit Inquiry"}
          </button>

          {status === "success" && (
            <p className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-3 text-sm text-emerald-300">
              Your inquiry was sent. Thank you.
            </p>
          )}

          {status === "error" && (
            <p className="rounded-2xl border border-red-400/30 bg-red-400/10 p-3 text-sm text-red-300">
              Something went wrong. Please email bill@lipeprotocol.com directly.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

function PageShell({ children }: { children: React.ReactNode }) {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const openInquiry = () => setInquiryOpen(true);

  return (
    <Shell openInquiry={openInquiry}>
      {children}
      <InquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </Shell>
  );
}

export function HomePage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const openInquiry = () => setInquiryOpen(true);

  return (
    <Shell openInquiry={openInquiry}>
      <Hero
        eyebrow="A protocol for systems that can explain themselves"
        title={
          <>
            Make rigor feel desirable<span className="text-[#c9a227]">.</span>
          </>
        }
        body="LipeProtocol helps leaders, builders, and operators reduce ambiguity, expose assumptions, and improve decision quality through structural honesty, visible reasoning, and disciplined diagnostics."
        cardTitle="Protocol Overview"
        cardItems={[
          {
            title: "Thesis",
            body: "Systems earn trust by exposing structure, not by projecting certainty.",
          },
          {
            title: "Surface",
            body: "Editorial landing pages, diagnostic tools, and decision frameworks.",
          },
          {
            title: "Mechanism",
            body: "Structured reasoning, entropy reduction, and operational proof.",
          },
        ]}
      >
        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            href="/engagement"
            className="rounded-2xl bg-[#c9a227] px-6 py-3 font-semibold text-black shadow-[0_10px_40px_rgba(201,162,39,.28)] transition hover:-translate-y-0.5"
          >
            Enter the Protocol <ArrowRight className="ml-2 inline" size={17} />
          </Link>
          <Link
            href="/capability-matrix"
            className="rounded-2xl border border-[#c9a227]/45 bg-white/[.035] px-6 py-3 font-semibold text-white transition hover:bg-white/[.075]"
          >
            View Capability Matrix{" "}
            <ArrowRight className="ml-2 inline" size={17} />
          </Link>
        </div>
      </Hero>

      <section className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
        <SectionTitle>Why LipeProtocol</SectionTitle>
        <div className="grid gap-5 md:grid-cols-3">
          <Card
            icon={Building2}
            title="Structural Honesty"
            body="A system should reveal its logic, limits, and assumptions before it asks for trust."
          />
          <Card
            icon={BookOpen}
            title="Readable Rigor"
            body="Technical depth presented with editorial clarity, so complexity feels precise rather than obscure."
          />
          <Card
            icon={ShieldCheck}
            title="Operational Proof"
            body="Capability is shown through diagnostics, protocols, and useful artifacts—not vague claims."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
        <SectionTitle>Core Surfaces</SectionTitle>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <Card
            href="/capability-matrix"
            icon={Grid3X3}
            title="Capability Matrix"
            body="See the operating surfaces, decision domains, and practical methods that define the protocol."
          />
          <Card
            href="/entropy-diagnostic"
            icon={Gauge}
            title="Entropy Diagnostic"
            body="Assess ambiguity, assumption load, coherence, and decision risk before confusion compounds."
          />
          <Card
            href="/engagement"
            icon={Users}
            title="Engagement"
            body="Structured collaboration for briefings, diagnostics, architecture, and advisory work."
          />
          <Card
            href="/office-of-the-administrator"
            icon={Building2}
            title="Office of the Administrator"
            body="The governing layer for stewardship, standards, and administrative integrity."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
        <SectionTitle>Entropy Diagnostic Preview</SectionTitle>
        <Dashboard />
      </section>

      <CTA
        title="Bring a problem worth clarifying."
        body="Whether you need a briefing, a diagnostic sprint, a system architecture perspective, or a long-view advisory partner, LipeProtocol is built to make the underlying structure legible."
        button="Open an Engagement Inquiry"
        onClick={openInquiry}
      />

      <InquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </Shell>
  );
}

export function CapabilityMatrixPage() {
  const rows = [
    [
      "Research & Framing",
      "Problem definition",
      "Stakeholder mapping",
      "Assumption audit",
      "Scope control",
    ],
    [
      "Diagnostics",
      "Entropy review",
      "Signal clarity",
      "Contradiction detection",
      "Risk notes",
    ],
    [
      "Systems Design",
      "Architecture options",
      "Workflow logic",
      "Evaluation plans",
      "Governance logic",
    ],
    [
      "Delivery",
      "Briefing memos",
      "Decision tools",
      "Operating playbooks",
      "Review cadence",
    ],
  ];

  return (
    <PageShell>
      <Hero
        eyebrow="Operating surfaces for visible reasoning"
        title="Capability Matrix"
        body="The Capability Matrix shows where LipeProtocol operates: clarifying problems, reducing entropy, designing systems, and improving decision quality through explicit methods, artifacts, and operating disciplines."
        cardTitle="How to use the Matrix"
        cardItems={[
          "Identify the operating surface.",
          "Match the decision domain.",
          "Select the method.",
          "Generate the right artifact.",
        ]}
      />

      <section className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
        <SectionTitle>Operating Surfaces</SectionTitle>

        <div className="overflow-x-auto rounded-[2rem] border border-[#c9a227]/30 bg-[#0d1016]">
          <div className="grid min-w-[860px] grid-cols-5 text-sm">
            {["", "Clarify", "Diagnose", "Design", "Govern"].map((head) => (
              <div
                key={head || "empty"}
                className="border-b border-r border-[#c9a227]/20 p-5 text-center font-semibold uppercase tracking-[0.2em] text-[#c9a227] last:border-r-0"
              >
                {head}
              </div>
            ))}

            {rows.flatMap((row) =>
              row.map((cell, index) => (
                <div
                  key={`${row[0]}-${cell}-${index}`}
                  className={`border-b border-r border-[#c9a227]/15 p-5 last:border-r-0 ${
                    index === 0
                      ? "font-semibold uppercase tracking-[0.12em] text-[#e6c96f]"
                      : "text-white/70"
                  }`}
                >
                  {cell}
                </div>
              )),
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
        <SectionTitle>Typical Outputs</SectionTitle>
        <div className="grid gap-5 md:grid-cols-4">
          <Card
            icon={FileText}
            title="Executive Briefs"
            body="Clear framing for leaders and decision-makers."
          />
          <Card
            icon={Gauge}
            title="Diagnostic Reports"
            body="Ambiguity, assumptions, and risk made visible."
          />
          <Card
            icon={Network}
            title="System Architectures"
            body="Structured designs for workflows, agents, and governance."
          />
          <Card
            icon={ShieldCheck}
            title="Operating Protocols"
            body="Repeatable methods with standards and review discipline."
          />
        </div>
      </section>

      <CTA
        title="Need a matrix tailored to your environment?"
        body="LipeProtocol can adapt the matrix to a specific organization, project, or decision context."
        button="Request a Tailored Matrix"
        onClick={() => window.dispatchEvent(new Event("noop"))}
      />
    </PageShell>
  );
}

export function EntropyDiagnosticPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="Measure ambiguity before it compounds"
        title="Entropy Diagnostic"
        body="The Entropy Diagnostic helps teams detect ambiguity, assumption overload, signal loss, and decision friction before confusion becomes drift. It turns fuzzy problems into visible structures and actionable next steps."
        cardTitle="Diagnostic Purpose"
        cardItems={[
          "Detect ambiguity",
          "Expose assumptions",
          "Rate decision risk",
          "Recommend intervention",
        ]}
      />

      <section className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
        <SectionTitle>Diagnostic Dashboard</SectionTitle>
        <Dashboard />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
        <SectionTitle>What It Measures</SectionTitle>
        <div className="grid gap-5 md:grid-cols-4">
          <Card icon={Search} title="Signal Clarity" body="Is the problem legible, or buried in noise?" />
          <Card icon={ClipboardList} title="Assumption Load" body="How much depends on unstated premises?" />
          <Card icon={ShieldCheck} title="Claim Stability" body="Which claims are durable, and which are weak?" />
          <Card icon={Workflow} title="Decision Friction" body="Where is confusion slowing action or judgment?" />
        </div>
      </section>

      <Process
        title="Diagnostic Flow"
        steps={[
          "Input Review",
          "Pattern Detection",
          "Scoring & Notes",
          "Intervention Plan",
        ]}
        subline="From raw ambiguity to disciplined next steps."
      />

      <section className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
        <SectionTitle>Typical Outputs</SectionTitle>
        <div className="grid gap-5 md:grid-cols-4">
          <Card icon={Target} title="Entropy Scorecard" body="A comprehensive view of ambiguity and risk across key dimensions." />
          <Card icon={ShieldCheck} title="Risk Notes" body="Concise notes on vulnerabilities and decision risks." />
          <Card icon={MessageSquare} title="Clarifying Questions" body="Targeted questions that surface hidden gaps and assumptions." />
          <Card icon={Workflow} title="Recommended Interventions" body="Practical actions to reduce entropy and improve decision quality." />
        </div>
      </section>

      <CTA
        title="Want to run a diagnostic on a live problem?"
        body="Use the Entropy Diagnostic when a decision feels murky, contested, or harder than it should be."
        button="Start a Diagnostic Inquiry"
        onClick={() => window.dispatchEvent(new Event("noop"))}
      />
    </PageShell>
  );
}

export function EngagementPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="Structured collaboration for high-stakes clarity"
        title="Engagement"
        body="LipeProtocol engagements are built for organizations and leaders who need more than surface-level advice. The work is structured, diagnostic, and decision-oriented—designed to make the underlying logic visible."
        cardTitle="Engagement Modes"
        cardItems={[
          "Briefing",
          "Diagnostic Sprint",
          "Architecture Design",
          "Advisory Partnership",
        ]}
      />

      <section className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
        <SectionTitle>Engagement Types</SectionTitle>
        <div className="grid gap-5 md:grid-cols-4">
          <Card icon={MessageSquare} title="Briefing" body="A focused framing session for a live issue, decision, or strategic question." />
          <Card icon={Gauge} title="Diagnostic Sprint" body="A short, structured review that identifies ambiguity, risks, and intervention paths." />
          <Card icon={Network} title="Architecture Design" body="A deeper engagement for systems, workflows, protocols, and operating structure." />
          <Card icon={Users} title="Advisory Partnership" body="Ongoing support for decision quality, governance, and disciplined execution." />
        </div>
      </section>

      <Process
        title="How Engagement Works"
        steps={[
          "Scope the problem",
          "Surface assumptions",
          "Produce the artifact",
          "Review and refine",
        ]}
        subline="Clarity first. Structure next. Action after that."
      />

      <section className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
        <SectionTitle>Good Fit When</SectionTitle>
        <div className="grid gap-5 md:grid-cols-4">
          <Card icon={Target} title="Poorly Framed" body="The issue is important but poorly framed." />
          <Card icon={Gauge} title="Ambiguity or Drift" body="The team is dealing with ambiguity or drift." />
          <Card icon={Network} title="System Redesign" body="A system, workflow, or protocol needs redesign." />
          <Card icon={ShieldCheck} title="Sharper Briefs" body="Decision-makers need a sharper brief, not more noise." />
        </div>
      </section>

      <CTA
        title="Open an engagement inquiry."
        body="Start with the problem, the stakes, and the constraints. LipeProtocol will help make the structure legible."
        button="Request a Briefing"
        onClick={() => window.dispatchEvent(new Event("noop"))}
      />
    </PageShell>
  );
}

export function AdministratorPage() {
  return (
    <PageShell>
      <Hero
        eyebrow="Stewardship, standards, and administrative integrity"
        title="Office of the Administrator"
        body="The Office of the Administrator is the governing layer of LipeProtocol. It maintains standards, preserves continuity, oversees administrative integrity, and ensures that the protocol remains disciplined, legible, and trustworthy."
        cardTitle="Administrative Mandate"
        cardItems={[
          "Preserve standards",
          "Maintain continuity",
          "Review governance logic",
          "Handle formal inquiries",
        ]}
      />

      <section className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
        <SectionTitle>Core Administrative Functions</SectionTitle>
        <div className="grid gap-5 md:grid-cols-4">
          <Card icon={Building2} title="Standards Stewardship" body="Maintain the operating principles and quality thresholds of the protocol." />
          <Card icon={RefreshCcw} title="Continuity Management" body="Keep work coherent across engagements, documents, and evolving systems." />
          <Card icon={ShieldCheck} title="Governance Review" body="Ensure decision structures remain transparent and defensible." />
          <Card icon={Mail} title="Administrative Inquiry" body="Provide a formal channel for requests, records, and administrative coordination." />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionTitle>Operating Standards</SectionTitle>
          <div className="overflow-hidden rounded-[2rem] border border-[#c9a227]/30 bg-[#0d1016]">
            {[
              "Clarity before cleverness",
              "Visible reasoning",
              "Evidence discipline",
              "Proportional confidence",
            ].map((item) => (
              <div
                key={item}
                className="border-b border-white/10 p-5 text-white/78 last:border-b-0"
              >
                <CheckCircle2 className="mr-3 inline text-[#c9a227]" size={18} />{" "}
                {item}
              </div>
            ))}
            <div className="bg-[#c9a227]/10 p-5 text-sm text-[#f0d37c]">
              Credibility is built through restraint, transparency, and consistency.
            </div>
          </div>
        </div>

        <div>
          <SectionTitle>Protocol Notes</SectionTitle>
          <div className="rounded-[2rem] border border-[#c9a227]/30 bg-[#0d1016] p-7">
            <ul className="space-y-5 text-white/72">
              <li>• Administrative review supports rigor, not theater.</li>
              <li>• Good systems expose assumptions before they multiply.</li>
              <li>• Strong decisions require structure, not just speed.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
        <SectionTitle>Inquiry Types</SectionTitle>
        <div className="grid gap-5 md:grid-cols-4">
          <Card icon={Mail} title="Administrative Requests" body="Formal requests related to the protocol." />
          <Card icon={MessageSquare} title="Governance Questions" body="Questions about standards and operating logic." />
          <Card icon={Users} title="Coordination Notes" body="Coordination across documents and engagements." />
          <Card icon={FileText} title="Record Inquiries" body="Requests involving records or continuity." />
        </div>
      </section>

      <CTA
        title="Send an administrative inquiry."
        body="Use this channel for formal questions related to standards, governance, continuity, or administrative coordination."
        button="Open Administrative Inquiry"
        onClick={() => window.dispatchEvent(new Event("noop"))}
      />
    </PageShell>
  );
}