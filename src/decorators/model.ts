export function model(Type: any) {
  return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): void => {
      const originalValue = descriptor.value;
      descriptor.value = async function(...args: any[]) {
        const plainData = await originalValue.apply(this, args)
        return new Type(plainData);
      }
    }
}
