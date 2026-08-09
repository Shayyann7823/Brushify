import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  className?: string;
  once?: boolean;
};

export function Reveal({ children, delay = 0, y = 28, x = 0, scale = 1, className, once = true }: Props) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/60 px-4 py-1.5 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-5 text-3xl font-bold sm:text-4xl md:text-5xl font-display text-[#0C1E3F]">{title}</h2>
      {body && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{body}</p>}
    </Reveal>
  );
}