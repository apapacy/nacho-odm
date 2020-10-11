import { setDescriptor } from './descriptor';

export function object(Type?: Function) {
  return (target: any, propertyKey: string | symbol, descriptor?: PropertyDescriptor): void => {
      if (Type) {
        setDescriptor(target, propertyKey, 'type', Type);
      }
      if (descriptor) {
          descriptor.enumerable = true;
      }
    }
}
