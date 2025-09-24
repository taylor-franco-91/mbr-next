"use client";
import { useEffect } from "react";

export default function HashUnlocker() {
    useEffect(() => {
        if (typeof window === "undefined") return;
        if (window.location.hash) {
            // If someone landed/refreshed on a hash, unlock scroll
            document.body.classList.remove("overflow-hidden");

            // Optional: clear the hash so future refreshes start at top
            try {
                const url = window.location.pathname + window.location.search;
                window.history.replaceState(null, "", url);
            } catch { }
            // (No need to scroll; browser already jumped to the section once.)
        }
    }, []);

    return null;
}
