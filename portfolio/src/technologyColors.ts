interface ColorPair {
    primary: string,
    accent: string
}

const technologyColors: { [key: string]: ColorPair; } = {
    'Ableton Live': {
        primary: '#000000',
        accent: '#FF5E00'
    },
    'ASP.NET': {
        primary: '#68217A',
        accent: '#FFFFFF'
    },
    'Blender': {
        primary: '#F5792A',
        accent: '#222222'
    },
    'C#': {
        primary: '#68217A',
        accent: '#FFFFFF'
    },
    'C++': {
        primary: '#00599C',
        accent: '#FFFFFF'
    },
    'GDScript': {
        primary: '#355570',
        accent: '#FFFFFF'
    },
    'Godot': {
        primary: '#478CBF',
        accent: '#FFFFFF'
    },
    'JavaScript': {
        primary: '#F7DF1E',
        accent: '#000000'
    },
    'NodeJS': {
        primary: '#68A063',
        accent: '#FFFFFF'
    },
    'OpenGL': {
        primary: '#5586A4',
        accent: '#FFFFFF'
    },
    'Photoshop': {
        primary: '#001E36',
        accent: '#31A8FF'
    },
    'React': {
        primary: '#20232A',
        accent: '#61DAFB'
    },
    'TypeScript': {
        primary: '#007ACC',
        accent: '#FFFFFF'
    },
    'Unity': {
        primary: '#000000',
        accent: '#D3D3D3'
    },
    'Unreal': {
        primary: '#0E1128',
        accent: '#FFFFFF'
    }
};

export { technologyColors }