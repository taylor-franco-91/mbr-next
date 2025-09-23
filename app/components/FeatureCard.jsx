export default function FeatureCard({ icon = "✨", title, copy }) {
    return (
        <div className="rounded-2xl border p-5 text-left">
            <div className="text-3xl">{icon}</div>
            <h3 className="mt-3 text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-gray-600">{copy}</p>
        </div>
    );
}
