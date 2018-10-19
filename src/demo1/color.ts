export enum Color {
    Red = '#ff0000',
    Green = '#00ff00',
    Blue = '#0000ff'
}

export enum RGB {
    '#ff0000' = 'Red',
    '#00ff00' = 'Green',
    '#0000ff' = 'Blue'
}

export const color2RGB = (color: Color): RGB => {
    return RGB[color];
};

export const rgb2Color = (rgb: RGB): Color => {
    return Color[rgb];
};
