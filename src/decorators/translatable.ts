import { setDescriptor } from './descriptor';
import { Translatable } from '../translatable';

export function translatable() {
  return (target: any, propertyKey: string | symbol, descriptor?: PropertyDescriptor): void => {
      setDescriptor(target, propertyKey, 'translatable', true);
      setDescriptor(target, propertyKey, 'type', Translatable);
    }
}
