import OrderWizard from "@/components/wizard/OrderWizard";

export default function OrderPage() {
    return (
        <div className="min-h-screen bg-background py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h1 className="font-serif text-4xl font-bold text-primary md:text-5xl">Start Your Custom Order</h1>
                    <p className="mt-4 text-lg text-secondary-foreground/80">
                        Let's create something beautiful together. Follow the steps below.
                    </p>
                </div>

                <OrderWizard />
            </div>
        </div>
    );
}
