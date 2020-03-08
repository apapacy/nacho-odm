export function enumerable(value: boolean) {
    return function (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor
    ): void {
      descriptor.enumerable = value;
    };
  }