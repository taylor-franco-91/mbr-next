"use client";
import { useEffect } from "react";

export default function HashUnlocker() {
    useEffect(() => {
        if (typeof window === "undefined") return;

        let unlocked = false;
        try {
            unlocked = localStorage.getItem("mbr_unlocked") === "1";
        } catch { }

        // If you've clicked the CTA before (or landed on a hash), unlock scrolling
        if (unlocked || window.location.hash) {
            document.body.classList.remove("overflow-hidden");
        }

        // If a hash is present, clear it so future refreshes start clean
        if (window.location.hash) {
            try {
                const url = window.location.pathname + window.location.search;
                window.history.replaceState(null, "", url);
            } catch { }
        }
    }, []);

    return null;
}
