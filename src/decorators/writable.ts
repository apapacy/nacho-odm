export function writable(value: boolean) {
    return function writableFabrica(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    };
}
