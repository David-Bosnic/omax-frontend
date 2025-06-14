import { writable, derived, type Writable } from 'svelte/store';
import { browser } from '$app/environment';

function createPersistentTheme() {
    const colorStore = writable<string>('purple');
    const logoStore = writable<string>('');

    if (browser) {
        const storedColor = localStorage.getItem('primaryColor');
        const storedLogo = localStorage.getItem('partnerLogo');

        if (storedColor) setTimeout(() => colorStore.set(storedColor), 0);
        if (storedLogo) setTimeout(() => logoStore.set(storedLogo), 0);

        colorStore.subscribe((value) => {
            localStorage.setItem('primaryColor', value);
        });

        logoStore.subscribe((value) => {
            localStorage.setItem('partnerLogo', value);
        });
    }

    return {
        primaryColor: colorStore,
        partnerLogo: logoStore
    };
}

const themeStores = createPersistentTheme();
export const primaryColor: Writable<string> = themeStores.primaryColor;
export const partnerLogo: Writable<string> = themeStores.partnerLogo;

export const bgColor = derived(primaryColor, ($color) => `bg-${$color}-500`);
export const textColor = derived(primaryColor, ($color) => `text-${$color}-500`);
export const borderColor = derived(primaryColor, ($color) => `border-${$color}-500`);
export const hoverBorderColor = derived(primaryColor, ($color) => `hover:border-${$color}-500`);
export const hoverTextColor = derived(primaryColor, ($color) => `hover:text-${$color}-500`);
export const hoverColor = derived(primaryColor, ($color) => `hover:bg-${$color}-500`);
export const bgColorLight = derived(primaryColor, ($color) => `bg-${$color}-100`);
export const hoverTextColorLight = derived(primaryColor, ($color) => `hover:text-${$color}-300`);

export const status: Writable<string> = writable('');

export interface Plan {
    id: string;
    days_valid: string;
    title: string;
    retail_price: string;
    description: string;
    data_volume_gb: number;
    cover_image: string | null;
    coverage: string[];
}

export interface TopUpInfo {
    id: string;
    airwallex_link: string;
}

function createPersistentTopUpStore(): Writable<TopUpInfo> {
    const storedTopUpJson = browser ? localStorage.getItem('currentTopUpInfo') : null;
    const initialTopUp: TopUpInfo = storedTopUpJson
        ? JSON.parse(storedTopUpJson)
        : {
            id: '',
            airwallex_link: ''
        };
    const store = writable<TopUpInfo>(initialTopUp);
    if (browser) {
        store.subscribe((value) => {
            localStorage.setItem('currentTopUpInfo', JSON.stringify(value));
        });
    }
    return store;
}

function createPersistentPlanStore(): Writable<Plan> {
    const storedPlanJson = browser ? localStorage.getItem('selectedPlan') : null;
    const initialPlan: Plan = storedPlanJson
        ? JSON.parse(storedPlanJson)
        : {
            id: '',
            days_valid: '',
            title: '',
            retail_price: '',
            description: '',
            data_volume_gb: 0,
            cover_image: '',
            coverage: ['']
        };
    const store = writable<Plan>(initialPlan);
    if (browser) {
        store.subscribe((value) => {
            localStorage.setItem('selectedPlan', JSON.stringify(value));
        });
    }
    return store;
}

export const currentTopUpInfo = createPersistentTopUpStore();
export const selectedPlan = createPersistentPlanStore();
