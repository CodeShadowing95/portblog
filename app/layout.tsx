import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Frank | Portfolio",
  description:
    "Portfolio de Patrick Namegni, développeur web full stack spécialisé en React, Next.js, TypeScript, Node.js et applications mobiles React Native. Création de sites web modernes, APIs, SaaS et applications performantes.",
    keywords: [
      "Patrick Namegni",
      "portfolio développeur web",
      "développeur full stack",
      "développeur React",
      "développeur Next.js",
      "développeur TypeScript",
      "développeur Node.js",
      "développeur React Native",
      "développeur JavaScript",
      "développeur frontend",
      "développeur backend",
      "création site web",
      "développement web",
      "développement mobile",
      "application React Native",
      "application web moderne",
      "API REST",
      "SaaS developer",
      "freelance développeur",
      "portfolio développeur React",
      "portfolio Next.js",
      "Tailwind CSS",
      "Symfony developer",
      "Twilio integration",
      "web developer France",
      "développeur Lyon",
      "Next.js portfolio",
      "React portfolio",
      "full stack engineer",
      "software developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", montserrat.variable, "font-sans")}
    >
      <body className="relative flex min-h-screen flex-col">
        <div
          className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/images/banner.png)" }}
        />
        <div className="fixed inset-0 -z-10 bg-black/30" />

        <Navbar />

        <div className="flex flex-1 flex-col px-6 pb-10 pt-28 z-10 text-white">
          {children}
        </div>
      </body>
    </html>
  );
}
