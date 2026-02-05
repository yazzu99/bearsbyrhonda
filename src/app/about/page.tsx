import Image from "next/image";
import { Scissors, Heart, Calendar } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="bg-background">
            {/* Header */}
            <section className="bg-primary/5 py-16">
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <h1 className="mb-4 font-serif text-4xl font-bold text-primary md:text-5xl">Our Story</h1>
                    <p className="text-lg text-secondary-foreground/80">
                        From a grandmother's sewing room to preserving memories nationwide.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="prose prose-lg mx-auto text-secondary-foreground/80">
                    <p className="lead font-serif text-2xl italic text-primary">
                        "It's not just a bear. It's a hug you can hold onto forever."
                    </p>

                    <div className="my-12 flex flex-col gap-8 md:flex-row md:items-center">
                        <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-secondary/10 md:w-1/2">
                            <Image
                                src="/images/rhonda_enhanced.png"
                                alt="Rhonda - Founder of Bears by Rhonda"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h3 className="mb-4 text-2xl font-bold text-foreground">Meet Rhonda</h3>
                            <p>
                                Founded in 2019, <strong>BEARS by Rhonda</strong> (formerly Impact Crafts) began with a simple mission:
                                to create tangible comfort from cherished memories. Based in Kansas, Rhonda has handcrafted
                                hundreds of bears, each with its own unique personality woven from the fabric of loved ones.
                            </p>
                        </div>
                    </div>

                    <h3>The Craft</h3>
                    <p>
                        Unlike mass-produced toys, every bear is cut, sewn, and stuffed by hand. We discourage the use of fragile vintage materials,
                        focusing instead on durable <strong>clothing</strong>—flannel shirts, denim jackets, wedding dresses,
                        and uniforms—that truly capture the essence of the person they represent.
                    </p>

                    <div className="my-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
                        <div className="rounded-xl border border-primary/10 p-6 shadow-sm">
                            <Calendar className="mb-4 h-8 w-8 text-accent" />
                            <h4 className="font-bold text-foreground">Established 2019</h4>
                            <p className="text-sm">Years of dedication to the art of memory making.</p>
                        </div>
                        <div className="rounded-xl border border-primary/10 p-6 shadow-sm">
                            <Scissors className="mb-4 h-8 w-8 text-accent" />
                            <h4 className="font-bold text-foreground">Handmade</h4>
                            <p className="text-sm">No factories. Just skilled hands and attention to detail.</p>
                        </div>
                        <div className="rounded-xl border border-primary/10 p-6 shadow-sm">
                            <Heart className="mb-4 h-8 w-8 text-accent" />
                            <h4 className="font-bold text-foreground">Heartfelt</h4>
                            <p className="text-sm">We handle your items with the respect they deserve.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
