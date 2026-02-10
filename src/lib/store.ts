import { create } from 'zustand';

export type BearSize = '18inch' | '22inch';
export type EyeColor = 'Brown' | 'Blue' | 'Green';
export type FootColor = 'Beige' | 'Brown' | 'Other';

export const BEAR_PRICES: Record<BearSize, number> = {
    '18inch': 30, // keeping 30 as per previous
    '22inch': 40,
};

export const EMBROIDERY_PRICE = 5;

export interface BearCustomization {
    id: string;
    size: BearSize;
    eyes: EyeColor;
    feet: FootColor;
    embroidery: {
        enabled: boolean;
        text?: string;
    };
    specialRequest?: string;
}

export interface OrderState {
    step: number;
    bears: BearCustomization[];
    contact: {
        name: string;
        email: string;
        phone: string;
        address: string;
        needByDate?: string;
    };

    // Actions
    setStep: (step: number) => void;
    nextStep: () => void;
    prevStep: () => void;

    // Builder Actions
    addBear: (size: BearSize) => void;
    removeBear: (id: string) => void;
    updateBear: (index: number, updates: Partial<BearCustomization>) => void;

    updateContact: (updates: Partial<OrderState['contact']>) => void;

    // Getters
    getSubtotal: () => number;
    getClothingRequired: () => string;
}

export const useOrderStore = create<OrderState>((set, get) => ({
    step: 1,
    bears: [],
    contact: { name: '', email: '', phone: '', address: '' },

    setStep: (step) => set({ step }),
    nextStep: () => set((state) => ({ step: state.step + 1 })),
    prevStep: () => set((state) => ({ step: Math.max(1, state.step - 1) })),

    addBear: (size) => set((state) => ({
        bears: [
            ...state.bears,
            {
                id: Math.random().toString(36).substr(2, 9),
                size,
                eyes: 'Brown',
                feet: 'Beige',
                embroidery: { enabled: false, text: '' }
            }
        ]
    })),

    removeBear: (id) => set((state) => ({
        bears: state.bears.filter((b) => b.id !== id)
    })),

    updateBear: (index, updates) => {
        set((state) => {
            const newBears = [...state.bears];
            if (newBears[index]) {
                newBears[index] = { ...newBears[index], ...updates };
            }
            return { bears: newBears };
        });
    },

    updateContact: (updates) => set((state) => ({ contact: { ...state.contact, ...updates } })),

    getSubtotal: () => {
        const { bears } = get();
        return bears.reduce((total, bear) => {
            let cost = BEAR_PRICES[bear.size];
            if (bear.embroidery.enabled) cost += EMBROIDERY_PRICE;
            return total + cost;
        }, 0);
    },

    getClothingRequired: () => {
        const { bears } = get();
        if (bears.length === 0) return "No items needed yet.";

        // Logic: 1 Bear = 1 Adult Item OR 2 Small Items OR 7 Onesies
        // We will simplify the recommendation to avoid confusion.
        const totalBears = bears.length;

        return `For ${totalBears} bear${totalBears > 1 ? 's' : ''}, please send approximately ${totalBears} Adult Shirt${totalBears > 1 ? 's' : ''} OR ${totalBears * 2} Small Items/Onesies.`;
    }
}));
