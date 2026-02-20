import Image from "next/image";
import Link from "next/link";
import { Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-primary/10 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex flex-col items-start gap-1">
                            <div className="relative h-10 w-24">
                                <Image
                                    src="/images/rhonda-logo.png"
                                    alt="BEARS by Rhonda Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-secondary/80">
                                Handcrafted Memories
                            </span>
                        </div>
                        <p className="max-w-xs text-sm text-secondary-foreground/80">
                            Founded in 2019. We create handcrafted teddy bears from your cherished clothing, turning memories into tangible hugs.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/BEARSbyRhonda"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary transition-colors hover:text-primary"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="mailto:rhondahicks12@yahoo.com"
                                className="text-secondary transition-colors hover:text-primary"
                                aria-label="Email"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                            Explore
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/about" className="text-secondary-foreground/80 hover:text-primary">
                                    Our Story
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="text-secondary-foreground/80 hover:text-primary">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/order" className="text-secondary-foreground/80 hover:text-primary">
                                    Start an Order
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-secondary-foreground/80 hover:text-primary">
                                    FAQ & Shipping
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                            Contact Us
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <Phone className="h-5 w-5 shrink-0 text-accent" />
                                <span className="text-secondary-foreground/80">(760) 799-4519</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="h-5 w-5 shrink-0 text-accent" />
                                <a
                                    href="mailto:rhondahicks12@yahoo.com"
                                    className="text-secondary-foreground/80 hover:text-primary hover:underline"
                                >
                                    rhondahicks12@yahoo.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 shrink-0 text-accent" />
                                <span className="text-secondary-foreground/80">
                                    Based in Kansas
                                    <br />
                                    <span className="text-xs text-muted-foreground">(Note: Shipping address provided after order)</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-primary/10 pt-8 text-center text-xs text-secondary-foreground/60">
                    <p>&copy; {new Date().getFullYear()} BEARS by Rhonda. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
