"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useOrderStore } from "@/lib/store";
import StepSelection from "./StepSelection";
import StepDetails from "./StepDetails";
import StepLogistics from "./StepLogistics";
import StepReview from "./StepReview";

export default function OrderWizard() {
    const { step } = useOrderStore();

    return (
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-xl sm:p-12">
            {/* Progress Bar */}
            <div className="mb-12">
                <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary/10">
                    <motion.div
                        className="absolute h-full bg-accent"
                        initial={{ width: "0%" }}
                        animate={{ width: `${(step / 4) * 100}%` }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                </div>
                <div className="mt-4 flex justify-between text-xs font-medium uppercase tracking-wider text-secondary">
                    <span className={step >= 1 ? "text-primary" : ""}>Selection</span>
                    <span className={step >= 2 ? "text-primary" : ""}>Details</span>
                    <span className={step >= 3 ? "text-primary" : ""}>Logistics</span>
                    <span className={step >= 4 ? "text-primary" : ""}>Review</span>
                </div>
            </div>

            {/* Steps content with animation */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    {step === 1 && <StepSelection />}
                    {step === 2 && <StepDetails />}
                    {step === 3 && <StepLogistics />}
                    {step === 4 && <StepReview />}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
