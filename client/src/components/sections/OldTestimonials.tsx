import { useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ayesha Khan",
    location: "Lahore",
    text: "The soft bristles are so gentle on my gums. Brushify has completely changed my morning routine. My dentist even noticed the difference!",
    rating: 5,
  },
  {
    name: "Muhammad Tariq",
    location: "Karachi",
    text: "Finally a Pakistani brand that matches international quality. The premium brush feels amazing and lasts much longer than my previous ones.",
    rating: 5,
  },
  {
    name: "Fatima Malik",
    location: "Islamabad",
    text: "My kids love the colorful kids range. It's made brushing fun for them. Great quality and affordable pricing. Highly recommend!",
    rating: 5,
  },
  {
    name: "Usman Ali",
    location: "Faisalabad",
    text: "I've been using Brushify for 6 months now. The bamboo eco range is fantastic — feels premium and I'm doing my part for the environment too.",
    rating: 5,
  },
];

export function OldTestimonials() {
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(null);

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-0 w-[300px] h-[300px] bg-[#E8F4FD]/40 rounded-full blur-[80px]" />
        <div className="absolute bottom-[20%] left-0 w-[250px] h-[250px] bg-[#F1F7FC]/60 rounded-full blur-[60px]" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0A5EBF] font-display">
            Trusted Across Pakistan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-[#0C1E3F] mt-3">
            Smiles That <span className="text-[#0A5EBF]">Speak</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`p-8 rounded-2xl h-full cursor-default transition-smooth relative overflow-hidden ${
                hoveredTestimonial === i
                  ? "shadow-[0_20px_60px_rgba(10,94,191,0.15)] scale-[1.01]"
                  : "hover:shadow-[0_8px_32px_rgba(10,94,191,0.06)]"
              }`}
              style={{
                background: hoveredTestimonial === i
                  ? "linear-gradient(135deg, #0A5EBF, #084A9A)"
                  : "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(232,244,253,0.3))",
                backdropFilter: "blur(20px)",
                border: hoveredTestimonial === i
                  ? "1px solid rgba(255,255,255,0.2)"
                  : "1px solid rgba(10,94,191,0.08)",
              }}
              onMouseEnter={() => setHoveredTestimonial(i)}
              onMouseLeave={() => setHoveredTestimonial(null)}
            >
              <div className="relative z-10">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className={`w-4 h-4 transition-smooth ${
                        hoveredTestimonial === i ? "text-yellow-300 fill-yellow-300" : "text-yellow-400 fill-yellow-400"
                      }`}
                    />
                  ))}
                </div>
                <p className={`text-sm leading-relaxed mb-6 font-body ${
                  hoveredTestimonial === i ? "text-white/90" : "text-[#0C1E3F]/55"
                }`}>
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold font-display transition-smooth ${
                    hoveredTestimonial === i ? "bg-white/20 text-white" : "bg-[#0A5EBF]/8 text-[#0A5EBF]"
                  }`}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${hoveredTestimonial === i ? "text-white" : "text-[#0C1E3F]"}`}>
                      {t.name}
                    </p>
                    <p className={`text-xs ${hoveredTestimonial === i ? "text-white/55" : "text-[#0C1E3F]/35"}`}>
                      {t.location}, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}