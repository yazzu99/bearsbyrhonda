"use client";

import { useOrderStore } from "@/lib/store";
import { Truck, Info } from "lucide-react";

export default function StepLogistics() {
    const { contact, updateContact, nextStep, prevStep } = useOrderStore();

    const isComplete = contact.name && contact.email && contact.phone && contact.address;

    return (
        <div className="space-y-8">
            <div className="text-center">
                <h2 className="font-serif text-3xl font-bold text-primary">Logistics & Contact</h2>
                <p className="mt-2 text-secondary-foreground">Where should we send your completed bear?</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                {/* Contact Form */}
                <div className="space-y-5">
                    <h3 className="text-lg font-bold text-foreground">Your Information</h3>
                    <div>
                        <label htmlFor="name" className="mb-1 block text-sm font-medium">Full Name</label>
                        <input
                            id="name"
                            type="text"
                            className="w-full rounded-lg border-2 border-secondary/20 p-3 focus:border-primary focus:outline-none"
                            value={contact.name}
                            onChange={(e) => updateContact({ name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="mb-1 block text-sm font-medium">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            className="w-full rounded-lg border-2 border-secondary/20 p-3 focus:border-primary focus:outline-none"
                            value={contact.email}
                            onChange={(e) => updateContact({ email: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="mb-1 block text-sm font-medium">Phone Number</label>
                        <input
                            id="phone"
                            type="tel"
                            className="w-full rounded-lg border-2 border-secondary/20 p-3 focus:border-primary focus:outline-none"
                            value={contact.phone}
                            onChange={(e) => updateContact({ phone: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="date" className="mb-1 block text-sm font-medium">Need By Date (Optional)</label>
                        <input
                            id="date"
                            type="date"
                            className="w-full rounded-lg border-2 border-secondary/20 p-3 focus:border-primary focus:outline-none"
                            value={contact.needByDate || ''}
                            onChange={(e) => updateContact({ needByDate: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="address" className="mb-1 block text-sm font-medium">Return Shipping Address</label>
                        <textarea
                            id="address"
                            rows={3}
                            className="w-full rounded-lg border-2 border-secondary/20 p-3 focus:border-primary focus:outline-none"
                            value={contact.address}
                            onChange={(e) => updateContact({ address: e.target.value })}
                            placeholder="Street, City, State, Zip"
                        />
                    </div>
                </div>

                {/* Shipping Context */}
                <div className="rounded-2xl bg-secondary/10 p-6">
                    <div className="flex items-center gap-3 text-primary">
                        <Truck className="h-6 w-6" />
                        <h3 className="text-lg font-bold">How Shipping Works</h3>
                    </div>

                    <div className="mt-4 space-y-4">
                        <div className="flex gap-3">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-primary">1</div>
                            <p className="text-sm text-secondary-foreground">
                                Complete your order today to reserve your production slot.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-primary">2</div>
                            <p className="text-sm text-secondary-foreground">
                                You will receive an email with your <strong>Order Ticket</strong> and packing instructions.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-primary">3</div>
                            <p className="text-sm text-secondary-foreground">
                                Ship your clothing to us in Kansas. We notify you upon arrival.
                            </p>
                        </div>

                        <div className="mt-4 rounded-lg bg-red-50 p-4 text-xs text-red-800">
                            <div className="mb-1 flex items-center gap-2 font-bold">
                                <Info className="h-4 w-4" /> Important:
                            </div>
                            Please do not ship items until you receive your Order Ticket.
                            We cannot be responsible for unidentified packages.
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between pt-8">
                <button
                    onClick={prevStep}
                    className="font-medium text-secondary-foreground hover:text-primary hover:underline"
                >
                    Back
                </button>
                <button
                    onClick={nextStep}
                    disabled={!isComplete}
                    className="rounded-full bg-primary px-8 py-3 font-bold text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Review Order
                </button>
            </div>
        </div>
    );
}
