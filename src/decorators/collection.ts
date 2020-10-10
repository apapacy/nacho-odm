export function collection<Type>(Constructor: any) {
  return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor): void => {
      const originalValue = descriptor.value;
      descriptor.value = async function(...args: any[]) {
        const plainData = await originalValue.apply(this, args)
        const collection = new Array<Type>();
        plainData.forEach((item: any) => collection.push(new Constructor(item)));
        return collection;
      }
    }
}
