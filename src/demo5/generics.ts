interface Lengthwise {
    length: number;
}

export type Identity<T> = (o: T) => T;
export type IdentityFrom<P> = <T extends P>(o: T) => T;

export type LogFn = <T> (prop: keyof T) => Identity<T>;

export const logFn: LogFn = <T>(prop: keyof T): Identity<T> => {
    return (o: T): T => {
        console.log(o[prop]);
        return o;
    };
};

export const logLength: IdentityFrom<Lengthwise> = <T extends Lengthwise> (o: T): T => {
    return logFn<T>('length')(o);
};
