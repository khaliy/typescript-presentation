export interface Histogram {
    [char: string]: number;
}

export const histogram = (text: string, callback: (h: Histogram) => void) => {
    const hist: Histogram = {};
    for (const char of text) {
        hist[char] = ++hist[char] || 1;
    }
    return callback(hist);
};
