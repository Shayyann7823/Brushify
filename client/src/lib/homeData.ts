export const whyPoints = [
  { icon: "Sparkles", title: "10× Plaque Removal", body: "Sonic fluid dynamics reach where bristles cannot." },
  { icon: "BatteryFull", title: "70-Day Battery", body: "Charge it before a holiday, forget it for months." },
  { icon: "Droplets", title: "Fully Waterproof", body: "IPX8 sealed. Rinse it, shower with it, no drama." },
  { icon: "Gauge", title: "Pressure Sensor", body: "Protects enamel and gums with a light-ring warning." },
  { icon: "Star", title: "Visible Whitening", body: "Polish rhythm lifts surface stains in three weeks." },
  { icon: "BrainCircuit", title: "AI Guidance", body: "Coaching that adapts to how you actually brush." },
];

export const smartFeatures = [
  { icon: "Bluetooth", title: "Bluetooth 5.3", body: "Pairs instantly and syncs a month of sessions in seconds." },
  { icon: "Activity", title: "App Tracking", body: "A live coverage map shows the spots you keep missing." },
  { icon: "Gauge", title: "Pressure Detection", body: "Haptic feedback the moment you push past 2 newtons." },
  { icon: "Timer", title: "Brushing Timer", body: "Quadrant pacing with a soft chime, never a buzzer." },
  { icon: "BatteryCharging", title: "Battery Health", body: "Cell diagnostics keep capacity above 90% for years." },
  { icon: "Plane", title: "Travel Lock", body: "Double-tap to disable the motor for flights and bags." },
];

export const plans = [
  { name: "Monthly", price: 1499, period: "mo", heads: "1 head every month", perks: ["Free shipping", "Pause anytime", "Recycling pouch"] },
  { name: "Quarterly", price: 3999, period: "3 mo", heads: "3 heads every quarter", perks: ["Free shipping", "Save 17%", "Priority support", "Recycling pouch"], badge: "Best value" },
  { name: "Yearly", price: 12999, period: "yr", heads: "12 heads a year", perks: ["Free shipping", "Save 28%", "Free travel case", "2-year warranty extension"] },
];

export const homeReviews = [
  { name: "Amara Okafor", role: "Dentist, Lagos", rating: 5, text: "I recommend the Pro to every patient. The pressure halo genuinely changes behaviour.", initials: "AO" },
  { name: "Jonas Weber", role: "Designer, Berlin", rating: 5, text: "It feels like a piece of audio equipment. The dock alone is worth it.", initials: "JW" },
  { name: "Priya Sharma", role: "Runner, Mumbai", rating: 4, text: "Battery lasted my whole two-month trip. Travel lock is a small genius touch.", initials: "PS" },
  { name: "Elena Rossi", role: "Architect, Milan", rating: 5, text: "The AI Edition told me I was neglecting my lower left. It was right.", initials: "ER" },
  { name: "Tom Becker", role: "Teacher, Leeds", rating: 5, text: "Quietest electric brush I have owned. My gums stopped bleeding in a month.", initials: "TB" },
  { name: "Mei Lin", role: "Founder, Singapore", rating: 5, text: "Packaging, app, hardware — everything is considered. Rare these days.", initials: "ML" },
];

export const money = (n: number) => `Rs. ${n.toLocaleString("en-PK", { maximumFractionDigits: 0 })}`;