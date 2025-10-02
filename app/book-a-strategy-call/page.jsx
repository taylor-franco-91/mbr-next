"use client";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const CAL_URL = "https://calendly.com/taylor-franco91/30min";

export default function StrategyCallPage() {
    const [progress, setProgress] = useState(0);
    const [revealed, setRevealed] = useState(false);
    const playerRef = useRef(null);
    const intervalRef = useRef(null);

    // Calendly CSS (same as their <link> tag)
    useEffect(() => {
        const id = "calendly-widget-css";
        if (!document.getElementById(id)) {
            const link = document.createElement("link");
            link.id = id;
            link.rel = "stylesheet";
            link.href = "https://assets.calendly.com/assets/external/widget.css";
            document.head.appendChild(link);
        }
    }, []);

    // Open Calendly popup (unchanged behavior)
    const openCalendly = () => {
        if (typeof window !== "undefined" && window.Calendly) {
            window.Calendly.initPopupWidget({ url: CAL_URL });
        } else {
            window.open(CAL_URL, "_blank", "noopener,noreferrer");
        }
    };

    // Redirect after a booking (correct path)
    useEffect(() => {
        function onCalendlyMessage(e) {
            if (e?.data?.event === "calendly.event_scheduled") {
                window.location.href = "/thank-you-call-booked";
            }
        }
        window.addEventListener("message", onCalendlyMessage);
        return () => window.removeEventListener("message", onCalendlyMessage);
    }, []);

    // YouTube init + progress polling (no dependency changes, no reflow)
    useEffect(() => {
        function loadYT() {
            const s = document.createElement("script");
            s.src = "https://www.youtube.com/iframe_api";
            document.body.appendChild(s);
        }
        function createPlayer() {
            if (!window.YT || !window.YT.Player) return;
            playerRef.current = new window.YT.Player("yt-player", {
                videoId: "QSKOwx6qbQk", // your video
                playerVars: { rel: 0, modestbranding: 1 },
                events: { onReady, onStateChange },
            });
        }
        function onReady() {
            intervalRef.current = window.setInterval(() => {
                try {
                    const p = playerRef.current;
                    if (!p || typeof p.getDuration !== "function") return;
                    const dur = p.getDuration() || 0;
                    const cur = p.getCurrentTime() || 0;
                    if (dur > 0) {
                        const pct = Math.max(0, Math.min(100, (cur / dur) * 100));
                        setProgress(pct);
                        // Reveal ~12s before the end (no layout shift)
                        if (dur - cur <= 12) setRevealed(true);
                    }
                } catch {/* ignore */ }
            }, 500);
        }
        function onStateChange(e) {
            if (e?.data === window.YT?.PlayerState?.ENDED) {
                setRevealed(true);
                setProgress(100);
            }
        }

        const prev = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = function () {
            createPlayer();
            if (typeof prev === "function") prev();
        };

        if (!window.YT || !window.YT.Player) loadYT();
        else createPlayer();

        const fallback = setTimeout(() => setRevealed(true), 120000);

        return () => {
            clearTimeout(fallback);
            if (intervalRef.current) clearInterval(intervalRef.current);
            window.onYouTubeIframeAPIReady = prev || undefined;
            try { playerRef.current?.destroy?.(); } catch { }
        };
    }, []); // ← fixed, stable deps (no warnings)

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-white py-20 px-6 text-center">
            {/* Calendly script (kept exactly like your working setup) */}
            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="afterInteractive"
            />

            {/* progress bar */}
            <div className="w-full max-w-4xl mx-auto bg-gray-200 h-2 rounded-full mb-8 overflow-hidden">
                <div
                    className="h-2 bg-gradient-to-r from-emerald-500 to-emerald-200 transition-[width] duration-300"
                    style={{ width: `${progress}%` }}
                    aria-hidden
                />
            </div>

            {/* headline */}
            <h2 className="text-4xl md:text-5xl font-extrabold mb-2">
                <span className="text-red-600">Want Personal help?</span>{" "}
                <span className="text-emerald-700">Grab your FREE 1:1 Strategy Call.</span>
            </h2>

            {/* subhead */}
            <h3 className="text-lg md:text-xl text-emerald-800 font-semibold mb-6">
                Watch the video below if you’re serious about your results!
            </h3>

            {/* video (stable; never remounts) */}
            <div className="max-w-3xl mx-auto mb-8 rounded-xl overflow-hidden shadow-xl">
                <div id="yt-player" className="w-full aspect-video" />
            </div>

            {/* Bottom-sheet CTA: overlays at the bottom; no layout shift */}
            <div
                className={`pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center transition-opacity duration-500 ${revealed ? "opacity-100" : "opacity-0"
                    }`}
                aria-live="polite"
            >
                <div className="pointer-events-auto max-w-3xl w-[92%] sm:w-auto bg-white p-6 rounded-2xl shadow-2xl border border-emerald-200">
                    <p className="text-lg text-gray-800 mb-2">
                        You’re on the brink of elite health—don’t stop now! Accelerate your transformation
                        in the next 12 weeks with personalized 1:1 coaching tailored just for you.
                    </p>
                    <p className="text-emerald-700 font-semibold mb-4">
                        Spots are limited—secure your call NOW and elevate your health to the next level!
                    </p>
                    <button
                        type="button"
                        onClick={openCalendly}
                        className="inline-flex items-center justify-center rounded-full px-6 py-3 font-bold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg hover:scale-[1.02] transition"
                    >
                        Book Your FREE Strategy Call Now →
                    </button>
                    <div className="mt-3 text-center">
                        <Link href="/" className="text-sm text-gray-500 italic hover:underline">
                            Nah, I’ve got this on my own…
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
