import { motion } from "framer-motion";
import * as icons from "lucide-react";
import { SectionHeading } from "@/components/Reveal";
import { smartFeatures } from "@/lib/homeData";

export function SmartFeatures() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-mesh opacity-60" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Smart features"
          title="Quietly intelligent, never noisy"
          body="The app is optional. The hardware still knows what it is doing."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {smartFeatures.map((f, i) => {
            const Icon = (icons as unknown as Record<string, icons.LucideIcon>)[f.icon] ?? icons.Sparkles;
            return (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                className="group glass relative overflow-hidden rounded-[1.75rem] p-7"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-card/80 text-[var(--cyan)] shadow-[var(--shadow-soft)] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={22} strokeWidth={1.7} />
                </span>
                <h3 className="mt-5 text-lg font-bold font-display text-[#0C1E3F]">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
              
                <div className="pointer-events-none absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-[var(--cyan)]/20 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}