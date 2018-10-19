
export const coursePassed = (score: number): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        if (score >= 0 && score <= 100) {
            resolve(score >= 75);
        } else {
            reject(`Invalid score has been provided: '${score}'.`);
        }
    });
};
