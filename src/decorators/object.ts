import { setDescriptor } from './descriptor';

export function object(Type?:  new(...args: any[]) => void) {
  return (target: any, propertyKey: string | symbol, descriptor?: PropertyDescriptor): void => {
      if (Type) {
        setDescriptor(target, propertyKey, 'type', Type);
      }
      if (descriptor) {
          descriptor.enumerable = true;
      }
    }
}
