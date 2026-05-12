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
} from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Reveal } from "@/components/site/Reveal";
import heroImage from "@/assets/hero-solar.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  {
    icon: Sun,
    title: "Solar Panel Installation",
    desc: "High-efficiency residential and commercial solar systems, designed and installed for maximum savings.",
  },
  {
    icon: Zap,
    title: "Electrical Repair & Maintenance",
    desc: "Licensed electricians for diagnostics, panel upgrades, wiring, and routine maintenance — done right.",
  },
  {
    icon: Plug,
    title: "EV Charging Setup",
    desc: "Level 2 home and business EV charger installation with safe, code-compliant wiring and permitting.",
  },
];

const whyUs = [
  { icon: BadgeCheck, title: "Licensed & Certified Technicians", desc: "Fully insured, trained, and code-compliant on every project." },
  { icon: ShieldCheck, title: "Affordable & Transparent Pricing", desc: "Detailed quotes with no surprise fees — ever." },
  { icon: Clock, title: "Fast Turnaround", desc: "Most projects scheduled and completed within days, not weeks." },
  { icon: Workflow, title: "End-to-End Service", desc: "From the first quote to final installation and inspection." },
];

const testimonials = [
  {
    name: "Marcus",
    quote:
      "Solar Care made the entire installation effortless. Clear pricing, clean work, and our power bill dropped immediately.",
  },
  {
    name: "Priya",
    quote:
      "They installed our EV charger in a single afternoon. Professional crew and they handled all the permits.",
  },
  {
    name: "Daniel",
    quote:
      "Quick response on an electrical issue at our office. Honest, fast, and reasonably priced. Highly recommend.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative hero-bg text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 hero-grid-overlay opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            <Sun className="h-3.5 w-3.5 text-accent" /> Licensed · Insured · Trusted
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            Powering Homes & Businesses with{" "}
            <span className="text-accent">Clean Energy</span>
          </h1>
          <p className="mt-5 max-w-xl text-base sm:text-lg text-white/75">
            Expert solar installation, electrical repair, and EV charging solutions —
            licensed & trusted.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:brightness-95 transition"
            >
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Our Services
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:justify-self-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-accent/20 blur-2xl" aria-hidden />
            <img
              src={heroImage}
              alt="Modern home with solar panels installed on the roof"
              width={1280}
              height={1024}
              className="relative w-full max-w-xl rounded-2xl shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">What We Do</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-primary">
            Complete energy & electrical services
          </h2>
          <p className="mt-3 text-muted-foreground">
            One trusted team for everything from solar to chargers to wiring upgrades.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <article className="group h-full rounded-2xl bg-card border border-border p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const stats = [
    { num: "500+", label: "Installations" },
    { num: "10+", label: "Years Experience" },
    { num: "100%", label: "Licensed & Insured" },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">About Us</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-primary">
            Local experts you can count on
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Solar Care & Electric LLC is a team of licensed professionals with over a decade of
            experience installing solar systems, modernizing electrical infrastructure, and setting
            up EV charging for residential and commercial clients. We pair clean workmanship with
            straightforward communication — so you always know what's happening and what it costs.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every project is permitted, inspected, and warrantied. That's our standard.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid sm:grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-card border border-border p-6 text-center shadow-sm"
              >
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-primary">
                  {s.num}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Why Us</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-primary">
            Why Solar Care & Electric?
          </h2>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 80}>
              <div className="flex gap-4 rounded-2xl border border-border bg-card p-6">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary text-accent">
                  <w.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-primary">{w.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "var(--soft)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Testimonials</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-primary">
            What our clients say
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="h-full rounded-2xl bg-card border border-border p-7 shadow-sm flex flex-col">
                <div className="flex gap-0.5 text-accent" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-foreground/90 leading-relaxed flex-1">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-5 text-sm font-semibold text-primary">
                  — {t.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-20 md:py-28 bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Contact</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Get your free quote today</h2>
            <p className="mt-4 text-white/75">
              Tell us about your project and we'll get back to you within one business day.
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-accent">
                  <Phone className="h-4 w-4" />
                </span>
                <a href="tel:+15551234567" className="hover:text-accent transition">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-accent">
                  <Mail className="h-4 w-4" />
                </span>
                <a href="mailto:hello@solarcareelectric.com" className="hover:text-accent transition">
                  hello@solarcareelectric.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-accent">
                  <MapPin className="h-4 w-4" />
                </span>
                Serving your city & surrounding areas
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
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:brightness-95 transition"
            >
              {submitted ? "Thanks — we'll be in touch!" : "Submit Request"}
              {!submitted && <ArrowRight className="h-4 w-4" />}
            </button>
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

function Footer() {
  return (
    <footer className="bg-primary text-white/80 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <a href="#home" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-accent">
              <Sun className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="font-display text-base font-bold text-white">
              Solar Care & Electric LLC
            </span>
          </a>
          <p className="mt-4 text-sm max-w-sm">
            Clean energy, electrical repair, and EV charging — done by licensed local pros.
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
