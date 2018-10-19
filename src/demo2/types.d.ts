export interface Lengthy {
    length: number;
}

export interface GetAware<T> {
    get(idx: number): T;
}

export interface SetAware<T> {
    set(idx: number, value: T): void;
}
