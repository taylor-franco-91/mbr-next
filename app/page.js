import Hero from "./components/Hero.jsx";
import FeatureCard from "./components/FeatureCard.jsx";
import BeforeAfter from "./components/BeforeAfter.jsx";



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

        {/* background image layer */}
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* lead badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 text-emerald-800 px-3 py-1 text-xs font-semibold tracking-wide">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            My Story
          </div>
          <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-400/60 to-lime-400/60" />

          <h2 className="mt-3 text-5xl md:text-6xl font-extrabold text-emerald-700">
            How I Discovered the Power of Fasting
          </h2>

          <p className="mt-4 text-[1.15rem] md:text-[1.2rem] text-gray-800 leading-relaxed max-w-3xl mx-auto text-balance">
            Years ago, I felt stuck. Tired, foggy, bloated, and frustrated. I was trying every diet, LITERALLY EVERY ONE! I even went vegan for 6–7 years all to end up gaining weight! I tried every fitness plan, and NOTHING was working or created real change, until I found fasting. That one decision changed everything. I discovered that fasting wasn't about starving, it was about reconnecting with the natural intelligence of my body. I felt clarity. Strength. Peace. And I watched my body transform faster than ever before.
          </p>

          {/* pull-quote card */}
          <figure className="mt-8 mx-auto max-w-3xl">
            <blockquote className="rounded-2xl border bg-white/80 backdrop-blur p-6 text-left shadow-sm">

              <p className="text-lg md:text-xl leading-relaxed text-emerald-900">
                “Fasting wasn’t about starving, it was about reconnecting with the natural intelligence of my body.”
              </p>
            </blockquote>
            <figcaption className="mt-3 text-sm text-emerald-700/80">— My turning point</figcaption>
          </figure>
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

      <section id="transformation" className="py-24 px-6 bg-gradient-to-br from-white to-emerald-100 text-center shadow-inner">
        <div className="max-w-5xl mx-auto">
          {/* premium header */}
          <div className="text-center">


            <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-emerald-700">
              My Transformation
            </h2>

            <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-400/60 to-lime-400/60" />

            <p className="mt-3 text-gray-700 text-[1.05rem]">
              Drag the handle to compare the before & after.
            </p>
          </div>


          {/* Slider */}
          <div className="mt-10">
            <BeforeAfter
              beforeSrc="https://i.imgur.com/XP7vCBO.jpeg"
              afterSrc="https://i.imgur.com/bBcpHbI.jpeg"
              beforeLabel="Before"
              afterLabel="After"
              initial={50}
              className="w-full max-w-md md:max-w-lg mx-auto aspect-[3/4] rounded-3xl shadow-lg ring-1 ring-emerald-100"
            />

          </div>
          <div className="mt-8 mx-auto max-w-3xl text-left rounded-2xl border-2 border-emerald-500 bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">

            <p className="text-[1.05rem] leading-relaxed text-gray-800">
              {/* paste your full paragraph here (the original story text) */}
              This is what’s possible when you reset your mind and body. No, I’m not saying this 7-day fast alone will give you this kind of physique. But what I <em>am</em> saying is that this cleanse will put you on a path to a much more healthier, clearer, more confident version of yourself! Because without fasting I would have never achieved this kind of body that I have at 34. It’s your blueprint for transformation. That, I can promise!
            </p>
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
