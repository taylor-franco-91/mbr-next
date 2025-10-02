import Link from "next/link";
import { CalendarCheck, Mail, CheckCircle2, Download, Home } from "lucide-react";

export const metadata = {
    title: "Call Booked — New Beginnings",
    description: "Your 1:1 call is confirmed. Download your ebook and get ready.",
};

export default function ThankYouCallPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white grid place-items-center px-6 py-20">
            <main className="w-full max-w-4xl">
                {/* progress bar (full) */}
                <div className="w-full bg-gray-200 h-2 rounded-full mb-8 overflow-hidden">
                    <div className="h-2 w-full bg-gradient-to-r from-emerald-500 to-emerald-200" aria-hidden />
                </div>

                {/* hero */}
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-700">
                        Your Call is Booked You’re In! 🎉
                    </h1>
                    <p className="mt-3 text-lg text-gray-700">
                        You just unlocked a 1:1 path to faster results. I’m excited to meet you and map your next 12 weeks.
                    </p>
                </div>

                {/* content cards */}
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                    {/* Next steps */}
                    <section className="rounded-2xl border bg-white/80 backdrop-blur p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-emerald-700">What happens next</h2>
                        <ul className="mt-3 space-y-3 text-gray-700">
                            <li className="flex gap-3">
                                <Mail className="h-5 w-5 text-emerald-600 shrink-0" />
                                <span>
                                    Check your email for the <strong>Calendly confirmation</strong> (time, link, and calendar invite).
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <CalendarCheck className="h-5 w-5 text-emerald-600 shrink-0" />
                                <span>
                                    <strong>Add it to your calendar</strong> so you don’t miss it. You can reschedule from the email anytime.
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                                <span>
                                    Bring your goals, a notebook , and a quiet space. We’ll make your next steps simple and doable so you can achieve the best version of yourself
                                </span>
                            </li>
                        </ul>

                        <div className="mt-5 flex flex-col sm:flex-row gap-3">
                            <a
                                href="https://calendly.com/taylor-franco91/30min"
                                className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold text-emerald-700 border border-emerald-300 bg-white hover:bg-emerald-50 shadow-sm transition"
                            >
                                Manage / Reschedule
                            </a>
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold text-gray-700 border border-gray-200 bg-white hover:bg-gray-50 shadow-sm transition"
                            >
                                <Home className="h-5 w-5" />
                                Back to Home
                            </Link>
                        </div>
                    </section>

                    {/* Ebook download */}
                    <section className="rounded-2xl border bg-white/80 backdrop-blur p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-emerald-700">Grab your ebook now</h2>
                        <p className="mt-2 text-gray-700">
                            Didn’t see the ebook email yet? Download it instantly and start Day&nbsp;1 today.
                        </p>

                        <a
                            href="https://www.dropbox.com/scl/fi/z0p97yoii0fzi4hiinbhu/New-Beginnings-Your-7-Day-Mind-Body-Rest.pdf?rlkey=fdu08q0xgqnqznadoe0qxq3ug&st=dqnt100l&dl=1"
                            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow transition"
                        >
                            <Download className="h-5 w-5" />
                            Download Ebook
                        </a>

                        <p className="mt-3 text-xs text-gray-500">
                            🔒 Direct download • Yours to keep forever
                        </p>
                    </section>
                </div>

                {/* small reassurance */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    Need help?{" "}
                    <a className="text-emerald-700 hover:underline" href="mailto:taylorfranco333@gmail.com">
                        Email me
                    </a>.
                </p>
            </main>
        </div>
    );
}
