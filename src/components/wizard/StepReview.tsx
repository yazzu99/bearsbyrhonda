"use client";

import { useOrderStore } from "@/lib/store";
import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";

export default function StepReview() {
    const { selection, details, contact, prevStep } = useOrderStore();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Mock submit function
    const handleSubmit = async () => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center space-y-6 py-12 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 className="h-10 w-10" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-primary">Order Received!</h2>
                <p className="max-w-md text-secondary-foreground">
                    Thank you, {contact.name}. We have received your request.
                    Please check your email <strong>({contact.email})</strong> for your Order Ticket and shipping instructions.
                </p>
                <Link href="/" className="mt-8 rounded-full bg-primary px-8 py-3 font-bold text-primary-foreground hover:bg-primary/90">
                    Return Home
                </Link>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="text-center">
                <h2 className="font-serif text-3xl font-bold text-primary">Review Your Order</h2>
                <p className="mt-2 text-secondary-foreground">Please confirm the details below.</p>
            </div>

            <div className="rounded-2xl border-2 border-secondary/10 bg-secondary/5 p-6">
                <dl className="grid gap-x-4 gap-y-6 sm:grid-cols-2">
                    <div>
                        <dt className="text-sm font-bold text-secondary">Bear Types</dt>
                        <dd className="text-lg font-medium text-foreground capitalize">{selection.type} Bear</dd>
                    </div>
                    <div>
                        <dt className="text-sm font-bold text-secondary">Size</dt>
                        <dd className="text-lg font-medium text-foreground capitalize">{selection.size}</dd>
                    </div>
                    <div className="sm:col-span-2">
                        <dt className="text-sm font-bold text-secondary">Clothing Provided</dt>
                        <dd className="mt-1 text-foreground">{details.clothingDescription}</dd>
                    </div>
                    {details.specialRequests && (
                        <div className="sm:col-span-2">
                            <dt className="text-sm font-bold text-secondary">Special Requests</dt>
                            <dd className="mt-1 text-foreground">{details.specialRequests}</dd>
                        </div>
                    )}
                    <div className="border-t border-secondary/20 pt-4 sm:col-span-2">
                        <dt className="text-sm font-bold text-secondary">Contact Info</dt>
                        <dd className="mt-1 text-foreground">
                            {contact.name}<br />
                            {contact.email}<br />
                            {contact.phone}
                        </dd>
                    </div>
                </dl>
            </div>

            <div className="flex justify-between pt-8">
                <button
                    onClick={prevStep}
                    className="font-medium text-secondary-foreground hover:text-primary hover:underline"
                >
                    Back
                </button>
                <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-bold text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="h-4 w-4 animate-spin" /> Processing...
                        </>
                    ) : (
                        "Complete Order"
                    )}
                </button>
            </div>
        </div>
    );
}
