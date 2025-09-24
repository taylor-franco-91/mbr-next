"use client";
import { useRef, useState, useEffect } from "react";

export default function BeforeAfter({
    beforeSrc,
    afterSrc,
    beforeLabel = "Before",
    afterLabel = "After",
    initial = 50,       // starting reveal percentage
    className = "",     // sizing/aspect from the page
}) {
    const [pos, setPos] = useState(initial);
    const boxRef = useRef(null);
    const dragging = useRef(false);

    function setFromClientX(clientX) {
        const el = boxRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
        setPos(Math.round((x / rect.width) * 100));
    }

    function onDown(e) {
        dragging.current = true;
        const x = "touches" in e ? e.touches[0].clientX : e.clientX;
        setFromClientX(x);
    }

    function onMove(e) {
        if (!dragging.current) return;
        const x = "touches" in e ? e.touches[0].clientX : e.clientX;
        setFromClientX(x);
    }

    useEffect(() => {
        const up = () => {
            dragging.current = false;
        };
        window.addEventListener("mouseup", up);
        window.addEventListener("touchend", up);
        return () => {
            window.removeEventListener("mouseup", up);
            window.removeEventListener("touchend", up);
        };
    }, []);

    return (
        <div
            ref={boxRef}
            className={`relative select-none overflow-hidden rounded-3xl border bg-black/5 ${className}`}
            onMouseDown={onDown}
            onMouseMove={onMove}
            onTouchStart={onDown}
            onTouchMove={onMove}
            role="region"
            aria-label="Before and after image comparison slider"
        >
            {/* Base: AFTER image */}
            <img
                src={afterSrc}
                alt={`${afterLabel} photo`}
                className="block w-full h-full object-cover"
            />

            {/* Overlay: BEFORE image clipped to current position */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${pos}%` }}
                aria-hidden
            >
                <img
                    src={beforeSrc}
                    alt=""
                    className="block w-full h-full object-cover"
                />
            </div>

            {/* Handle line + knob */}
            <div
                className="absolute top-0 bottom-0"
                style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
                aria-hidden
            >
                <div className="h-full w-[2px] bg-white/80 shadow-[0_0_0_1px_rgba(0,0,0,.15)]" />
                <div className="absolute top-1/2 -translate-y-1/2 -left-5 w-10 h-10 rounded-full bg-white shadow-lg border flex items-center justify-center text-emerald-600">
                    ↔
                </div>
            </div>

            {/* Corner labels — Before on left, After on right, fade based on reveal */}
            <div
                className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/50 text-white text-xs px-2 py-1 transition-opacity duration-150 ease-out"
                style={{ opacity: pos / 100 }}
            >
                {beforeLabel}
            </div>
            <div
                className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/50 text-white text-xs px-2 py-1 transition-opacity duration-150 ease-out"
                style={{ opacity: 1 - pos / 100 }}
            >
                {afterLabel}
            </div>
        </div>
    );
}


