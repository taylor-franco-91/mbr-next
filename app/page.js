import Hero from "./components/Hero.jsx";
import FeatureCard from "./components/FeatureCard.jsx";


export default function HomePage() {
  return (
    <main>
      <Hero
        title="New Beginnings: Your 7-Day Mind-Body Reset"
        subtitle="For A Radient Life"
        ctaLabel="✨ Start Your Reset Today"
        ctaHref="/#epiphany"
      />
      <section
        id="epiphany"
        className="py-24 px-6 bg-gradient-to-br from-white to-emerald-50 text-center shadow-inner"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold text-emerald-700 mb-6">
            How I Discovered the Power of Fasting
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto">
            Years ago, I felt stuck. Tired, foggy, bloated, and frustrated. I was trying every diet, LITERALLY EVERY ONE! I even went vegan for 6–7 years all to end up gaining weight! I tried every fitness plan, and NOTHING was working or created real change — until I found fasting. That one decision changed everything. I discovered that fasting wasn't about starving — it was about reconnecting with the natural intelligence of my body. I felt clarity. Strength. Peace. And I watched my body transform faster than ever before.
          </p>
        </div>
      </section>

      <section className="p-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Benefits</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <FeatureCard
              icon="⚡"
              title="More Energy"
              copy="Kickstart your day feeling lighter and more focused."
            />
            <FeatureCard
              icon="🧠"
              title="Mental Clarity"
              copy="Fewer crashes, clearer thinking, better decisions."
            />
            <FeatureCard
              icon="💪"
              title="Confidence"
              copy="Feel in control of your routine and results."
            />
          </div>
        </div>
      </section>

    </main>
  );
}
