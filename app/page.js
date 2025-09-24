import Hero from "./components/Hero.jsx";
import FeatureCard from "./components/FeatureCard.jsx";
import BeforeAfter from "./components/BeforeAfter.jsx";
import HashUnlocker from "./components/HashUnlocker.jsx";

export default function HomePage() {
  return (
    <main>
      <HashUnlocker />

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
      <section
        id="diets"
        className="relative py-24 px-6 text-center bg-slate-900 text-slate-100"
      >
        {/* soft vignette */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30" />

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* premium header */}
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-200/10 text-emerald-300 px-3 py-1 text-xs font-semibold tracking-wide">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            The Real Difference
          </div>

          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">
            <span className="bg-gradient-to-r from-emerald-300 to-lime-300 bg-clip-text text-transparent">
              Why Most Diets Don’t Work
            </span>
          </h2>
          <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-400/60 to-lime-400/60" />
          <p className="mt-3 uppercase tracking-wide text-sm md:text-base text-slate-400/80">
            Let’s be honest
          </p>

          {/* gradient-framed comparison panel */}
          <div className="mx-auto mt-10 max-w-5xl p-[2px] rounded-3xl bg-gradient-to-r from-emerald-400/30 via-lime-400/30 to-emerald-400/30">
            <div className="rounded-3xl bg-slate-900/80 backdrop-blur-md p-6 md:p-10">
              <div className="grid gap-8 md:grid-cols-2 text-left">
                {/* Most Diets */}
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-rose-300">
                    <span className="text-rose-400">✖</span> Most Diets
                  </h3>
                  <ul className="mt-3 space-y-3 text-slate-300">
                    <li className="flex gap-2">
                      <span className="text-rose-400">✖</span>
                      Focus on restriction, not healing.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-rose-400">✖</span>
                      Count calories instead of clearing toxins.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-rose-400">✖</span>
                      Work against your body instead of with it.
                    </li>
                  </ul>
                </div>

                {/* Mind Body Reset */}
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-emerald-300">
                    <span className="text-emerald-400">✓</span> Fasting
                  </h3>
                  <ul className="mt-3 space-y-3">
                    <li className="flex gap-2">
                      <span className="text-emerald-400">✓</span>
                      Burns Fat and Resets your Hormones.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-400">✓</span>
                      Improves digestion and reduces inflammation.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-400">✓</span>
                      Actives your bodies Natual Healing Process
                    </li>
                  </ul>
                </div>
              </div>

              {/* supporting line */}
              <p className="mt-8 text-sm md:text-base text-slate-300/90 text-center">
                That’s why this 7-day reset works: it taps into what your body is built to do —
                cleanse, repair, and renew.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="ebook" className="relative overflow-hidden py-24 px-6 bg-gradient-to-br from-emerald-100 to-white text-center">
        {/* soft glow accents */}
        <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-300/30 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-28 -left-20 w-80 h-80 rounded-full bg-lime-300/30 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* header */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-700">
            Your Blueprint to Transformation
          </h2>
          <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-400/60 to-lime-400/60" />

          <p className="mt-4 text-[1.2rem] text-gray-700 leading-relaxed max-w-3xl mx-auto">
            The <em>7-Day Mind-Body Reset</em> eBook is your personal guide to unlocking radiant health. Packed with 60 pages of step-by-step guidance, it’s like having me as your health coach, every step of the way.
          </p>

          {/* content */}
          <div className="mt-10 grid md:grid-cols-2 items-center gap-10 text-left">
            {/* framed product image */}
            <div className="mx-auto w-full max-w-sm">
              <div className="relative group">
                <div aria-hidden className="absolute -inset-2 rounded-[28px] bg-gradient-to-br from-emerald-400/40 via-lime-400/40 to-emerald-400/40 blur-lg opacity-50 group-hover:opacity-70 transition" />
                <div className="relative p-[2px] rounded-[24px] bg-gradient-to-br from-emerald-400/40 via-lime-400/40 to-emerald-400/40">
                  <div className="rounded-[22px] bg-white/80 backdrop-blur-sm p-3">
                    <img
                      src="/ebook-cover.png"
                      alt="7-Day Mind-Body Reset eBook cover"
                      className="w-full h-auto rounded-2xl shadow-xl ring-1 ring-emerald-200 transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </div>

              {/* trust chips */}
              <ul className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start text-sm">
                <li className="px-3 py-1 rounded-full border bg-white/80 backdrop-blur text-emerald-800">60 pages</li>
                <li className="px-3 py-1 rounded-full border bg-white/80 backdrop-blur text-emerald-800">Instant download</li>
                <li className="px-3 py-1 rounded-full border bg-white/80 backdrop-blur text-emerald-800">30-day guarantee</li>
              </ul>
            </div>

            {/* copy + CTA */}
            <div>
              <p className="text-gray-700 leading-relaxed text-[1.05rem]">
                Unlock the secrets to radiant health and discover your path to lasting energy. Feel alive with this 7-day transformation!
              </p>

              <ul className="mt-6 space-y-3 text-emerald-900">
                <li className="flex gap-2"><span className="text-emerald-600">✓</span> Step-by-step daily guidance</li>
                <li className="flex gap-2"><span className="text-emerald-600">✓</span> Simple, supportive habits to reduce cravings and boost clarity</li>
                <li className="flex gap-2"><span className="text-emerald-600">✓</span> Built to fit busy lives—short actions, real momentum</li>
              </ul>

              <div className="mt-8">
                <a
                  href="#purchase"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-4 text-base font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-transform hover:scale-[1.02] active:scale-[.98]"
                >
                  ✨ Claim your reset now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="objections" className="py-24 px-6 bg-gradient-to-br from-emerald-50 to-lime-100">
        <div className="max-w-5xl mx-auto">
          {/* header */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 text-emerald-800 px-3 py-1 text-xs font-semibold tracking-wide">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              FAQ
            </div>
            <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-emerald-700">
              Still Not Sure? Let’s Clear That Up
            </h2>
            <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-400/60 to-lime-400/60" />
          </div>

          {/* two fixed columns on desktop; single column on mobile */}
          <div className="mt-10 md:flex md:gap-6 text-left">
            {/* LEFT column */}
            <div className="md:w-1/2 space-y-4">
              {/* 1 */}
              <details className="group rounded-2xl border bg-white/80 backdrop-blur p-5 shadow-sm open:shadow-md transition">
                <summary className="flex items-center justify-between cursor-pointer select-none">
                  <span className="font-semibold text-emerald-700">“I’m not sure I can go without food for 7 days…”</span>
                  <span className="ml-4 grid h-7 w-7 place-items-center rounded-full bg-emerald-100 text-emerald-700 transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <div className="mt-3 text-gray-700 leading-relaxed">
                  Totally normal fear, but this isn’t starvation. It’s structured, supported, and designed to help you thrive. You’ll get hydration, nutrients, and guidance each step of the way.
                </div>
              </details>

              {/* 2 */}
              <details className="group rounded-2xl border bg-white/80 backdrop-blur p-5 shadow-sm open:shadow-md transition">
                <summary className="flex items-center justify-between cursor-pointer select-none">
                  <span className="font-semibold text-emerald-700">“I’ve tried cleanses before, and they didn’t work.”</span>
                  <span className="ml-4 grid h-7 w-7 place-items-center rounded-full bg-emerald-100 text-emerald-700 transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <div className="mt-3 text-gray-700 leading-relaxed">
                  That’s because they weren’t built on real transformation. This reset is different! Rooted in science, experience, and actual results (like mine).
                </div>
              </details>

              {/* 3 */}
              <details className="group rounded-2xl border bg-white/80 backdrop-blur p-5 shadow-sm open:shadow-md transition">
                <summary className="flex items-center justify-between cursor-pointer select-none">
                  <span className="font-semibold text-emerald-700">“Will I lose muscle?”</span>
                  <span className="ml-4 grid h-7 w-7 place-items-center rounded-full bg-emerald-100 text-emerald-700 transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <div className="mt-3 text-gray-700 leading-relaxed">
                  Nope. This 7-day cleanse is about protecting your body and preserving your health, not breaking it down. Your body will actually become more efficient at burning fat while maintaining lean mass.
                </div>
              </details>

              {/* 4 */}
              <details className="group rounded-2xl border bg-white/80 backdrop-blur p-5 shadow-sm open:shadow-md transition">
                <summary className="flex items-center justify-between cursor-pointer select-none">
                  <span className="font-semibold text-emerald-700">“Is fasting worth it?”</span>
                  <span className="ml-4 grid h-7 w-7 place-items-center rounded-full bg-emerald-100 text-emerald-700 transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <div className="mt-3 text-gray-700 leading-relaxed">
                  Absolutely! If you want to prolonge your health and heal from many illnesses and body pains from within, then fasting is a MUST. Like God said "WHEN you fast"
                </div>
              </details>
            </div>

            {/* RIGHT column */}
            <div className="md:w-1/2 space-y-4 mt-4 md:mt-0">
              {/* 5 */}
              <details className="group rounded-2xl border bg-white/80 backdrop-blur p-5 shadow-sm open:shadow-md transition">
                <summary className="flex items-center justify-between cursor-pointer select-none">
                  <span className="font-semibold text-emerald-700">“Will I have time for a 7-day reset?”</span>
                  <span className="ml-4 grid h-7 w-7 place-items-center rounded-full bg-emerald-100 text-emerald-700 transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <div className="mt-3 text-gray-700 leading-relaxed">
                  Yes! It’s designed for busy lives, short daily steps and flexibility to fit your schedule, with full support to keep you moving forward
                </div>
              </details>

              {/* 6 */}
              <details className="group rounded-2xl border bg-white/80 backdrop-blur p-5 shadow-sm open:shadow-md transition">
                <summary className="flex items-center justify-between cursor-pointer select-none">
                  <span className="font-semibold text-emerald-700">“Is fasting safe for me?”</span>
                  <span className="ml-4 grid h-7 w-7 place-items-center rounded-full bg-emerald-100 text-emerald-700 transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <div className="mt-3 text-gray-700 leading-relaxed">
                  Yes, when guided properly. This program includes safety tips and is crafted with health in mind, it’s built for success.
                </div>
              </details>

              {/* 7 */}
              <details className="group rounded-2xl border bg-white/80 backdrop-blur p-5 shadow-sm open:shadow-md transition">
                <summary className="flex items-center justify-between cursor-pointer select-none">
                  <span className="font-semibold text-emerald-700">“Can I do this if I’m pregnant?”</span>
                  <span className="ml-4 grid h-7 w-7 place-items-center rounded-full bg-emerald-100 text-emerald-700 transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <div className="mt-3 text-gray-700 leading-relaxed">
                  Fasting may not be suitable if you’re pregnant. Please consult your doctor first.
                </div>
              </details>
            </div>
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
