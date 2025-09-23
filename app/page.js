import Hero from "./components/Hero.jsx";


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

    </main>
  );
}
