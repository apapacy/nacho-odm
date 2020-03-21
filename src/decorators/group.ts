import { setDescriptor } from './descriptor';

export function group(...args: string[]) {
    return (target: any, propertyKey: string | symbol, descriptor?: PropertyDescriptor): void => {
        setDescriptor(target, propertyKey, 'groups', Object.assign([], args));
    }
}
