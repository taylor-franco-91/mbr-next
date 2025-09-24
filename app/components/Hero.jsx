"use client";
// (no Link import needed)

export default function Hero({
    title,
    subtitle,
    ctaLabel,
    ctaHref,              // keep as a fallback href
    subtitleClassName = "",
}) {
    function handleUnlockAndScroll(e) {
        e.preventDefault();

        // mark as unlocked for future loads
        try { localStorage.setItem("mbr_unlocked", "1"); } catch { }

        // unlock now
        document.body.classList.remove("overflow-hidden");

        // smooth scroll to epiphany
        const el = document.getElementById("epiphany");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <section
            id="top"
            className="min-h-[100vh] grid place-items-center text-center p-8 bg-gradient-to-br from-lime-100 to-emerald-200"
        >
            <div>
                <h1 className="text-5xl md:text-5xl font-extrabold text-emerald-900">{title}</h1>

                <p className={`mt-3 text-emerald-800 ${subtitleClassName || "text-xl md:text-2xl"}`}>
                    {subtitle}
                </p>

                {ctaLabel && ctaHref && (
                    <div className="mt-6">
                        {/* Use <a> with onClick handler so the URL doesn't keep the hash */}
                        <a
                            href={ctaHref} // fallback only; onClick prevents navigation
                            onClick={handleUnlockAndScroll}
                            className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-base font-semibold bg-orange-500 hover:bg-orange-600 text-white hover:opacity-90 active:scale-[.98]"
                        >
                            {ctaLabel}
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
}
