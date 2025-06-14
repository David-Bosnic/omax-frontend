export interface Plan {
    id: string;
    days_valid: string;
    title: string;
    retail_price: string;
    description: string;
    data_volume_gb: number;
    cover_image: string | null;
    coverage: string[];
    is_recommended: boolean;
}

export interface Partner {
    id: string;
    name: string;
    plans: Plan[];
    color_1_code: string;
}

// export interface TopUp {}
