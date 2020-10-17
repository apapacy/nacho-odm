import { setDescriptor } from './descriptor';
import { Translatable } from '../translatable';

export function translatable(Type?:  new(...args: any[]) => void) {
  return (target: any, propertyKey: string | symbol, descriptor?: PropertyDescriptor): void => {
      setDescriptor(target, propertyKey, 'translatable', true);
      setDescriptor(target, propertyKey, 'type', Type || Translatable);
    }
}
