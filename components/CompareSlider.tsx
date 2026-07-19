"use client";

import { useId, useState } from "react";
import Image, { type StaticImageData } from "next/image";

type CompareSliderProps = {
  before: StaticImageData;
  after: StaticImageData;
  beforeAlt: string;
  afterAlt: string;
};

export default function CompareSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
}: CompareSliderProps) {
  const [value, setValue] = useState(50);
  const id = useId();

  return (
    <div className="group relative aspect-[2/1] w-full touch-pan-y select-none overflow-hidden bg-petrol-900 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-gold-400 has-[:focus-visible]:ring-offset-2">
      <Image
        src={after}
        alt={afterAlt}
        fill
        placeholder="blur"
        className="pointer-events-none object-cover"
        sizes="(min-width: 640px) 50vw, 100vw"
      />

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
      >
        <Image
          src={before}
          alt={beforeAlt}
          fill
          placeholder="blur"
          className="object-cover"
          sizes="(min-width: 640px) 50vw, 100vw"
        />
      </div>

      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-petrol-950/70 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-cream-50">
        Antes
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-petrol-950/70 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-cream-50">
        Depois
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-cream-50"
        style={{ left: `${value}%` }}
      />
      <div
        className="pointer-events-none absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream-50 text-petrol-800 shadow-lg transition-transform duration-150 ease-snappy group-hover:scale-110 group-active:scale-95 motion-reduce:group-hover:scale-100 motion-reduce:group-active:scale-100"
        style={{ left: `${value}%` }}
      >
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          strokeWidth={2}
        >
          <path
            d="M8 8l-4 4 4 4M16 8l4 4-4 4"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <label htmlFor={id} className="sr-only">
        Comparar antes e depois: arraste para revelar o resultado
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="absolute inset-0 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
      />
    </div>
  );
}
