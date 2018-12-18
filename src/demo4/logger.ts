export const log: MethodDecorator = (_: object, __: string | symbol, descriptor: PropertyDescriptor) => {
    const original: () => any = descriptor.value;
    descriptor.value = function(...args: any) {
        console.log(`call method ${original.name} with args ${JSON.stringify(args)}`);
        return original.apply(this, args);
    };
};
