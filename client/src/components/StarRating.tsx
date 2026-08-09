import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function StarRating({ value, size = 14, className }: { value: number; size?: number; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          strokeWidth={1.5}
          className={i <= Math.round(value) ? "fill-[var(--cyan)] text-[var(--cyan)]" : "text-muted-foreground/40"}
        />
      ))}
    </span>
  );
}