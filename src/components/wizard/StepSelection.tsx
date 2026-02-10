"use client";

import { useOrderStore, BEAR_PRICES } from "@/lib/store";
import { Plus, Trash2, Shirt } from "lucide-react";

export default function StepSelection() {
    const { bears, addBear, removeBear, nextStep, getClothingRequired } = useOrderStore();

    return (
        <div className="space-y-8">
            <div className="text-center">
                <h2 className="font-serif text-3xl font-bold text-primary">Build Your Order</h2>
                <p className="mt-2 text-secondary-foreground">
                    Add the bears you want to create, then we'll help you prepare the clothing.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* Add Bear Section */}
                <div className="rounded-2xl border-2 border-primary/10 bg-white p-6 shadow-sm">
                    <h3 className="mb-4 text-center font-bold text-foreground max-w-xs mx-auto">Add a Bear</h3>
                    <div className="grid gap-4">
                        {(['18inch', '22inch'] as const).map((size) => (
                            <button
                                key={size}
                                onClick={() => addBear(size)}
                                className="flex items-center justify-between rounded-xl border-2 border-secondary/20 bg-background p-4 transition-all hover:border-primary/50 hover:bg-primary/5"
                            >
                                <span className="font-medium text-foreground">
                                    {size === '18inch' ? '18 Inch' : '22 Inch'} Bear
                                </span>
                                <span className="font-bold text-primary">${BEAR_PRICES[size]}</span>
                                <Plus className="h-5 w-5 text-secondary-foreground/50" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Your Cart Section */}
                <div className="flex flex-col rounded-2xl border-2 border-secondary/10 bg-secondary/5 p-6">
                    <h3 className="mb-4 text-lg font-bold text-foreground">Your Bears ({bears.length})</h3>

                    {bears.length === 0 ? (
                        <div className="flex flex-1 flex-col items-center justify-center text-center text-secondary-foreground/60">
                            <p>No bears added yet.</p>
                            <p className="text-sm">Select a size to start!</p>
                        </div>
                    ) : (
                        <div className="flex-1 space-y-3 overflow-y-auto max-h-[300px] mb-4 pr-1">
                            {bears.map((bear, idx) => (
                                <div key={bear.id} className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm animate-in fade-in slide-in-from-bottom-2">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm text-foreground">
                                                {bear.size === '18inch' ? '18"' : '22"'} Memory Bear
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeBear(bear.id)}
                                        className="text-red-400 hover:text-red-600 transition-colors"
                                        title="Remove Bear"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Clothing Requirement Banner */}
                    {bears.length > 0 && (
                        <div className="mt-auto rounded-xl bg-blue-50 p-4 text-blue-900">
                            <div className="flex items-start gap-3">
                                <Shirt className="h-5 w-5 shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-bold text-sm">Clothing Needed:</p>
                                    <p className="text-xs leading-relaxed opacity-90">
                                        {getClothingRequired()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex justify-end pt-8">
                <button
                    onClick={nextStep}
                    disabled={bears.length === 0}
                    className="rounded-full bg-primary px-8 py-3 font-bold text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Customize Your Bears
                </button>
            </div>
        </div>
    );
}
