"use client";
import Link from "next/link";

export default function Hero({
    title,
    subtitle,
    ctaLabel,
    ctaHref,
    subtitleClassName = "",   // ← add this
}) {

    function handleUnlock() {
        // remove the global scroll lock we added on <body>
        const b = typeof document !== "undefined" ? document.body : null;
        if (b) b.classList.remove("overflow-hidden");
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
                        <Link
                            href={ctaHref}
                            onClick={handleUnlock}
                            className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-sm font-semibold bg-orange-500 hover:bg-orange-600 text-white hover:opacity-90 active:scale-[.98]"
                        >
                            {ctaLabel}
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
