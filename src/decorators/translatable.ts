import { setDescriptor } from './descriptor';
import { Translatable } from '../translatable';

export function translatable(Constructor?:  new(...args: any[]) => void) {
  return (target: any, propertyKey: string | symbol, descriptor?: PropertyDescriptor): void => {
      if (!(Constructor instanceof Translatable.constructor)) {
        throw new Error(`${Constructor} not instanceof ${Translatable}`);
      }
      setDescriptor(target, propertyKey, 'translatable', true);
      setDescriptor(target, propertyKey, 'constr', Constructor);
    }
}
