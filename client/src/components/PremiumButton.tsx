import { useRef, useState, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:shadow-[var(--shadow-float)]",
  accent: "bg-accent-gradient text-white hover:shadow-[var(--shadow-glow)]",
  ghost: "bg-secondary/70 text-foreground hover:bg-secondary",
  outline: "gradient-border bg-transparent text-foreground hover:bg-secondary/50",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-7 text-sm",
  lg: "h-14 px-9 text-base",
};

type Props = ComponentPropsWithoutRef<"button"> & {
  variant?: Variant;
  size?: Size;
  magnetic?: boolean;
  children: ReactNode;
};

export function PremiumButton({
  variant = "primary",
  size = "md",
  magnetic = true,
  className,
  children,
  onClick,
  ...rest
}: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  return (
    <button
      ref={ref}
      onMouseMove={(e) => {
        if (!magnetic || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        setOffset({
          x: ((e.clientX - (r.left + r.width / 2)) / r.width) * 12,
          y: ((e.clientY - (r.top + r.height / 2)) / r.height) * 8,
        });
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      onClick={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const id = Date.now();
        setRipples((p) => [...p, { id, x: e.clientX - r.left, y: e.clientY - r.top }]);
        setTimeout(() => setRipples((p) => p.filter((x) => x.id !== id)), 700);
        onClick?.(e);
      }}
      style={{ transform: `translate3d(${offset.x}px, ${offset.y - (offset.x || offset.y ? 2 : 0)}px, 0)` }}
      className={cn(
        "relative inline-flex select-none items-center justify-center gap-2 overflow-hidden rounded-full font-medium",
        "transition-[transform,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
        "active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      {...rest}
    >
      <span className="relative z-10 inline-flex items-center gap-2 whitespace-nowrap">{children}</span>
      {ripples.map((r) => (
        <span key={r.id} className="ripple" style={{ left: r.x - 8, top: r.y - 8, width: 16, height: 16 }} />
      ))}
    </button>
  );
}