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

export const mockPartner: Partner = {
    id: 'partner_001',
    name: 'MobileConnect',
    color_1_code: '#2563eb',
    plans: [
        {
            id: 'plan_001',
            days_valid: '30',
            title: 'Essential Plan',
            retail_price: '$25.00',
            description:
                'Perfect for light users who need basic connectivity for calls, texts, and light browsing.',
            data_volume_gb: 5,
            cover_image: 'https://example.com/images/essential-plan.jpg',
            coverage: ['United States', 'Canada'],
            is_recommended: false
        },
        {
            id: 'plan_002',
            days_valid: '30',
            title: 'Unlimited Pro',
            retail_price: '$45.00',
            description:
                'Our most popular plan with unlimited data, perfect for streaming, gaming, and heavy usage.',
            data_volume_gb: -1, // -1 indicates unlimited
            cover_image: 'https://example.com/images/unlimited-pro.jpg',
            coverage: ['United States', 'Canada', 'Mexico'],
            is_recommended: true
        },
        {
            id: 'plan_003',
            days_valid: '7',
            title: 'Travel Weekly',
            retail_price: '$15.00',
            description: 'Short-term plan ideal for travelers and temporary usage needs.',
            data_volume_gb: 3,
            cover_image: null,
            coverage: ['United States', 'Canada', 'Mexico', 'United Kingdom', 'France', 'Germany'],
            is_recommended: false
        },
        {
            id: 'plan_004',
            days_valid: '90',
            title: 'Family Share',
            retail_price: '$120.00',
            description:
                'Long-term family plan with generous data allowance and multi-device support for up to 4 lines.',
            data_volume_gb: 100,
            cover_image: 'https://example.com/images/family-share.jpg',
            coverage: ['United States', 'Canada'],
            is_recommended: false
        },
        {
            id: 'plan_005',
            days_valid: '30',
            title: 'Business Premium',
            retail_price: '$60.00',
            description:
                'Enterprise-grade plan with priority network access, unlimited hotspot, and business features.',
            data_volume_gb: -1, // unlimited
            cover_image: 'https://example.com/images/business-premium.jpg',
            coverage: [
                'United States',
                'Canada',
                'Mexico',
                'United Kingdom',
                'France',
                'Germany',
                'Japan',
                'Australia'
            ],
            is_recommended: false
        }
    ]
};
