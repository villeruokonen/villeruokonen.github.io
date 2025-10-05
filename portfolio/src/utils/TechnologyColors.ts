import { technologyColors } from '../technologyColors';

const sanitizeKey = (key: string | null | undefined): string | null => {
    if (!key) return null;
    const trimmed = key.trim();
    return trimmed.length ? trimmed : null;
};

export const getTechnologyAccentColor = (key: string): string => {
    const k = sanitizeKey(key);
    return (k && technologyColors[k]?.accent) || '#FFFFFF';
};

export const getTechnologyColor = (key: string): string => {
    const k = sanitizeKey(key);
    return (k && technologyColors[k]?.primary) || '#000000';
};

export const getTechnologyColors = (key: string): { primary: string; accent: string } => ({
    primary: getTechnologyColor(key),
    accent: getTechnologyAccentColor(key)
});