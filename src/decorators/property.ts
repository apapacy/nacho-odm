import { setDescriptor } from './descriptor';

export function property(Type?: Function) {
  return (target: any, propertyKey: string | symbol, descriptor?: PropertyDescriptor): void => {
      setDescriptor(target, propertyKey, 'property', true);
      if (Type) {
        setDescriptor(target, propertyKey, 'type', Type);
      }
      if (descriptor) {
          descriptor.enumerable = true;
      }
    }
}
