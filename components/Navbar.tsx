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
        <nav className={`fixed left-1/2 top-6 z-[100] w-[min(92vw,920px)] -translate-x-1/2 rounded-2xl border border-white/20 px-4 py-3 shadow-lg backdrop-blur-md transition-colors duration-300 ${isScrolled ? "bg-[#fdfdfe]/50" : " bg-white/10"}`}>
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
                    <Link href="/portfolio" className="transition hover:text-white">
                        Portfolio
                    </Link>
                    <Link href="/contact" className="transition hover:text-white">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar
