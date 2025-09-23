export default function Hero({ title, subtitle, ctaLabel, ctaHref }) {
    return (
        <section className="min-h-[50vh] grid place-items-center text-center p-8">
            <div>
                <h1 className="text-4xl md:text-5xl font-extrabold">{title}</h1>
                <p className="mt-3 text-gray-600">{subtitle}</p>

                {ctaLabel && ctaHref && (
                    <div className="mt-6">
                        <a
                            href={ctaHref}
                            className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-emerald-600 text-white hover:opacity-90 active:scale-[.98]"
                        >
                            {ctaLabel}
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
}
