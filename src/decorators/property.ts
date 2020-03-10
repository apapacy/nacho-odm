import 'reflect-metadata';

const meta = 'nacho:property';

export function property() {
    return (target: any, propertyKey: string | symbol, descriptor?: PropertyDescriptor): void => {
      Reflect.defineMetadata(meta, true, target, propertyKey);
      if (descriptor) {
          descriptor.enumerable = true;
      }
    }
}
