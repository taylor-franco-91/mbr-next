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
                <li className="px-3 py-1 rounded-full border bg-white/80 backdrop-blur text-emerald-800">Healing guarantee</li>
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
                  <span className="font-semibold text-emerald-700">“Do I need to workout During the reset?”</span>
                  <span className="ml-4 grid h-7 w-7 place-items-center rounded-full bg-emerald-100 text-emerald-700 transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <div className="mt-3 text-gray-700 leading-relaxed">
                  No, I actually advise you not to workout so you dont get light headed or sick. Also you dont want to trigger your digestive system to tell you " I need to eat" because if you workout during the fast your body is going to want food to replenish the calories you just burned, so NO!
                </div>
              </details>

              {/* 8 */}
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

      <section id="testimonials" className="py-24 px-6 bg-gradient-to-br from-white to-emerald-50 text-center">
        <div className="max-w-6xl mx-auto">
          {/* header */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 text-emerald-800 px-3 py-1 text-xs font-semibold tracking-wide">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              What people say
            </div>
            <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-emerald-700">
              Lives Transformed by This Reset
            </h2>
            <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-400/60 to-lime-400/60" />
            <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Don’t just take my word for it. Hear from others who’ve experienced the power of fasting.
            </p>
          </div>

          {/* equal-height cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left items-stretch">
            {/* card 1 */}
            <figure className="group relative h-full">
              {/* subtle gradient frame */}
              <div aria-hidden className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-emerald-400/15 via-lime-400/15 to-emerald-400/15 opacity-0 group-hover:opacity-40 blur-sm transition" />
              <div className="relative h-full rounded-2xl border border-emerald-100 bg-white/80 backdrop-blur p-6 shadow
                        transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md">
                <div className="flex h-full flex-col">
                  <div className="text-emerald-600 text-2xl">“</div>
                  <blockquote className="mt-2 text-gray-800 italic">
                    Fasting is the key to living longer and healthier lives.
                  </blockquote>
                  <figcaption className="mt-auto pt-4 text-sm font-semibold text-emerald-700">
                    — Dr. Yoshinori Ohsumi, Nobel Prize Laureate
                  </figcaption>
                </div>
              </div>
            </figure>

            {/* card 2 */}
            <figure className="group relative h-full">
              <div aria-hidden className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-emerald-400/15 via-lime-400/15 to-emerald-400/15 opacity-0 group-hover:opacity-40 blur-sm transition" />
              <div className="relative h-full rounded-2xl border border-emerald-100 bg-white/80 backdrop-blur p-6 shadow
                        transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md">
                <div className="flex h-full flex-col">
                  <div className="text-emerald-600 text-2xl">“</div>
                  <blockquote className="mt-2 text-gray-800 italic">
                    And when you fast!
                  </blockquote>
                  <figcaption className="mt-auto pt-4 text-sm font-semibold text-emerald-700">
                    — Matthew 6
                  </figcaption>
                </div>
              </div>
            </figure>

            {/* card 3 */}
            <figure className="group relative h-full">
              <div aria-hidden className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-emerald-400/15 via-lime-400/15 to-emerald-400/15 opacity-0 group-hover:opacity-40 blur-sm transition" />
              <div className="relative h-full rounded-2xl border border-emerald-100 bg-white/80 backdrop-blur p-6 shadow
                        transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md">
                <div className="flex h-full flex-col">
                  <div className="text-emerald-600 text-2xl">“</div>
                  <blockquote className="mt-2 text-gray-800 italic">
                    Fasting can help protect us from aging, dementia, cancer, obesity, autoimmune problems—and more.
                  </blockquote>
                  <figcaption className="mt-auto pt-4 text-sm font-semibold text-emerald-700">
                    — Dr. Yoshinori Ohsumi
                  </figcaption>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>

      <section id="founder-note" className="py-16 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-700">
            A Note from Taylor
          </h2>
          <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-400/60 to-lime-400/60" />

          <figure className="mt-6 mx-auto max-w-2xl rounded-2xl border border-emerald-100 bg-white/80 backdrop-blur p-6 shadow">
            <div className="flex flex-col md:flex-row md:items-start md:gap-5 text-left">
              {/* Optional avatar — put a headshot at /public/taylor.jpg or remove this img */}
              <img
                src="/taylor.png"
                alt="Taylor Franco"
                className="h-16 w-16 rounded-full ring-1 ring-emerald-200 object-cover mb-4 md:mb-0"
              />
              <blockquote className="text-gray-800 italic leading-relaxed">
                “Fasting completely changed my life and the connection I have between mind and body.
                It taught me to eat for nourishment, not habit. This reset is the blueprint I wish
                I had years ago.”
              </blockquote>
            </div>
            <figcaption className="mt-4 text-sm font-semibold text-emerald-700 text-right">
              — Taylor Franco
            </figcaption>
          </figure>
        </div>
      </section>
      <section id="benefits" className="relative overflow-hidden py-24 px-6 bg-gradient-to-br from-lime-50 to-emerald-100 text-center">
        <div className="max-w-6xl mx-auto">
          {/* header */}
          <div className="text-center">

            <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-emerald-700">
              What You’ll Gain in Just 7 Days
            </h2>
            <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-400/60 to-lime-400/60" />
            <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl mx-auto">
              This isn’t just a cleanse — it’s a catalyst for a new you.
            </p>
          </div>

          {/* cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left items-stretch">
            {/* 1 */}
            <article className="group relative h-full">
              <div aria-hidden className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-emerald-400/20 via-lime-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-50 blur-sm transition" />
              <div className="relative h-full rounded-2xl border border-emerald-100 bg-white/80 backdrop-blur p-6 shadow transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md">
                <div className="flex h-full flex-col">
                  <span
                    aria-hidden
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200 text-emerald-700 text-sm"
                  >
                    ✓
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-emerald-700">Crystal-Clear Mind</h3>
                  <p className="mt-2 text-gray-700">
                    Break free from brain fog and unlock laser-sharp focus to conquer your goals.
                  </p>
                  <div className="mt-auto" />
                </div>
              </div>
            </article>

            {/* 2 */}
            <article className="group relative h-full">
              <div aria-hidden className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-emerald-400/20 via-lime-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-50 blur-sm transition" />
              <div className="relative h-full rounded-2xl border border-emerald-100 bg-white/80 backdrop-blur p-6 shadow transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md">
                <div className="flex h-full flex-col">
                  <span
                    aria-hidden
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200 text-emerald-700 text-sm"
                  >
                    ✓
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-emerald-700">Boundless Energy</h3>
                  <p className="mt-2 text-gray-700">
                    Feel a steady surge of vitality that powers you through your day with ease.
                  </p>
                  <div className="mt-auto" />
                </div>
              </div>
            </article>

            {/* 3 */}
            <article className="group relative h-full">
              <div aria-hidden className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-emerald-400/20 via-lime-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-50 blur-sm transition" />
              <div className="relative h-full rounded-2xl border border-emerald-100 bg-white/80 backdrop-blur p-6 shadow transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md">
                <div className="flex h-full flex-col">
                  <span
                    aria-hidden
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200 text-emerald-700 text-sm"
                  >
                    ✓
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-emerald-700">Lighter Body</h3>
                  <p className="mt-2 text-gray-700">
                    Shed excess weight and bloating, revealing a leaner, stronger you.
                  </p>
                  <div className="mt-auto" />
                </div>
              </div>
            </article>

            {/* 4 */}
            <article className="group relative h-full">
              <div aria-hidden className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-emerald-400/20 via-lime-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-50 blur-sm transition" />
              <div className="relative h-full rounded-2xl border border-emerald-100 bg-white/80 backdrop-blur p-6 shadow transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md">
                <div className="flex h-full flex-col">
                  <span
                    aria-hidden
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200 text-emerald-700 text-sm"
                  >
                    ✓
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-emerald-700">Inner Peace</h3>
                  <p className="mt-2 text-gray-700">
                    Reconnect with your purpose and find calm amidst life’s chaos.
                  </p>
                  <div className="mt-auto" />
                </div>
              </div>
            </article>

            {/* 5 */}
            <article className="group relative h-full">
              <div aria-hidden className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-emerald-400/20 via-lime-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-50 blur-sm transition" />
              <div className="relative h-full rounded-2xl border border-emerald-100 bg-white/80 backdrop-blur p-6 shadow transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md">
                <div className="flex h-full flex-col">
                  <span
                    aria-hidden
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200 text-emerald-700 text-sm"
                  >
                    ✓
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-emerald-700">True Healing</h3>
                  <p className="mt-2 text-gray-700">
                    Begin to heal the body from within from many illnesses, ahces, pains, etc.
                  </p>
                  <div className="mt-auto" />
                </div>
              </div>
            </article>

            {/* 6 */}
            <article className="group relative h-full">
              <div aria-hidden className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-emerald-400/20 via-lime-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-50 blur-sm transition" />
              <div className="relative h-full rounded-2xl border border-emerald-100 bg-white/80 backdrop-blur p-6 shadow transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md">
                <div className="flex h-full flex-col">
                  <span
                    aria-hidden
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200 text-emerald-700 text-sm"
                  >
                    ✓
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-emerald-700">New Lifestyle</h3>
                  <p className="mt-2 text-gray-700">
                    Build habits you love, and a body you’re proud of.
                  </p>
                  <div className="mt-auto" />
                </div>
              </div>
            </article>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="#purchase"
              className="inline-flex items-center justify-center rounded-xl px-6 py-4 text-base font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-transform hover:scale-[1.02] active:scale-[.98]"
            >
              ✨ WOW! I Need These Benefits!
            </a>
          </div>
        </div>
      </section>
      <section id="purchase" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* header */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100/80 text-emerald-800 px-3 py-1 text-xs font-semibold tracking-wide">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Instant access • One-time payment
            </div>
            <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-emerald-800">
              Your Healing Starts Now
            </h2>
            <p className="mt-3 text-lg md:text-xl text-emerald-900">
              In just 7 days, your body ignites with radiant health. Start today.
            </p>
            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-emerald-400/60 to-lime-400/60" />
          </div>

          {/* content */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* left: product visual */}
            <div className="relative">
              {/* subtle gradient halo */}
              <div aria-hidden className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-emerald-300/10 via-lime-300/10 to-emerald-300/10 blur-md" />
              <div className="relative rounded-3xl border border-emerald-100 bg-white/80 backdrop-blur p-6 shadow">
                <img
                  src="/ebook-cover.png"  /* put your cover in /public/ebook-cover.png */
                  alt="7-Day Mind-Body Reset eBook preview"
                  className="w-full h-auto rounded-2xl ring-1 ring-emerald-200 shadow-md"
                />
                <p className="mt-4 text-sm text-gray-600 italic text-center">
                  Instant download • 60 pages of step-by-step guidance
                </p>
              </div>
            </div>

            {/* right: pricing + value stack */}
            <div className="relative">
              <div className="rounded-3xl border border-emerald-100 bg-white/90 backdrop-blur p-6 md:p-8 shadow">

                {/* price band */}
                <div className="flex items-end gap-3">
                  <div className="text-3xl font-extrabold text-emerald-700">
                    $26
                  </div>
                  <div className="text-sm text-gray-500">
                    <span className="line-through">$53</span> • limited time
                  </div>
                </div>

                {/* value bullets */}
                <div className="mt-5 space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200 text-emerald-700 text-xs">✓</span>
                    <p className="text-gray-800">Daily fasting breakdowns: what to expect and how to thrive</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200 text-emerald-700 text-xs">✓</span>
                    <p className="text-gray-800">Natural tips for hunger, energy & mindset (no gimmicks)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200 text-emerald-700 text-xs">✓</span>
                    <p className="text-gray-800">Simple supportive recipes to aid detox</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200 text-emerald-700 text-xs">✓</span>
                    <p className="text-gray-800">Mindset affirmations to stay aligned and consistent</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200 text-emerald-700 text-xs">✓</span>
                    <p className="text-gray-800"><span className="font-semibold">Bonus:</span>Save THOUSANDS on future health costs</p>
                  </div>
                </div>

                {/* CTA */}
                {/* value headline (bridge to CTA) */}
                <h3 className="mt-5 mb-2 text-base md:text-lg text-emerald-900 tracking-tight text-left">
                  <span className="font-extrabold text-emerald-800">Your one-time ticket to a healthier you</span>
                  <span className="font-normal">, pass this wisdom down for generations!</span>
                </h3>

                <div className="mt-6">
                  <a
                    href="https://buy.stripe.com/test_dRm6oH2L3egh2Hf6hQgrS00"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-semibold
             bg-amber-500 hover:bg-amber-600 text-white shadow-md hover:shadow-lg
             ring-1 ring-amber-300/40 focus:outline-none focus:ring-4 focus:ring-amber-200
             transition-transform hover:scale-[1.02] active:scale-[.98]"
                  >
                    <span>Buy Now &amp; Change Your Life</span>
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 animate-[arrow-wiggle_1.1s_ease-in-out_infinite] motion-reduce:animate-none"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M13 5l7 7-7 7" />
                    </svg>
                  </a>

                  <p className="mt-2 text-center text-xs text-gray-500">
                    One-time purchase • Tax where applicable
                  </p>
                </div>

                {/* guarantee */}
                <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50/60 p-4">
                  <p className="text-sm text-emerald-900">
                    <span className="font-semibold">Get Ready For An Amazing Transformation!</span> 100% Healing Guaranteed! Just Follow The Blueprint
                  </p>
                </div>

                {/* trust row */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-gray-600">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-3 py-1 ring-1 ring-gray-200">
                    🔒 Secure checkout
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-3 py-1 ring-1 ring-gray-200">
                    💳 Powered by Stripe
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-3 py-1 ring-1 ring-gray-200">
                    ⚡ Instant delivery
                  </span>
                </div>

                {/* help link */}
                <p className="mt-4 text-center text-sm text-gray-600">
                  Questions? <a href="#objections" className="text-emerald-700 hover:underline">See FAQ</a>
                </p>
              </div> {/* end pricing card */}
            </div> {/* end right column */}
          </div> {/* end grid */}
        </div> {/* end container */}
      </section>

    </main>
  );
}
