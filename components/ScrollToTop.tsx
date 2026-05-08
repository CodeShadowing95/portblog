'use client';

import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { ArrowUp } from 'lucide-react'

const ScrollToTop = () => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY;
            setHasScrolled(y > 140);

            const doc = document.documentElement;
            const max = Math.max(1, doc.scrollHeight - doc.clientHeight);
            setProgress(Math.min(1, Math.max(0, y / max)));
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        hasScrolled && (
            <div className="fixed bottom-6 right-6 z-120 flex items-center justify-center">
                <Button
                    type="button"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="relative h-12 w-12 rounded-2xl border border-white/20 bg-white/10 p-0 text-white shadow-lg backdrop-blur-md transition hover:bg-white/15 focus-visible:ring-2 focus-visible:ring-white/40"
                    aria-label="Remonter en haut"
                >
                    <svg
                        aria-hidden="true"
                        className="absolute inset-0 h-full w-full"
                        viewBox="0 0 48 48"
                    >
                        <circle
                            cx="24"
                            cy="24"
                            r="19"
                            fill="transparent"
                            stroke="rgba(255,255,255,0.18)"
                            strokeWidth="2"
                        />
                        <circle
                            cx="24"
                            cy="24"
                            r="19"
                            fill="transparent"
                            stroke="rgba(255,255,255,0.72)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray={2 * Math.PI * 19}
                            strokeDashoffset={(1 - progress) * (2 * Math.PI * 19)}
                            transform="rotate(-90 24 24)"
                        />
                    </svg>

                    <span className="relative grid h-12 w-12 place-items-center">
                        <ArrowUp size={22} />
                    </span>
                </Button>
            </div>
        )
    )
}

export default ScrollToTop
