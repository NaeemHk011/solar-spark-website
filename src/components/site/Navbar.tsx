import { useEffect, useState } from "react";
import { Sun, Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3.5">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <span
            className={`grid h-10 w-10 place-items-center rounded-xl transition-all duration-300 ${
              scrolled
                ? "bg-gradient-to-br from-primary to-[oklch(0.32_0.08_255)] shadow-sm"
                : "bg-white/15 backdrop-blur-sm"
            }`}
          >
            <Sun
              className={`h-5 w-5 transition-colors ${scrolled ? "text-accent" : "text-accent"}`}
              strokeWidth={2.5}
            />
          </span>
          <span className={`font-display text-[15px] font-bold leading-tight transition-colors ${scrolled ? "text-primary" : "text-white"}`}>
            Solar Care
            <span className={`block text-[11px] font-medium tracking-wide transition-colors ${scrolled ? "text-muted-foreground" : "text-white/65"}`}>
              & Electric LLC
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative text-sm font-medium transition-colors group/link ${
                  scrolled
                    ? "text-foreground/75 hover:text-primary"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2px] w-0 rounded-full transition-all duration-300 group-hover/link:w-full ${
                    scrolled ? "bg-accent" : "bg-white/60"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className={`hidden md:inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all duration-200 ${
            scrolled
              ? "shadow-md shadow-accent/30 hover:shadow-lg hover:shadow-accent/40"
              : "shadow-lg shadow-black/20 hover:shadow-xl"
          } hover:brightness-95`}
        >
          Get a Free Quote
        </a>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          className={`md:hidden inline-flex items-center justify-center rounded-lg p-2 transition-colors ${
            scrolled ? "text-primary hover:bg-secondary" : "text-white hover:bg-white/10"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-nav border-t border-border/60">
          <ul className="mx-auto max-w-7xl px-4 py-4 space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-accent px-4 py-2.5 text-center text-sm font-semibold text-accent-foreground shadow-sm shadow-accent/20"
              >
                Get a Free Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
