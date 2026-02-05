import Link from "next/link";
import { ArrowRight, Scissors, Heart, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden bg-primary px-4 py-24 text-center text-primary-foreground sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('/hero-pattern.png')] opacity-10 mix-blend-overlay"></div>
        <div className="relative z-10 mx-auto max-w-4xl space-y-8">
          <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
            Memories You Can Hold
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-primary-foreground/90 sm:text-xl">
            We transform your cherished clothing—grandma’s coat, dad’s flannel, or your wedding dress—into
            handcrafted heirloom teddy bears that last a lifetime.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/order"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-bold text-primary transition-all hover:bg-white hover:text-accent-foreground"
            >
              Start Your Custom Order
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-primary-foreground/20 px-8 py-4 text-lg font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/5 text-primary">
              <Scissors className="h-8 w-8" />
            </div>
            <h3 className="mb-3 font-serif text-2xl font-bold text-foreground">Handcrafted with Care</h3>
            <p className="text-secondary-foreground/80">
              Every stitch is placed by hand with precision. No mass production—just one artist honoring your memories.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/5 text-primary">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="mb-3 font-serif text-2xl font-bold text-foreground">Personal Connection</h3>
            <p className="text-secondary-foreground/80">
              We understand the story behind the fabric. Treated with the utmost respect from arrival to return.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/5 text-primary">
              <Truck className="h-8 w-8" />
            </div>
            <h3 className="mb-3 font-serif text-2xl font-bold text-foreground">Sympathetic Logistics</h3>
            <p className="text-secondary-foreground/80">
              Our "Concierge" process guides you on how to pack and ship your items safely, removing the stress.
            </p>
          </div>
        </div>
      </section>

      {/* Feature / Process Teaser */}
      <section className="bg-secondary/5 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-primary">How It Works</h2>
            <p className="text-lg text-secondary-foreground">From your closet to your arms in 3 simple steps.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Step 1 */}
            <div className="relative rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="absolute -top-6 left-8 text-6xl font-black text-primary/10">1</div>
              <h3 className="mb-2 text-xl font-bold text-foreground">Select Your Bear</h3>
              <p className="text-sm text-secondary-foreground/80">Choose the size and style that fits your vision.</p>
            </div>
            {/* Step 2 */}
            <div className="relative rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="absolute -top-6 left-8 text-6xl font-black text-primary/10">2</div>
              <h3 className="mb-2 text-xl font-bold text-foreground">Tell the Story</h3>
              <p className="text-sm text-secondary-foreground/80">Share special details and submit your order.</p>
            </div>
            {/* Step 3 */}
            <div className="relative rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="absolute -top-6 left-8 text-6xl font-black text-primary/10">3</div>
              <h3 className="mb-2 text-xl font-bold text-foreground">Send Your Items</h3>
              <p className="text-sm text-secondary-foreground/80">Receive a custom shipping label and instructions.</p>
            </div>
            {/* Step 4 */}
            <div className="relative rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="absolute -top-6 left-8 text-6xl font-black text-primary/10">4</div>
              <h3 className="mb-2 text-xl font-bold text-foreground">Receive Your Bear</h3>
              <p className="text-sm text-secondary-foreground/80">We ship your custom creation back to you.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
