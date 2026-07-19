# Clínica Ourique — Landing Page

Landing page one-page da Clínica Ourique, clínica odontológica familiar de
Santo Antônio da Patrulha, RS, especializada em implantes dentários,
prótese e laminado cerâmico.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com)
- TypeScript

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) para ver o resultado.

## Estrutura

- `components/` — seções da página (Hero, About, Specialties, BeforeAfter,
  Testimonials, Location, Footer, WhatsAppButton)
- `lib/constants.ts` — dados de contato, endereço e links de WhatsApp/Google
  Maps usados em toda a página
- `public/` — logo e fotos reais de casos (antes/depois)
- `app/icon.png`, `app/apple-icon.png` — favicon/ícone gerados a partir da
  marca da clínica

## Build

```bash
npm run build
npm start
```
