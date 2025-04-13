"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { FlipWords } from "./ui/flip-words";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function HeroSectionOne() {
    const words = ["India", "भारत", "Hindustan"];
    const title = "Thodibaat pe, har baat apno ke saath";
  
    return (
        <>
        <div className="bg-yellow-500">

        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-6 md:px-12">
            <Navbar />
            
            
            
            {/* Content Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between w-full mt-10">
                {/* Left Section - Text */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
                    <h1 className="relative z-10 text-2xl font-bold text-black md:text-5xl lg:text-6xl">
                        <TextGenerateEffect words={title} />
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.8 }}
                        className="relative z-10 py-4 text-lg font-normal text-neutral-500"
                        >
                        An app <b className="text-black opacity-75">Proudly Made in {<FlipWords words={words} />}</b>, designed for India by Indians, showcasing
                        local talent and innovation, promoting self-reliance, and celebrating
                        Indian digital craftsmanship.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 1 }}
                        className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
                        >
                        <button className="w-60 transform rounded-lg cursor-pointer bg-blue-500 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700">
                            Join the Waitlist
                        </button>
                        <button className="w-60 transform rounded-lg border border-gray-300 cursor-pointer bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100">
                            Know More
                        </button>
                    </motion.div>
                </div>
                
                {/* Right Section - Mobile Screenshot */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="relative mt-10 w-full max-w-xs lg:mt-28 lg:max-w-sm"
                    >
                    <div className="w-full overflow-hidden rounded-xl border border-b-12 border-8 border-gray-800 shadow-lg">
                        <Image
                            src="/phone.jpeg"
                            alt="Landing page preview"
                            className="aspect-[9/18.5] h-auto w-full object-cover"
                            height={1000}
                            width={1000}
                            />
                    </div>
                </motion.div>
            </div>
        </div>
        </>
    );
}

// Navbar Component
const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 backdrop-blur-lg">
            <div className="flex items-center gap-3">
                <Image src="/Thodibaat_logo1.webp" alt="Logo" height={50} width={80} />
                <h1 className="text-lg font-bold md:text-2xl"></h1>
            </div>
            <div className="flex items-center gap-4">
                <Link href="#" className="w-20 transform font-medium text-black transition-all duration-300 hover:-translate-y-0.5">
                    Features
                </Link>
                <Link href="#" className="w-12 transform font-medium text-black transition-all duration-300 hover:-translate-y-0.5">
                    FAQ
                </Link>
                <button className="w-24 transform rounded-lg cursor-pointer bg-blue-500 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 md:w-32">
                    Join now
                </button>
            </div>
        </nav>
    );
};
