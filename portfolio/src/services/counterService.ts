interface Response {
    value: number;
}

export const getViews = async (): Promise<number | undefined> => {
    try
    {
        const corsProxyUrl = 'https://corsproxy.io/?';
        const targetUrl = 'https://abacus.jasoncameron.dev/hit/villeruokonen.github.io/pofo/';
        const response = await fetch(corsProxyUrl + encodeURIComponent(targetUrl));
        if (!response.ok) {
            return undefined;
        }
        const data = await response.json() as Response;
        return data?.value;
    }
    catch (error) {
        console.error('Error fetching view count:', error);
        return undefined;
    }
}