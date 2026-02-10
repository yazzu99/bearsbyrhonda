"use client";

import { useOrderStore, BEAR_PRICES } from "@/lib/store";
import { useState } from "react";
import { CheckCircle2, Loader2, Download, Printer } from "lucide-react";
import Link from "next/link";
import { jsPDF } from "jspdf";

export default function StepReview() {
    const { bears, getSubtotal, contact, nextStep, prevStep } = useOrderStore();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const subtotal = getSubtotal();

    // Generate PDF Ticket
    const generatePDF = () => {
        const doc = new jsPDF();

        // Header
        doc.setFontSize(22);
        doc.text("BEARS by Rhonda", 20, 20);
        doc.setFontSize(12);
        doc.text("Order Ticket", 20, 30);

        // Contact Info
        doc.setFontSize(10);
        doc.text(`Customer: ${contact.name}`, 20, 45);
        doc.text(`Phone: ${contact.phone}`, 20, 50);
        doc.text(`Email: ${contact.email}`, 20, 55);
        if (contact.needByDate) {
            doc.text(`Need By: ${contact.needByDate}`, 20, 60);
        }

        // Order Details
        let yPos = 75;
        doc.setFontSize(14);
        doc.text("Order Details", 20, yPos);
        yPos += 10;

        doc.setFontSize(10);
        bears.forEach((bear, index) => {
            const title = `Bear #${index + 1} (${bear.size})`;
            const details = `Eyes: ${bear.eyes}, Feet: ${bear.feet}`;
            const embroidery = bear.embroidery.enabled ? `Embroidery: "${bear.embroidery.text}"` : "No Embroidery";
            const notes = bear.specialRequest ? `Note: ${bear.specialRequest}` : "";

            doc.setFont('helvetica', 'bold');
            doc.text(title, 20, yPos);
            doc.setFont('helvetica', 'normal');
            doc.text(details, 60, yPos);
            yPos += 5;
            doc.text(embroidery, 60, yPos);
            if (notes) {
                yPos += 5;
                doc.text(notes, 60, yPos);
            }
            yPos += 15;
        });

        // Logistics Instructions
        yPos += 10;
        doc.setFontSize(12);
        doc.text("Packing Instructions:", 20, yPos);
        yPos += 10;
        doc.setFontSize(10);
        doc.text("1. Print this page and place it INSIDE your box.", 20, yPos);
        yPos += 5;
        doc.text("2. Ensure all clothing items are clean.", 20, yPos);
        yPos += 5;
        doc.text("3. Ship to: BEARS by Rhonda, [Address Provided in Email]", 20, yPos);

        doc.save("BearsByRhonda_OrderTicket.pdf");
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);

        // Here we would sync with backend/Square
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Auto-download the ticket
        generatePDF();

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
                    Thank you, {contact.name}. Your order ticket has been downloaded.
                    <br /><br />
                    Please <strong>print it</strong> and include it in your package.
                </p>

                <button
                    onClick={generatePDF}
                    className="flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                >
                    <Download className="h-4 w-4" /> Download Ticket Again
                </button>

                <Link href="/" className="mt-8 rounded-full bg-secondary/10 px-8 py-3 font-bold text-foreground hover:bg-secondary/20">
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

            <div className="rounded-2xl border-2 border-secondary/10 bg-secondary/5 p-6 space-y-6">

                {/* Bear Verification List */}
                <div className="space-y-4">
                    <h3 className="font-bold text-lg text-primary border-b border-primary/20 pb-2">
                        {bears.length} Custom Bear{bears.length !== 1 && 's'}
                    </h3>

                    {bears.map((bear, idx) => (
                        <div key={bear.id} className="flex flex-col sm:flex-row justify-between text-sm bg-white p-4 rounded-xl border border-secondary/10">
                            <div className="space-y-1">
                                <span className="font-bold text-foreground">Bear #{idx + 1} ({bear.size})</span>
                                <div className="text-secondary-foreground/80 text-xs">
                                    <span className="block">Eyes: {bear.eyes} | Feet: {bear.feet}</span>
                                    {bear.specialRequest && <span className="block italic mt-1">"{bear.specialRequest}"</span>}
                                </div>
                            </div>
                            <div className="mt-2 sm:mt-0 text-right space-y-1">
                                <div className="font-medium">${BEAR_PRICES[bear.size]}.00</div>
                                {bear.embroidery.enabled && (
                                    <div className="text-xs text-primary font-bold">
                                        + Embroidery ($5.00)<br />
                                        <span className="text-secondary-foreground font-normal">"{bear.embroidery.text}"</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Logistics */}
                <div className="bg-white p-4 rounded-xl border border-secondary/10 text-sm">
                    <h3 className="font-bold text-foreground mb-2">Shipping To:</h3>
                    <p className="text-secondary-foreground">
                        {contact.name}<br />
                        {contact.address}<br />
                        {contact.phone}
                        {contact.needByDate && <span className="block mt-2 font-bold text-red-500">Needed by: {contact.needByDate}</span>}
                    </p>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center text-xl font-bold border-t-2 border-dashed border-secondary/20 pt-4">
                    <span>Estimated Total</span>
                    <span className="text-primary">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-center text-secondary-foreground">
                    * Shipping costs will be invoiced separately.
                </p>
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
                        <>
                            <Printer className="h-4 w-4" /> Submit & Print Ticket
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}
