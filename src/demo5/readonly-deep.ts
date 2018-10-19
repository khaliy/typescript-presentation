import {Container} from '../demo2/container';

export type ReadonlyDeep<T> = {
    readonly [P in keyof T]: T[P]; // ReadonlyDeep<T[P]>
};

export class SeemsImmutableCollection<T extends object> extends Container<T> {
    constructor(protected readonly items: T[]) {
        super(items as T[]);
    }

    public getItem(idx: number): ReadonlyDeep<T> {
        return this.items[idx]; // https://github.com/Microsoft/TypeScript/issues/21592
    }
}
