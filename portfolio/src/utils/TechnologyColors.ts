import { technologyColors } from "../technologyColors";

export const getTechnologyAccentColor = (key: string) : string => 
{
    return technologyColors[key].accent || '#FFFFFF';
}

export const getTechnologyColor = (key: string): string => {
    return technologyColors[key].primary || '#000000';
}