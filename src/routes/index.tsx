import { useState } from "react";
import {
  Sun,
  Zap,
  Plug,
  ShieldCheck,
  BadgeCheck,
  Clock,
  Workflow,
  Star,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  ArrowRight,
  Check,
  ClipboardList,
  Wrench,
  Sparkles,
  Battery,
  Home as HomeIcon,
  Building2,
  Leaf,
  DollarSign,
  PhoneCall,
  Plus,
  Minus,
} from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Reveal } from "@/components/site/Reveal";
import heroBg from "@/assets/hero-bg.jpg";
import heroSolar from "@/assets/hero-solar.jpg";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Process />
        <About />
        <WhyUs />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center text-white overflow-hidden"
    >
      <img
        src={heroBg}
        alt="Aerial view of solar panel array at sunset"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, oklch(0.18 0.05 258 / 0.92) 0%, oklch(0.22 0.06 258 / 0.78) 45%, oklch(0.22 0.06 258 / 0.45) 100%)",
        }}
      />
      <div className="absolute inset-0 hero-grid-overlay opacity-25" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-32 md:py-40 grid lg:grid-cols-12 gap-10 items-center w-full">
        <Reveal className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur">
            <Sun className="h-3.5 w-3.5 text-accent" /> Licensed · Insured · Trusted since 2014
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.04]">
            Powering Homes & Businesses with{" "}
            <span className="text-accent">Clean Energy</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed">
            Expert solar installation, electrical repair, and EV charging solutions  
            engineered, permitted, and installed by licensed professionals you can trust.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground hover:brightness-95 transition shadow-lg shadow-accent/20"
            >
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Our Services
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-lg border-t border-white/15 pt-6">
            {[
              { n: "500+", l: "Installations" },
              { n: "10+", l: "Years" },
              { n: "4.9★", l: "Avg. Rating" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  {s.n}
                </dt>
                <dd className="text-xs text-white/65 mt-1">{s.l}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
            <img
              src={heroSolar}
              alt="Solar panels on residential roof"
              className="h-64 sm:h-80 lg:h-[460px] w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, oklch(0.16 0.05 258 / 0.97) 0%, oklch(0.16 0.05 258 / 0.5) 45%, transparent 100%)" }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-lg font-bold">Why homeowners choose us</h3>
              <ul className="mt-3 space-y-2.5 text-sm">
                {[
                  "Free on-site assessment and energy audit",
                  "Transparent fixed-price quotes   no surprises",
                  "Permits, inspections, and rebates handled",
                  "Workmanship warranty on every installation",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-white/90">
                    <Check className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <a
                href="tel:+15551234567"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                <PhoneCall className="h-4 w-4" /> (555) 123-4567
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- TRUST STRIP ---------------- */

function TrustStrip() {
  const items = [
    { icon: BadgeCheck, label: "Licensed & Insured" },
    { icon: ShieldCheck, label: "25-Yr Panel Warranty" },
    { icon: Leaf, label: "Tier-1 Solar Equipment" },
    { icon: DollarSign, label: "Financing Available" },
    { icon: HomeIcon, label: "Residential" },
    { icon: Building2, label: "Commercial" },
  ];
  const all = [...items, ...items];
  return (
    <section className="border-y border-border bg-secondary/50 py-5">
      <div className="marquee-outer">
        <div className="marquee-track">
          {all.map((it, i) => (
            <div key={i} className="flex items-center gap-2 text-sm font-medium text-primary/80 mx-10 shrink-0">
              <it.icon className="h-4 w-4 text-accent" />
              {it.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */

const services = [
  {
    icon: Sun,
    title: "Solar Panel Installation",
    desc: "End-to-end design and installation of high-efficiency solar systems engineered for your roof, energy use, and budget.",
    bullets: [
      "Custom system design & shading analysis",
      "Tier-1 panels & inverters",
      "Permits, interconnection & rebates",
      "Performance monitoring app",
    ],
  },
  {
    icon: Zap,
    title: "Electrical Repair & Maintenance",
    desc: "Licensed electricians for diagnostics, panel upgrades, rewiring, lighting, and code-compliant repairs   residential and commercial.",
    bullets: [
      "Panel & breaker upgrades (200A+)",
      "Troubleshooting & rewiring",
      "Lighting & outlet installation",
      "Surge protection & safety audits",
    ],
  },
  {
    icon: Plug,
    title: "EV Charging Setup",
    desc: "Level 2 home and commercial EV charger installation with safe wiring, proper load calculation, and full permitting.",
    bullets: [
      "Tesla, ChargePoint, Wallbox & more",
      "Load calculation & subpanel work",
      "Indoor or weatherproof outdoor",
      "Smart-charging configuration",
    ],
  },
];

function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[800px] rounded-full bg-accent/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/[0.04] blur-2xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="inline-flex items-center rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">What We Do</p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
            Complete energy & electrical services
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            One trusted local team for solar power, electrical work, and EV charging   from the
            first quote through final inspection.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <article className="service-card group h-full rounded-2xl bg-card border border-border p-7 shadow-sm flex flex-col">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary to-[oklch(0.33_0.08_255)] text-accent shadow-sm">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-foreground/80">
                      <Check className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-accent transition"
                >
                  Request a quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */

function Process() {
  const steps = [
    { icon: PhoneCall, title: "1. Free Consultation", desc: "Tell us about your property and goals. We schedule a free on-site visit." },
    { icon: ClipboardList, title: "2. Custom Proposal", desc: "We design your system and deliver a clear, fixed-price quote   no pressure." },
    { icon: Wrench, title: "3. Professional Install", desc: "Our licensed crew handles permits, hardware, and clean installation." },
    { icon: Sparkles, title: "4. Activation & Support", desc: "We commission your system, walk you through it, and stand behind our work." },
  ];
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden text-white"
      style={{ background: "linear-gradient(135deg, oklch(0.22 0.06 258) 0%, oklch(0.19 0.05 262) 100%)" }}
    >
      <div className="pointer-events-none absolute inset-0 hero-grid-overlay opacity-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-accent/[0.07] blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="inline-flex items-center rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">Our Process</p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Simple, transparent, done right
          </h2>
          <p className="mt-4 text-white/70 text-lg">
            Four straightforward steps from first call to system activation.
          </p>
        </Reveal>

        <ol className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <li className="relative rounded-2xl border border-white/10 bg-white/5 p-6 h-full hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300">
                <div className="pointer-events-none absolute right-4 top-3 font-display text-6xl font-black text-white/[0.04] leading-none select-none">
                  {i + 1}
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-accent-foreground shadow-md shadow-accent/25">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */

function About() {
  const stats = [
    { num: "500+", label: "Installations Completed" },
    { num: "10+", label: "Years of Experience" },
    { num: "100%", label: "Licensed & Insured" },
    { num: "4.9★", label: "Average Customer Rating" },
  ];

  return (
    <section id="about" className="py-20 md:py-28" style={{ background: "linear-gradient(135deg, oklch(0.97 0.01 255) 0%, oklch(0.99 0.014 80) 100%)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative">
            <img
              src={aboutImg}
              alt="Solar Care & Electric technician installing solar panels"
              loading="lazy"
              width={1280}
              height={1024}
              className="w-full rounded-2xl shadow-xl ring-1 ring-border"
            />
            <div className="hidden sm:flex absolute -bottom-6 -right-6 items-center gap-3 rounded-2xl bg-primary text-white px-5 py-4 shadow-xl">
              <Battery className="h-6 w-6 text-accent" />
              <div>
                <div className="font-display text-lg font-bold leading-tight">Saving clients</div>
                <div className="text-xs text-white/70">$1,200+ per year, on average</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="inline-flex items-center rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">About Us</p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
            Local experts you can count on
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Solar Care & Electric LLC is a family-run team of licensed professionals with over a
            decade of experience installing solar systems, modernizing electrical infrastructure,
            and setting up EV charging for homes and businesses across the region.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We pair clean workmanship with straightforward communication   so you always know
            what's happening and what it costs. Every project is permitted, inspected, and backed
            by a written workmanship warranty.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`rounded-2xl p-5 shadow-sm ${i % 2 === 0 ? "bg-gradient-to-br from-primary to-[oklch(0.33_0.08_255)]" : "bg-card border border-border"}`}
              >
                <div className={`font-display text-2xl sm:text-3xl font-extrabold ${i % 2 === 0 ? "text-accent" : "text-primary"}`}>
                  {s.num}
                </div>
                <div className={`mt-1 text-xs sm:text-sm ${i % 2 === 0 ? "text-white/70" : "text-muted-foreground"}`}>{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- WHY US ---------------- */

const whyUs = [
  { icon: BadgeCheck, title: "Licensed & Certified Technicians", desc: "Fully insured, NABCEP-trained, and code-compliant on every project." },
  { icon: ShieldCheck, title: "Affordable & Transparent Pricing", desc: "Detailed fixed-price quotes with no surprise fees   ever." },
  { icon: Clock, title: "Fast Turnaround", desc: "Most residential projects scheduled and completed within days, not weeks." },
  { icon: Workflow, title: "End-to-End Service", desc: "From design and permits to installation, inspection, and after-care." },
];

function WhyUs() {
  return (
    <section id="why" className="relative py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 section-dots opacity-[0.35]" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-accent/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-64 w-64 rounded-full bg-primary/[0.04] blur-2xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="inline-flex items-center rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">Why Us</p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
            Why Solar Care & Electric?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Hundreds of homeowners and businesses choose us for the same reasons.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 80}>
              <div className="flex gap-4 rounded-2xl bg-card p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" style={{ border: "1px solid var(--color-border)", borderLeft: "3px solid var(--color-accent)" }}>
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-[oklch(0.33_0.08_255)] text-accent shadow-sm">
                  <w.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-primary">{w.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */

const testimonials = [
  {
    name: "Marcus R.",
    role: "Homeowner",
    quote:
      "Solar Care made the entire installation effortless. Clear pricing, clean work, and our power bill dropped immediately. The crew was respectful and finished a day ahead of schedule.",
  },
  {
    name: "Priya S.",
    role: "EV Owner",
    quote:
      "They installed our Level 2 EV charger in a single afternoon. Professional crew, handled all the permits, and walked me through the smart-charging app before they left.",
  },
  {
    name: "Daniel K.",
    role: "Business Owner",
    quote:
      "Quick response on an electrical issue at our office. Honest, fast, and reasonably priced. We've already booked them for our solar project. Highly recommend.",
  },
];

function Testimonials() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, oklch(0.99 0.015 85) 0%, oklch(0.97 0.018 70) 100%)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="inline-flex items-center rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">Testimonials</p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
            What our clients say
          </h2>
          <p className="mt-4 text-muted-foreground">Trusted by hundreds of homeowners and businesses across the region.</p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="relative h-full rounded-2xl bg-card border border-border p-7 shadow-sm flex flex-col overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="pointer-events-none absolute -right-2 -top-4 font-display text-[110px] font-black leading-none select-none text-primary/[0.04]">"</div>
                <div className="flex gap-0.5 text-accent" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-foreground/90 leading-relaxed flex-1">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-display text-sm font-bold shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-primary">{t.name}</div>
                    <div className="text-muted-foreground text-xs">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

const faqs = [
  {
    q: "How much does a typical solar installation cost?",
    a: "Most residential systems range based on roof size and energy usage. After your free assessment we provide a detailed fixed-price quote that includes equipment, labor, permits, and applicable rebates.",
  },
  {
    q: "How long does installation take?",
    a: "Most home solar systems are installed in 1–3 days. EV chargers are typically completed in a single afternoon. Larger commercial projects are scheduled with a clear timeline upfront.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes   we are fully licensed, bonded, and insured. All technicians are certified, and every job is permitted and inspected to local code.",
  },
  {
    q: "What warranty do you offer?",
    a: "Solar panels carry a 25-year manufacturer warranty, inverters typically 10–12 years, and our workmanship is backed by our own written warranty.",
  },
  {
    q: "Do you handle permits and rebates?",
    a: "Yes. We manage permitting, utility interconnection, and help you claim every applicable federal, state, and local incentive.",
  },
];

function Faq() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "linear-gradient(to bottom, var(--color-background) 0%, oklch(0.97 0.01 250) 100%)" }}>
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full bg-primary/[0.05] blur-3xl" />
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="inline-flex items-center rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">FAQ</p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-muted-foreground">
            Don't see your question? <a href="#contact" className="font-semibold text-primary underline underline-offset-4">Get in touch</a>.
          </p>
        </Reveal>

        <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-card shadow-md">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              <details className="group p-6 open:bg-secondary/40 transition">
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                  <span className="font-display text-base sm:text-lg font-bold text-primary">
                    {f.q}
                  </span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary text-primary group-open:bg-accent group-open:text-accent-foreground transition-colors">
                    <Plus className="h-4 w-4 group-open:hidden" />
                    <Minus className="h-4 w-4 hidden group-open:block" />
                  </span>
                </summary>
                <p className="faq-body mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 overflow-hidden text-white"
      style={{ background: "linear-gradient(135deg, oklch(0.20 0.06 258) 0%, oklch(0.28 0.07 260) 100%)" }}
    >
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-accent/[0.08] blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-64 w-64 rounded-full bg-white/[0.03] blur-2xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <Reveal>
            <p className="inline-flex items-center rounded-full bg-accent/10 border border-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">Contact</p>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold">
              Get your free quote today
            </h2>
            <p className="mt-4 text-white/75 leading-relaxed">
              Tell us about your project and we'll get back to you within one business day with
              next steps and a transparent quote.
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-white/20 to-white/5 border border-white/10 text-accent shrink-0">
                  <Phone className="h-4 w-4" />
                </span>
                <a href="tel:+15551234567" className="hover:text-accent transition">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-white/20 to-white/5 border border-white/10 text-accent shrink-0">
                  <Mail className="h-4 w-4" />
                </span>
                <a href="mailto:hello@solarcareelectric.com" className="hover:text-accent transition">
                  hello@solarcareelectric.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-white/20 to-white/5 border border-white/10 text-accent shrink-0">
                  <MapPin className="h-4 w-4" />
                </span>
                Serving your city & surrounding areas
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-white/20 to-white/5 border border-white/10 text-accent shrink-0">
                  <Clock className="h-4 w-4" />
                </span>
                Mon–Sat · 8:00 AM – 6:00 PM
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={120} className="lg:col-span-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="rounded-2xl bg-white text-foreground p-6 sm:p-8 shadow-xl"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name">
                <input required type="text" className={inputCls} placeholder="Jane Smith" />
              </Field>
              <Field label="Phone">
                <input required type="tel" className={inputCls} placeholder="(555) 123-4567" />
              </Field>
              <Field label="Email" className="sm:col-span-2">
                <input required type="email" className={inputCls} placeholder="you@example.com" />
              </Field>
              <Field label="Service" className="sm:col-span-2">
                <select required className={inputCls} defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option>Solar Panel Installation</option>
                  <option>Electrical Repair</option>
                  <option>EV Charging Setup</option>
                </select>
              </Field>
              <Field label="Message" className="sm:col-span-2">
                <textarea
                  rows={4}
                  className={inputCls}
                  placeholder="Tell us a bit about your project…"
                />
              </Field>
            </div>

            <button
              type="submit"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-md shadow-accent/25 hover:shadow-lg hover:shadow-accent/40 hover:brightness-95 transition-all"
            >
              {submitted ? "Thanks   we'll be in touch!" : "Submit Request"}
              {!submitted && <ArrowRight className="h-4 w-4" />}
            </button>
            <p className="mt-3 text-xs text-muted-foreground text-center">
              By submitting, you agree to be contacted about your project. No spam, ever.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent";

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs font-semibold text-foreground/70 mb-1.5">{label}</span>
      {children}
    </label>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  return (
    <footer className="text-white/80 border-t border-white/10" style={{ background: "linear-gradient(to bottom, oklch(0.22 0.06 258) 0%, oklch(0.17 0.05 258) 100%)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <a href="#home" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-accent">
              <Sun className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="font-display text-base font-bold text-white">
              Solar Care & Electric LLC
            </span>
          </a>
          <p className="mt-4 text-sm max-w-md leading-relaxed">
            Clean energy, electrical repair, and EV charging   done by licensed local pros you can
            trust. Powering homes and businesses with care since 2014.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#services" className="hover:text-accent transition">Services</a></li>
            <li><a href="#about" className="hover:text-accent transition">About</a></li>
            <li><a href="#why" className="hover:text-accent transition">Why Us</a></li>
            <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold text-white">Follow</h4>
          <div className="mt-4 flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-accent hover:text-accent-foreground transition"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-accent hover:text-accent-foreground transition"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-6 text-xs text-white/60">
            Licensed · Bonded · Insured
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 sm:px-6 py-5 text-xs text-white/60">
          © 2025 Solar Care & Electric LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
