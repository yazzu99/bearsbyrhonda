"use client";

import { useOrderStore, BEAR_PRICES } from "@/lib/store";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ChevronRight, ChevronLeft, Type } from "lucide-react";

export default function StepDetails() {
    const { bears, updateBear, nextStep, prevStep } = useOrderStore();
    const [currentBearIndex, setCurrentBearIndex] = useState(0);

    const currentBear = bears[currentBearIndex];
    if (!currentBear) return null;

    // Navigation between bears
    const handleNextBear = () => {
        if (currentBearIndex < bears.length - 1) {
            setCurrentBearIndex(currentBearIndex + 1);
        } else {
            nextStep();
        }
    };

    const handlePrevBear = () => {
        if (currentBearIndex > 0) {
            setCurrentBearIndex(currentBearIndex - 1);
        } else {
            prevStep();
        }
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <h2 className="font-serif text-3xl font-bold text-primary">Customize Bear #{currentBearIndex + 1}</h2>
                <p className="mt-2 text-secondary-foreground">
                    Tailor this {currentBear.size === '18inch' ? '18"' : '22"'} bear ({bears[currentBearIndex].size.replace('inch', '"')}) to your liking.
                </p>
            </div>

            {/* Progress indicator for multiple bears */}
            {bears.length > 1 && (
                <div className="flex justify-center gap-2">
                    {bears.map((_, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "h-2 w-8 rounded-full transition-all",
                                idx === currentBearIndex ? "bg-primary" : "bg-secondary/20"
                            )}
                        />
                    ))}
                </div>
            )}

            <div className="grid gap-8 md:grid-cols-2">
                {/* Visual Options */}
                <div className="space-y-6">
                    {/* Size Selection - Allow changing size here too */}
                    <div>
                        <h3 className="mb-3 font-bold text-foreground">Size</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {(['18inch', '22inch'] as const).map((size) => (
                                <button
                                    key={size}
                                    onClick={() => updateBear(currentBearIndex, { size })}
                                    className={cn(
                                        "rounded-xl border-2 p-3 text-sm font-medium transition-all",
                                        currentBear.size === size
                                            ? "border-primary bg-primary/10 text-primary"
                                            : "border-secondary/20 hover:border-primary/50"
                                    )}
                                >
                                    {size === '18inch' ? '18" ($30)' : '22" ($40)'}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Eye Color */}
                    <div>
                        <h3 className="mb-3 font-bold text-foreground">Eye Color</h3>
                        <div className="grid grid-cols-3 gap-3">
                            {(['Brown', 'Blue', 'Green'] as const).map((color) => (
                                <button
                                    key={color}
                                    onClick={() => updateBear(currentBearIndex, { eyes: color })}
                                    className={cn(
                                        "rounded-xl border-2 p-3 text-sm font-medium transition-all",
                                        currentBear.eyes === color
                                            ? "border-primary bg-primary/10 text-primary"
                                            : "border-secondary/20 hover:border-primary/50"
                                    )}
                                >
                                    {color}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Foot Color */}
                    <div>
                        <h3 className="mb-3 font-bold text-foreground">Foot Pad Color</h3>
                        <div className="grid grid-cols-3 gap-3">
                            {(['Beige', 'Brown', 'Other'] as const).map((color) => (
                                <button
                                    key={color}
                                    onClick={() => updateBear(currentBearIndex, { feet: color })}
                                    className={cn(
                                        "rounded-xl border-2 p-3 text-sm font-medium transition-all",
                                        currentBear.feet === color
                                            ? "border-primary bg-primary/10 text-primary"
                                            : "border-secondary/20 hover:border-primary/50"
                                    )}
                                >
                                    {color}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Add-ons & Notes */}
                <div className="space-y-6">
                    {/* Embroidery */}
                    <div className={cn(
                        "rounded-xl border-2 p-6 transition-all",
                        currentBear.embroidery.enabled ? "border-primary bg-primary/5" : "border-secondary/10"
                    )}>
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="font-bold text-foreground flex items-center gap-2">
                                    <Type className="h-4 w-4" /> Embroidery
                                </h3>
                                <p className="text-xs text-secondary-foreground">Add a name or date to the foot.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-bold text-primary">+$5</span>
                                <input
                                    type="checkbox"
                                    className="h-5 w-5 accent-primary"
                                    checked={currentBear.embroidery.enabled}
                                    onChange={(e) => updateBear(currentBearIndex, {
                                        embroidery: { ...currentBear.embroidery, enabled: e.target.checked }
                                    })}
                                />
                            </div>
                        </div>

                        {currentBear.embroidery.enabled && (
                            <div className="mt-4">
                                <label className="mb-1 block text-xs font-bold uppercase text-secondary">Text to Embroider</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Dad 1955-2023"
                                    maxLength={50}
                                    className="w-full rounded-lg border-2 border-primary/20 bg-white p-2 text-sm focus:border-primary focus:outline-none"
                                    value={currentBear.embroidery.text || ''}
                                    onChange={(e) => updateBear(currentBearIndex, {
                                        embroidery: { ...currentBear.embroidery, text: e.target.value }
                                    })}
                                />
                            </div>
                        )}
                    </div>

                    {/* Special Notes */}
                    <div>
                        <h3 className="mb-2 font-bold text-foreground">Special Instructions</h3>
                        <textarea
                            rows={3}
                            maxLength={500}
                            className="w-full rounded-xl border-2 border-secondary/20 bg-background p-3 text-sm focus:border-primary focus:outline-none"
                            placeholder="e.g. Keep the pocket on the chest..."
                            value={currentBear.specialRequest || ''}
                            onChange={(e) => updateBear(currentBearIndex, { specialRequest: e.target.value })}
                        />
                        <div className="text-right text-xs text-secondary-foreground">
                            {(currentBear.specialRequest?.length || 0)}/500
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between pt-8 border-t border-secondary/10">
                <button
                    onClick={handlePrevBear}
                    className="flex items-center gap-2 font-medium text-secondary-foreground hover:text-primary"
                >
                    <ChevronLeft className="h-4 w-4" />
                    {currentBearIndex === 0 ? "Back to Building" : "Previous Bear"}
                </button>
                <button
                    onClick={handleNextBear}
                    className="flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-bold text-primary-foreground transition-all hover:bg-primary/90"
                >
                    {currentBearIndex === bears.length - 1 ? "Next: Logistics" : "Next Bear"}
                    <ChevronRight className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}
