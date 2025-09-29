"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function UpsellPage() {
    const [progress, setProgress] = useState(0);       // 0–100
    const [revealed, setRevealed] = useState(false);   // show upsell card
    const playerRef = useRef(null);
    const intervalRef = useRef(null);

    useEffect(() => {
        // Load YouTube IFrame API if not present
        function loadYT() {
            const s = document.createElement("script");
            s.src = "https://www.youtube.com/iframe_api";
            document.body.appendChild(s);
        }

        function createPlayer() {
            if (!window.YT || !window.YT.Player) return; // wait for API

            playerRef.current = new window.YT.Player("yt-player", {
                videoId: "QSKOwx6qbQk", // your upsell video
                playerVars: { rel: 0, modestbranding: 1 },
                events: {
                    onReady: onPlayerReady,
                    onStateChange: onPlayerStateChange,
                },
            });
        }

        function onPlayerReady() {
            // Poll currentTime/duration to update progress and reveal 10s before end
            intervalRef.current = window.setInterval(() => {
                try {
                    const p = playerRef.current;
                    if (!p || typeof p.getDuration !== "function") return;
                    const dur = p.getDuration() || 0;
                    const cur = p.getCurrentTime() || 0;

                    if (dur > 0) {
                        const pct = Math.max(0, Math.min(100, (cur / dur) * 100));
                        setProgress(pct);
                        if (!revealed && dur - cur <= 10) {
                            setRevealed(true);
                        }
                    }
                } catch {
                    // ignore polling errors
                }
            }, 500);
        }

        function onPlayerStateChange(e) {
            if (e?.data === window.YT?.PlayerState?.ENDED) {
                setRevealed(true);
                setProgress(100);
            }
        }

        // Bootstrap the API (it calls global onYouTubeIframeAPIReady when loaded)
        // We attach a handler safely without leaking globals.
        const prev = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = function () {
            createPlayer();
            if (typeof prev === "function") prev();
        };

        if (!window.YT || !window.YT.Player) loadYT();
        else createPlayer();

        // Fallback: if API never loads, reveal after 2 minutes anyway
        const fallback = setTimeout(() => setRevealed(true), 120000);

        return () => {
            clearTimeout(fallback);
            if (intervalRef.current) clearInterval(intervalRef.current);
            window.onYouTubeIframeAPIReady = prev || undefined;
            try {
                playerRef.current?.destroy?.();
            } catch { }
        };
    }, [revealed]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-white py-20 px-6 text-center">
            {/* progress bar */}
            <div className="w-full max-w-4xl mx-auto bg-gray-200 h-2 rounded-full mb-8 overflow-hidden">
                <div
                    className="h-2 bg-gradient-to-r from-emerald-500 to-emerald-200 transition-[width] duration-300"
                    style={{ width: `${progress}%` }}
                    aria-hidden
                />
            </div>

            {/* headline */}
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                <span className="text-red-600">WAIT!</span>{" "}
                <span className="text-emerald-700">Your Order Isn’t Complete Yet…</span>
            </h2>

            {/* subhead */}
            <h3 className="text-2xl font-bold text-emerald-700 mb-6">Watch Now</h3>

            {/* video created by YT API */}
            <div className="max-w-3xl mx-auto mb-8 rounded-xl overflow-hidden shadow-xl">
                <div id="yt-player" className="w-full aspect-video" />
            </div>

            {/* upsell card */}
            <div
                id="upsell"
                className={`${revealed ? "block" : "hidden"
                    } max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-2xl border border-emerald-200`}
            >
                <p className="text-lg text-gray-800 mb-4">
                    You’re on the brink of elite health—don’t stop now! Accelerate your transformation
                    in the next 12 weeks with personalized 1:1 coaching tailored just for you.
                </p>
                <p className="text-emerald-700 font-semibold mb-6">
                    Spots are limited—secure your call NOW and elevate your health to the next level!
                </p>

                <a
                    href="https://calendly.com/taylor-franco91/30min"
                    className="inline-flex items-center justify-center rounded-full px-6 py-3 font-bold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg hover:scale-[1.02] transition"
                >
                    Book Your FREE Coaching Call Now
                </a>

                <div className="mt-3">
                    <Link href="/" className="text-sm text-gray-500 italic hover:underline">
                        Nah, I’ve got this on my own…
                    </Link>
                </div>
            </div>
        </div>
    );
}
