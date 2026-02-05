"use client";

import { useOrderStore } from "@/lib/store";

export default function StepDetails() {
    const { details, updateDetails, nextStep, prevStep } = useOrderStore();

    const isComplete = details.clothingDescription.length > 5;

    return (
        <div className="space-y-8">
            <div className="text-center">
                <h2 className="font-serif text-3xl font-bold text-primary">Tell Us The Story</h2>
                <p className="mt-2 text-secondary-foreground">Help us understand the significance of your items.</p>
            </div>

            <div className="space-y-6">
                <div>
                    <label htmlFor="clothing" className="mb-2 block text-sm font-bold text-foreground">
                        What clothing are you sending? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="clothing"
                        rows={3}
                        className="w-full rounded-xl border-2 border-secondary/20 bg-background p-4 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="e.g. My father's blue plaid flannel visual and a pair of denim jeans."
                        value={details.clothingDescription}
                        onChange={(e) => updateDetails({ clothingDescription: e.target.value })}
                    />
                    <p className="mt-1 text-xs text-secondary">
                        Please note: We do not work with fragile vintage materials. Sturdy clothing works best.
                    </p>
                </div>

                <div>
                    <label htmlFor="story" className="mb-2 block text-sm font-bold text-foreground">
                        The Memory (Optional)
                    </label>
                    <textarea
                        id="story"
                        rows={3}
                        className="w-full rounded-xl border-2 border-secondary/20 bg-background p-4 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Who did this belong to? Is there a specific memory attached to it?"
                        value={details.memoryStory}
                        onChange={(e) => updateDetails({ memoryStory: e.target.value })}
                    />
                </div>

                <div>
                    <label htmlFor="requests" className="mb-2 block text-sm font-bold text-foreground">
                        Special Requests (Optional)
                    </label>
                    <input
                        id="requests"
                        type="text"
                        className="w-full rounded-xl border-2 border-secondary/20 bg-background p-4 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="e.g. Keep the pocket on the chest, use the buttons for eyes..."
                        value={details.specialRequests}
                        onChange={(e) => updateDetails({ specialRequests: e.target.value })}
                    />
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
                    Next Step
                </button>
            </div>
        </div>
    );
}
