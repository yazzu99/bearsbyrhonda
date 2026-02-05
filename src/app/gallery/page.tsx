import { ExternalLink } from "lucide-react";

import Image from "next/image"; // Ensure Import

const galleryItems = [
    {
        id: 1,
        title: "The Sunday Ritual",
        category: "Sports Gear",
        src: "/images/chiefs_enhanced.png",
        story: "Made from his lucky game-day gear. For the fan who lived for touchdowns and never missed a kickoff."
    },
    {
        id: 2,
        title: "Little Miracles",
        category: "Baby Clothes",
        src: "/images/onsies_enhanced.png",
        story: "A patchwork of favorite onesies from that fleeting first year. A keepsake for how tiny they once were."
    },
    {
        id: 3,
        title: "The Survivor Bear",
        category: "Special Material",
        src: "/images/cancer_enhanced.png",
        story: "Crafted from fabrics worn during treatment. A beautiful symbol of strength, resilience, and hope."
    },
    {
        id: 4,
        title: "Bedtime Stories",
        category: "Flannel Pajamas",
        src: "/images/pajamas_enhanced.png",
        story: "Sewn from cozy flannel pajamas. Remembering the warmth of goodnight hugs and sleepy smiles."
    },
    {
        id: 5,
        title: "The Team Captain",
        category: "Jersey",
        src: "/images/jersey_enhanced.png",
        story: "Constructed from a cherished jersey. Celebrating a love for the game and the teammate everyone looked up to."
    },
    {
        id: 6,
        title: "Morning Comfort",
        category: "Robe",
        src: "/images/robe_enhanced.png",
        story: "Created from a soft, well-worn robe. Reminiscent of slow Sunday mornings and quiet comfort."
    },
];

export default function GalleryPage() {
    return (
        <div className="bg-background pb-16">
            <section className="bg-primary/5 py-16">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <h1 className="mb-4 font-serif text-4xl font-bold text-primary md:text-5xl">Gallery</h1>
                    <p className="mx-auto max-w-2xl text-lg text-secondary-foreground/80">
                        A small selection of the memories we've had the honor of preserving.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {galleryItems.map((item) => (
                        <div key={item.id} className="group relative aspect-square overflow-hidden rounded-2xl bg-secondary/5 transition-all hover:shadow-xl">
                            {/* Image */}
                            <Image
                                src={item.src}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <h3 className="font-serif text-xl font-bold text-white mb-1">{item.title}</h3>
                                <p className="text-xs font-bold uppercase tracking-wider text-accent mb-2">{item.category}</p>
                                <p className="text-sm text-white/90 leading-relaxed font-light italic">"{item.story}"</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="mb-6 text-secondary-foreground/80">Want to see more of our daily creations?</p>
                    <a
                        href="https://www.facebook.com/BEARSbyRhonda"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-primary px-8 py-3 font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                    >
                        Visit us on Facebook <ExternalLink className="h-4 w-4" />
                    </a>
                </div>
            </section>
        </div>
    );
}
