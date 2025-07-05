import { technologyColors } from "../technologyColors";

export const getTechnologyAccentColor = (key: string) : string => 
{
    if (key === null) return '#000000';
    return technologyColors[key]?.accent || '#FFFFFF';
}

export const getTechnologyColor = (key: string): string => {
    if (key === null) return '#000000';
    return technologyColors[key]?.primary || '#000000';
}