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
    const revealedRef = useRef(false); // track reveal without using state in deps

    // Inject Calendly CSS (same as the <link> in the snippet)
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

    // Button → Calendly popup
    const openCalendly = () => {
        if (typeof window !== "undefined" && window.Calendly) {
            window.Calendly.initPopupWidget({ url: CAL_URL });
        } else {
            window.open(CAL_URL, "_blank", "noopener,noreferrer");
        }
    };

    // Listen for Calendly completion → redirect
    useEffect(() => {
        function onCalendlyMessage(e) {
            if (e?.data?.event === "calendly.event_scheduled") {
                window.location.href = "/thank-you-book-call";
            }
        }
        window.addEventListener("message", onCalendlyMessage);
        return () => window.removeEventListener("message", onCalendlyMessage);
    }, []);

    // YouTube progress + reveal — runs ONCE
    useEffect(() => {
        function loadYT() {
            const s = document.createElement("script");
            s.src = "https://www.youtube.com/iframe_api";
            document.body.appendChild(s);
        }

        function createPlayer() {
            if (!window.YT || !window.YT.Player) return;
            playerRef.current = new window.YT.Player("yt-player", {
                videoId: "QSKOwx6qbQk",
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

                        // Reveal CTA ~12s before end, but only once
                        if (!revealedRef.current && dur - cur <= 12) {
                            revealedRef.current = true;
                            setRevealed(true);
                        }
                    }
                } catch {
                    /* ignore */
                }
            }, 500);
        }

        function onStateChange(e) {
            if (e?.data === window.YT?.PlayerState?.ENDED) {
                revealedRef.current = true;
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

        // Fallback: reveal after 2 minutes even if API fails
        const fallback = setTimeout(() => {
            revealedRef.current = true;
            setRevealed(true);
        }, 120000);

        return () => {
            clearTimeout(fallback);
            if (intervalRef.current) clearInterval(intervalRef.current);
            window.onYouTubeIframeAPIReady = prev || undefined;
            try {
                playerRef.current?.destroy?.();
            } catch { }
        };
    }, []); // ← stays constant; no dependency flip

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-white py-20 px-6 text-center">
            {/* Calendly widget.js */}
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

            {/* video */}
            <div className="max-w-3xl mx-auto mb-8 rounded-xl overflow-hidden shadow-xl">
                <div id="yt-player" className="w-full aspect-video" />
            </div>

            {/* CTA area with reserved space (no layout jump) */}
            <div className="max-w-3xl mx-auto mt-8">
                <div
                    className={`min-h-[260px] transition-all duration-500 ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                        }`}
                    aria-live="polite"
                >
                    {revealed ? (
                        <div className="bg-white p-6 rounded-2xl shadow-2xl border border-emerald-200">
                            <p className="text-lg text-gray-800 mb-4">
                                You’re on the brink of elite health—don’t stop now! Accelerate your transformation
                                in the next 12 weeks with personalized 1:1 coaching tailored just for you.
                            </p>
                            <p className="text-emerald-700 font-semibold mb-6">
                                Spots are limited—secure your call NOW and elevate your health to the next level!
                            </p>

                            <button
                                type="button"
                                onClick={openCalendly}
                                className="inline-flex items-center justify-center rounded-full px-6 py-3 font-bold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg hover:scale-[1.02] transition"
                            >
                                Book Your FREE Strategy Call Now →
                            </button>

                            <div className="mt-3">
                                <Link href="/" className="text-sm text-gray-500 italic hover:underline">
                                    Nah, I’ve got this on my own…
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div aria-hidden className="min-h-[260px]" />
                    )}
                </div>
            </div>
        </div>
    );
}
