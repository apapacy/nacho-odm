export function enumerable(value: boolean) {
    return function enumerableFabrica(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
        descriptor.enumerable = value;
    };
}
