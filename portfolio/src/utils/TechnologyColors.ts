import { technologyColors, technologyAccentColors } from "../technologyColors";

export const getTechnologyAccentColor = (key: string) : string => 
{
    return technologyAccentColors[key] || '#FFFFFF';
}

export const getTechnologyColor = (key: string): string => {
    return technologyColors[key] || '#000000';
}