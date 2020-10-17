import { setDescriptor } from './descriptor';

export function attr(Type?:  new(...args: any[]) => void) {
  return (target: any, propertyKey: string | symbol, descriptor?: PropertyDescriptor): void => {
      setDescriptor(target, propertyKey, 'attr', true);
      if (Type) {
        setDescriptor(target, propertyKey, 'type', Type);
      }
    }
}
