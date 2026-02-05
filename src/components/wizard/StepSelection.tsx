"use client";

import { useOrderStore, type BearType, type BearSize } from "@/lib/store";
import { cn } from "@/lib/utils";

const bearTypes = [
    { id: "standard", name: "Standard Bear", description: "Classic teddy bear shape, perfect for flannel or denim." },
    { id: "mini", name: "Mini Bear", description: "Smaller size, ideal for baby clothes or smaller scraps." },
    { id: "quilt", name: "Quilt Bear", description: "Patchwork style made from multiple different fabrics." },
];

const bearSizes = [
    { id: "15inch", label: "15 inch", price: "$125" },
    { id: "18inch", label: "18 inch", price: "$145" },
    { id: "22inch", label: "22 inch", price: "$165" },
];

export default function StepSelection() {
    const { selection, updateSelection, nextStep } = useOrderStore();

    const isComplete = selection.type && selection.size;

    return (
        <div className="space-y-8">
            <div className="text-center">
                <h2 className="font-serif text-3xl font-bold text-primary">Choose Your Bear</h2>
                <p className="mt-2 text-secondary-foreground">Select the style and size that fits your memory.</p>
            </div>

            {/* Type Selection */}
            <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wide text-secondary">1. Style</h3>
                <div className="grid gap-4 sm:grid-cols-3">
                    {bearTypes.map((type) => (
                        <button
                            key={type.id}
                            onClick={() => updateSelection({ type: type.id as BearType })}
                            className={cn(
                                "flex flex-col rounded-xl border-2 p-4 text-left transition-all hover:border-primary/50",
                                selection.type === type.id
                                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                                    : "border-transparent bg-secondary/5"
                            )}
                        >
                            <span className="mb-1 font-serif text-lg font-bold text-foreground">{type.name}</span>
                            <span className="text-xs leading-relaxed text-secondary-foreground/80">{type.description}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wide text-secondary">2. Size</h3>
                <div className="grid gap-4 sm:grid-cols-3">
                    {bearSizes.map((size) => (
                        <button
                            key={size.id}
                            onClick={() => updateSelection({ size: size.id as BearSize })}
                            className={cn(
                                "flex items-center justify-between rounded-xl border-2 p-4 transition-all hover:border-primary/50",
                                selection.size === size.id
                                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                                    : "border-transparent bg-secondary/5"
                            )}
                        >
                            <span className="font-medium text-foreground">{size.label}</span>
                            <span className="font-bold text-primary">{size.price}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex justify-end pt-8">
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
