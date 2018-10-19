export interface Person {
    id: number;
    name: string;
    security?: string;
}

export type TamperFn<T> = (o: T, prop: keyof T) => T;
export type Identity<T> = (t: T) => T;

export const tamperProp = <T>(prop: keyof T, tamperFn: TamperFn<T>): Identity<T> => {
    return (o: T): T => {
        return tamperFn(o, prop);
    };
};

export const deleteTamperFn: TamperFn<any> = <T>(o: T, prop: keyof T): T => {
    delete o[prop];
    return o;
};

export const maskTamperFn = <T>(mask: any): TamperFn<T> => {
    return (o: T, prop: keyof T): T => {
        o[prop] = mask;
        return o;
    };
};
