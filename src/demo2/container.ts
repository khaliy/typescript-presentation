import {GetAware, Lengthy, SetAware} from './types';

export class Container<T> implements Lengthy, GetAware<T>, SetAware<T> {

    constructor(protected readonly items: T[]) {}

    public get(idx: number): T {
        return this.items[idx];
    }

    public set(idx: number, value: T): void {
        this.items[idx] = value;
    }

    public get length(): number {
        return this.items.length;
    }

}
