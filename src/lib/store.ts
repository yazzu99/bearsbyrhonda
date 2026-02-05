import { create } from 'zustand';

export type BearType = 'standard' | 'mini' | 'quilt';
export type BearSize = '15inch' | '18inch' | '22inch';

interface OrderState {
    step: number;
    selection: {
        type: BearType | null;
        size: BearSize | null;
        quantity: number;
    };
    details: {
        clothingDescription: string;
        specialRequests: string;
        memoryStory: string;
    };
    contact: {
        name: string;
        email: string;
        phone: string;
    };

    // Actions
    setStep: (step: number) => void;
    nextStep: () => void;
    prevStep: () => void;
    updateSelection: (updates: Partial<OrderState['selection']>) => void;
    updateDetails: (updates: Partial<OrderState['details']>) => void;
    updateContact: (updates: Partial<OrderState['contact']>) => void;
    resetOrder: () => void;
}

export const useOrderStore = create<OrderState>((set) => ({
    step: 1,
    selection: {
        type: null,
        size: null,
        quantity: 1,
    },
    details: {
        clothingDescription: '',
        specialRequests: '',
        memoryStory: '',
    },
    contact: {
        name: '',
        email: '',
        phone: '',
    },

    setStep: (step) => set({ step }),
    nextStep: () => set((state) => ({ step: state.step + 1 })),
    prevStep: () => set((state) => ({ step: Math.max(1, state.step - 1) })),
    updateSelection: (updates) =>
        set((state) => ({ selection: { ...state.selection, ...updates } })),
    updateDetails: (updates) =>
        set((state) => ({ details: { ...state.details, ...updates } })),
    updateContact: (updates) =>
        set((state) => ({ contact: { ...state.contact, ...updates } })),
    resetOrder: () => set({
        step: 1,
        selection: { type: null, size: null, quantity: 1 },
        details: { clothingDescription: '', specialRequests: '', memoryStory: '' },
        contact: { name: '', email: '', phone: '' }
    }),
}));
