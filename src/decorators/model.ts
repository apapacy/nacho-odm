export function model(Constructor: new (...args: any[]) => void) {
    return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): void => {
        const originalValue = descriptor.value;
        descriptor.value = async function (...args: any[]) {
            const plainData = await originalValue.apply(this, args);
            return new Constructor(plainData);
        };
    };
}
