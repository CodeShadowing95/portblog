'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed left-1/2 top-6 z-100 w-[min(92vw,920px)] -translate-x-1/2 rounded-2xl border border-white/20 px-4 py-3 shadow-lg backdrop-blur-md transition-colors duration-300 ${isScrolled ? "bg-[#fdfdfe]/50" : " bg-white/10"}`}>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                <Link
                    href="/"
                    className={`flex items-center gap-3 font-semibold tracking-wide ${isScrolled ? "text-slate-700" : " text-white"}`}
                >
                    <Image
                        src="/images/logo2.png"
                        alt="Logo"
                        width={52}
                        height={52}
                        priority
                        className="h-10 w-10 object-contain sm:h-12 sm:w-12"
                    />
                    <span className="text-base sm:text-lg">Portfolio</span>
                </Link>

                <div className="h-6 w-px bg-white/20 max-sm:hidden" />

                <div className={`flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm font-medium ${isScrolled ? "text-slate-700/90" : "text-white/90"}`}>
                    <Link href="/about" className="transition hover:text-white">
                        Mon profil
                    </Link>
                    <Link href="/cv" className="transition hover:text-white">
                        CV
                    </Link>
                    <Link href="/services" className="transition hover:text-white">
                        Services
                    </Link>
                    <Link href="/portfolio" className="transition hover:text-white">
                        Projets
                    </Link>
                    <Link href="/blog" className="transition hover:text-white">
                        Blog
                    </Link>
                    <Link href="/contact" className="transition hover:text-white">
                        Contact
                    </Link>
                </div>

                <div className="h-6 w-px bg-white/20 max-sm:hidden" />
                <div className="flex items-center gap-3">
                    <a
                        href="https://www.linkedin.com/in/frank-patrick-namegni/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition ${isScrolled ? "border-slate-200/80 text-slate-700 hover:bg-slate-100" : "border-white/20 text-white hover:bg-white/10"}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="h-5 w-5" viewBox="0 0 24 24"><path fill="currentColor" d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm-9 8a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1m6 0a3 3 0 0 0-1.168.236l-.125.057A1 1 0 0 0 11 11v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0-3-3M8 7a1 1 0 0 0-.993.883L7 8.01a1 1 0 0 0 1.993.117L9 8a1 1 0 0 0-1-1"/></svg>
                    </a>

                    <a
                        href="https://github.com/CodeShadowing95/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition ${isScrolled ? "border-slate-200/80 text-slate-700 hover:bg-slate-100" : "border-white/20 text-white hover:bg-white/10"}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="h-5 w-5" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"/></svg>
                    </a>

                    <a
                        href="https://facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Facebook"
                        className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition ${isScrolled ? "border-slate-200/80 text-slate-700 hover:bg-slate-100" : "border-white/20 text-white hover:bg-white/10"}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="h-5 w-5" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2z"/></svg>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar
