import { motion } from "framer-motion";
import * as icons from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { whyPoints } from "@/lib/homeData";

export function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Why Brushify"
        title={<>Six reasons it feels different in the hand</>}
        body="Every decision, from the motor mount to the bristle nylon, exists to make two minutes a day measurably better."
      />

      <div className="relative mt-16">
        <div className="absolute top-0 bottom-0 left-[15px] w-px bg-gradient-to-b from-transparent via-[var(--cyan)]/40 to-transparent md:left-1/2" />
        <ul className="space-y-10">
          {whyPoints.map((p, i) => {
            const Icon = (icons as unknown as Record<string, icons.LucideIcon>)[p.icon] ?? icons.Sparkles;
            const right = i % 2 === 1;
            return (
              <li key={p.title} className="relative md:grid md:grid-cols-2 md:gap-12">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="absolute top-6 left-0 z-10 grid h-8 w-8 place-items-center rounded-full bg-accent-gradient text-white md:left-1/2 md:-translate-x-1/2"
                >
                  <Icon size={16} />
                </motion.span>
                <Reveal
                  x={right ? 40 : -40}
                  y={0}
                  className={right ? "md:col-start-2 md:pl-12" : "md:pr-12 md:text-right"}
                >
                  <div className="ml-12 rounded-[1.75rem] border border-border/70 bg-card/70 p-6 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--cyan)]/40 hover:shadow-[var(--shadow-float)] md:ml-0">
                    <h3 className="text-xl font-bold font-display text-[#0C1E3F]">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}