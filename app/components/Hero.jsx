export default function Hero({ title, subtitle }) {
    return (
        <section className="min-h-[50vh] grid place-items-center text-center p-8">
            <div>
                <h1 className="text-4xl md:text-5xl font-extrabold">{title}</h1>
                <p className="mt-3 text-gray-600">{subtitle}</p>
            </div>
        </section>
    );
}
