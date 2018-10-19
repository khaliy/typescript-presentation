function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

class Disposable {
    public isDisposed: boolean = false;
    public dispose() {
        this.isDisposed = true;
    }

}

// Activatable Mixin
class Activatable {
    public isActive: boolean = false;
    public deactivate(): boolean {
        return this.isActive = false;
    }
    public activate(): boolean {
        return this.isActive = true;
    }
}

// @ts-ignore
export class SmartObject implements Disposable, Activatable {
    public isDisposed!: boolean;
    public isActive!: boolean;

    public dispose!: () => void;
    public deactivate!: () => boolean;
    protected activate!: () => boolean;

    public interact(): boolean {
        return this.activate();
    }

}
applyMixins(SmartObject, [Disposable, Activatable]);
