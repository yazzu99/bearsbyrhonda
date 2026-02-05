"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "How It Works", href: "/#process" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/80 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-2">
                        <span className="text-2xl">🧸</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-serif text-xl font-bold tracking-wide text-primary">
                            BEARS by Rhonda
                        </span>
                        <span className="text-xs uppercase tracking-[0.2em] text-secondary">
                            Handcrafted Memories
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex md:items-center md:gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/order"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 hover:bg-primary/90"
                    >
                        Start Your Order
                        <ShoppingBag className="h-4 w-4" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-b border-primary/10 bg-background md:hidden"
                    >
                        <div className="space-y-4 p-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-lg font-medium text-foreground hover:text-primary"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Link
                                    href="/order"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full rounded-full bg-primary px-4 py-3 text-center text-base font-semibold text-primary-foreground"
                                >
                                    Start Your Order
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
