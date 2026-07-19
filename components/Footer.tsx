import { ADDRESS, PHONE_DISPLAY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-petrol-950 py-10 text-petrol-200">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center sm:px-8">
        <span className="font-heading text-lg font-semibold text-cream-50">
          Clínica Ourique
        </span>
        <p className="text-sm">
          {ADDRESS.street}, {ADDRESS.neighborhood} &middot; {ADDRESS.city} -{" "}
          {ADDRESS.state}
        </p>
        <p className="text-sm">WhatsApp: {PHONE_DISPLAY}</p>
        <p className="mt-4 text-xs text-petrol-400">
          &copy; {new Date().getFullYear()} Clínica Ourique &mdash; Odontologia
          familiar desde 1973.
        </p>
      </div>
    </footer>
  );
}
