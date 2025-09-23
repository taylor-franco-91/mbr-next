import Hero from "./components/Hero.jsx";
import FeatureCard from "./components/FeatureCard.jsx";


export default function HomePage() {
  return (
    <main>
      <Hero
        title="Mind Body Reset"
        subtitle="Feel energetic, focused, and confident with a clean, modern reset."
        ctaLabel="Get Started"
        ctaHref="/#start"
      />
      <section id="start" className="min-h-[40vh] grid place-items-center p-8 bg-gray-50">
        <div className="max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Start Your Reset</h2>
          <p className="mt-3 text-gray-600">
            This is the section your CTA jumps to. We’ll fill it with real content later.
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
