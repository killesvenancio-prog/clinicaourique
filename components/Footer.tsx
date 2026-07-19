import { ADDRESS, DENTIST, EMAIL, PHONE_DISPLAY, SOCIAL } from "@/lib/constants";

function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} {...props}>
      <path
        d="M14 21v-7.5h2.4l.4-3.1H14V8.4c0-.9.3-1.5 1.6-1.5h1.6V4.2c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.3H8.5v3.1H11V21h3Z"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { href: SOCIAL.instagram, label: "Instagram da Clínica Ourique", Icon: IconInstagram },
  { href: SOCIAL.facebook, label: "Facebook da Clínica Ourique", Icon: IconFacebook },
];

export default function Footer() {
  return (
    <footer className="bg-petrol-950 py-10 text-petrol-200">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center sm:px-8">
        <div className="flex flex-col items-center gap-0.5">
          <span className="font-heading text-lg font-semibold text-cream-50">
            Clínica Ourique
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-gold-400">
            A Ciência do Sorriso
          </span>
        </div>

        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-petrol-700 text-petrol-200 transition-colors duration-150 hover:border-gold-400 hover:text-gold-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-petrol-950"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="text-sm">
          {ADDRESS.street}, {ADDRESS.neighborhood} &middot; {ADDRESS.city} -{" "}
          {ADDRESS.state}
        </p>
        <p className="text-sm">
          WhatsApp: {PHONE_DISPLAY} &middot; {EMAIL}
        </p>
        <p className="mt-4 text-xs text-petrol-400">
          &copy; {new Date().getFullYear()} Clínica Ourique &mdash; Odontologia
          familiar desde 1973.
        </p>
        <p className="text-xs text-petrol-400">
          {DENTIST.name} &mdash; {DENTIST.cro}
        </p>
      </div>
    </footer>
  );
}
