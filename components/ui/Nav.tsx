import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="border-b border-wn-border bg-wn-midnight/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display font-bold text-lg text-wn-text tracking-tight">
          Witty<span className="text-wn-teal">Networks</span>
        </Link>
        <nav className="flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-wn-muted hover:text-wn-text transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm px-4 py-2 bg-wn-teal text-wn-midnight font-medium rounded-lg hover:bg-wn-teal-muted transition-colors"
          >
            Book a Call
          </Link>
        </nav>
      </div>
    </header>
  );
}
