import { setDescriptor } from './descriptor';

export function array(Type?: Function) {
  return (target: any, propertyKey: string | symbol, descriptor?: PropertyDescriptor): void => {
      setDescriptor(target, propertyKey, 'attr', true);
      setDescriptor(target, propertyKey, 'array', true);
      if (Type) {
        setDescriptor(target, propertyKey, 'type', Type);
      }
      if (descriptor) {
          descriptor.enumerable = true;
      }
    }
}
