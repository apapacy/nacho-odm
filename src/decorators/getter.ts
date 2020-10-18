import { setDescriptor } from './descriptor';

export function getter(Constructor?:  new(...args: any[]) => void) {
  return (target: any, propertyKey: string | symbol, descriptor?: PropertyDescriptor): void => {
      setDescriptor(target, propertyKey, 'getter', true);
      if (Constructor) {
        setDescriptor(target, propertyKey, 'constr', Constructor);
      }
    }
}
