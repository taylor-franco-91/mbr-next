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
        className="relative overflow-hidden py-24 px-6 text-center shadow-inner
             bg-gradient-to-br from-white to-emerald-50"
      >
        {/* background image layer */}
        <div
          aria-hidden
          className="absolute inset-0 z-0
               bg-[url('/epiphany-bg.png')] bg-no-repeat bg-contain bg-center
               pointer-events-none opacity-80 mix-blend-multiply"
        />

        {/* content layer */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold text-emerald-700 mb-6">
            How I Discovered the Power of Fasting
          </h2>
          <p className="text-[1.15rem] md:text-[1.2rem] text-gray-800 leading-relaxed max-w-3xl mx-auto text-balance">
            Years ago, I felt stuck. Tired, foggy, bloated, and frustrated. I was trying every diet, LITERALLY EVERY ONE! I even went vegan for 6–7 years all to end up gaining weight! I tried every fitness plan, and NOTHING was working or created real change, until I found fasting. That one decision changed everything. I discovered that fasting wasn't about starving, it was about reconnecting with the natural intelligence of my body. I felt clarity. Strength. Peace. And I watched my body transform faster than ever before.
          </p>
        </div>
      </section>

      <section
        id="why I created this"
        className="py-24 px-6 bg-gradient-to-br from-emerald-50 to-lime-100"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-700 text-center">
            Why I Created This
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-400 to-lime-400" />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <article className="rounded-2xl border bg-white/80 backdrop-blur p-6 shadow-sm text-left  transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
              <div className="text-3xl">🌿</div>
              <h3 className="mt-3 text-xl font-semibold text-emerald-700">Lived Experience</h3>
              <p className="mt-2 text-gray-700 leading-relaxed text-[1.05rem]">
                I’ve walked the path of cleansing, healing, and full transformation physically,
                mentally, and spiritually. Below you will see my transformation, so you know that
                I'm really about living the lifestyle not just talking about it. This isn’t just a
                cleanse. It’s a personal reset rooted in real results and real healing.
              </p>
            </article>

            {/* Card 2 */}
            <article className="rounded-2xl border bg-white/80 backdrop-blur p-6 shadow-sm text-left transition hover:-translate-y-0.5 hover:shadow-md
">
              <div className="text-3xl">⏳</div>
              <h3 className="mt-3 text-xl font-semibold text-emerald-700">Why Fasting</h3>
              <p className="mt-2 text-gray-700 leading-relaxed text-[1.05rem]">
                Fasting changed my life. It’s not just about dropping weight, it’s about healing
                on a deep level. Fasting can help support your body’s ability to reverse early
                diabetes, balance hormones, reduce internal inflammation, reverse autoimmune
                problems, even strengthen its defense against chronic illnesses and cancer. It
                can help reconnect your body with your purpose.
              </p>
            </article>

            {/* Card 3 */}
            <article className="rounded-2xl border bg-white/80 backdrop-blur p-6 shadow-sm text-left transition hover:-translate-y-0.5 hover:shadow-md
">
              <div className="text-3xl">💪</div>
              <h3 className="mt-3 text-xl font-semibold text-emerald-700">Worth the Effort</h3>
              <p className="mt-2 text-gray-700 leading-relaxed text-[1.05rem]">
                It’s not easy, but it’s absolutely worth it. And I’m here to guide you through it
                so you can reclaim the energy, strength, and clarity that’s always been yours.
              </p>
            </article>
          </div>
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
