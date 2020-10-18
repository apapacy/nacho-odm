import { setDescriptor } from './descriptor';

export function attr(Constructor?:  new(...args: any[]) => void) {
  return (target: any, propertyKey: string | symbol, descriptor?: PropertyDescriptor): void => {
      setDescriptor(target, propertyKey, 'attr', true);
      if (Constructor) {
        setDescriptor(target, propertyKey, 'constr', Constructor);
      }
    }
}
