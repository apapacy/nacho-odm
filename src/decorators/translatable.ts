import { setDescriptor } from './descriptor';
import { Translatable } from '../Translatable';

export function translatable(Type?: Function) {
  return (target: any, propertyKey: string | symbol, descriptor?: PropertyDescriptor): void => {
      setDescriptor(target, propertyKey, 'translatable', true);
      setDescriptor(target, propertyKey, 'type', Translatable);
    }
}
