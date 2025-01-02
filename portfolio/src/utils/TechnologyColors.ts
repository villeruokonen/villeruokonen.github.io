const technologyColors: { [key: string]: string } = {
    'React': '#61DAFB',
    'TypeScript': '#007ACC',
    'JavaScript': '#F7DF1E',
    'C#': '#68217A',
    'CPP': '#00599C',
    'NodeJS': '#68A063',
    'Unity': '#000000', 
    'Unreal': '#0E1128',
    'OpenGL': '#5586A4',
};

const technologyAccentColors: { [key: string]: string } = {
    'React': '#20232A',
    'TypeScript': '#FFFFFF',
    'JavaScript': '#000000',
    'C#': '#FFFFFF',
    'CPP': '#FFFFFF',
    'NodeJS': '#FFFFFF',
    'Unity': '#FFFFFF',
    'Unreal': '#FFFFFF',
    'OpenGL': '#FFFFFF',
};

export const getTechnologyAccentColor = (key: string) : string => 
{
    return technologyAccentColors[key] || '#FFFFFF';
}

export const getTechnologyColor = (key: string): string => {
    return technologyColors[key] || '#000000';
}