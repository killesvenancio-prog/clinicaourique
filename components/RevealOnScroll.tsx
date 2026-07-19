import type { CSSProperties, ElementType, ReactNode } from "react";

export default function RevealOnScroll({
  children,
  delayMs = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delayMs?: number;
  className?: string;
  as?: ElementType;
}) {
  const style = { "--reveal-delay": `${delayMs}ms` } as CSSProperties;

  return (
    <Tag style={style} className={`content-reveal ${className}`}>
      {children}
    </Tag>
  );
}
