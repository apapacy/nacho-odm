import { setDescriptor } from './descriptor';

export function optional(Type?:  new(...args: any[]) => void) {
  return (target: any, propertyKey: string | symbol, descriptor?: PropertyDescriptor): void => {
      setDescriptor(target, propertyKey, 'required', false);
      if (Type) {
        setDescriptor(target, propertyKey, 'type', Type);
      }
    }
}
