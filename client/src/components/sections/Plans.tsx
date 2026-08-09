import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Counter } from "@/components/Counter";
import { PremiumButton } from "@/components/PremiumButton";
import { SectionHeading } from "@/components/Reveal";
import { plans } from "@/lib/homeData";

export function Plans() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Subscription"
        title="Fresh heads, automatically"
        body="Wear indicators fade at 90 days. A new head arrives before they do — and the old one gets recycled."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {plans.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.03 }}
            className={
              p.badge
                ? "gradient-border relative rounded-[2rem] bg-card/90 p-8 shadow-[var(--shadow-float)]"
                : "relative rounded-[2rem] border border-border/70 bg-card/70 p-8 shadow-[var(--shadow-soft)]"
            }
          >
            {p.badge && (
              <span className="absolute -top-3 left-8 rounded-full bg-accent-gradient px-3 py-1 text-[11px] font-semibold text-white">
                {p.badge}
              </span>
            )}
            <h3 className="text-lg font-bold font-display text-[#0C1E3F]">{p.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.heads}</p>
            <p className="mt-6 text-5xl font-bold font-display text-[#0C1E3F]">
              Rs.{" "}
              <Counter to={p.price} />
              <span className="ml-1 text-sm font-medium text-muted-foreground">/{p.period}</span>
            </p>
            <ul className="mt-6 space-y-3">
              {p.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Check size={16} className="mt-0.5 shrink-0 text-[var(--cyan)]" />
                  {perk}
                </li>
              ))}
            </ul>
            <PremiumButton
              variant={p.badge ? "accent" : "ghost"}
              size="lg"
              className="mt-8 w-full"
              onClick={() =>
                toast.success(`${p.name} plan added`, {
                  description: `Rs. ${p.price.toLocaleString("en-PK")} / ${p.period}`,
                })
              }
            >
              Choose {p.name}
            </PremiumButton>
          </motion.article>
        ))}
      </div>
    </section>
  );
}