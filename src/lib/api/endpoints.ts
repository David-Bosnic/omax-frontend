const API_URL = import.meta.env.VITE_API_URL.toString();
import { goto } from '$app/navigation';
import { currentTopUpInfo } from '$lib/stores';
import { get } from 'svelte/store';

export async function getPartnerInfo() {
    try {
        const res = await fetch(API_URL);

        if (!res.ok) {
            console.error(`Http Error! Status: ${res.status} ${res.statusText}`);
            return new Response(JSON.stringify({ error: `Failed to fetch from Django: ${res.status}` }), {
                status: res.status
            });
        }

        const planJson = await res.json();
        return new Response(JSON.stringify(planJson), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error in GET handler:', error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}

export async function postTopUp(plan_id: string, iccid_suffix: string, email: string) {
    const endpoint = `${API_URL}/topup/`;
    const topup = get(currentTopUpInfo);
    try {
        const res = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                plan: plan_id,
                iccid_suffix: iccid_suffix,
                email: email
            })
        });
        if (!res.ok) {
            console.error(`Http Error! Status: ${res.status} ${res.statusText}`);
            return new Response(JSON.stringify({ error: `Failed to fetch from Django: ${res.status}` }), {
                status: res.status
            });
        }
        const responseData = await res.json();
        console.log('topup created:', responseData);
        goto(`/topup/${topup.id}`);
        return responseData;
    } catch (error) {
        console.error('Error creating topup:', error);
        goto('/fail');
        throw error;
    }
}

export async function getTopUpStatus() {
    const topup = get(currentTopUpInfo);
    const endpoint = `${API_URL}/topup/status/${topup.id}`;
    try {
        const res = await fetch(endpoint);

        if (!res.ok) {
            console.error(`Error from Django: ${res.status} ${res.statusText}`);
            return new Response(JSON.stringify({ error: `Failed to fetch from Django: ${res.status}` }), {
                status: res.status
            });
        }

        const topUpStatusJson = await res.json();
        return new Response(JSON.stringify(topUpStatusJson), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error in GET handler:', error);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
