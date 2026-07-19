import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_LINK } from "@/lib/constants";
import logo from "@/public/logo.png";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#localizacao", label: "Localização" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-petrol-100 bg-cream-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <Link
          href="#top"
          className="shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50"
        >
          <Image
            src={logo}
            alt="Clínica Ourique — A Ciência do Sorriso"
            className="h-8 w-auto sm:h-9"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm text-sm font-medium text-petrol-700 transition-colors hover:text-petrol-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-petrol-800 px-4 py-2 text-sm font-semibold text-cream-50 shadow-sm transition-[background-color,transform] duration-150 ease-out hover:bg-petrol-900 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 motion-reduce:active:scale-100 sm:px-5"
        >
          Agendar
        </a>
      </div>
    </header>
  );
}
