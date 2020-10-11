import { setDescriptor } from './descriptor';

export function attr(Type?: Function) {
  return (target: any, propertyKey: string | symbol, descriptor?: PropertyDescriptor): void => {
      setDescriptor(target, propertyKey, 'attr', true);
      if (Type) {
        setDescriptor(target, propertyKey, 'type', Type);
      }
      if (descriptor) {
          descriptor.enumerable = true;
      }
    }
}
