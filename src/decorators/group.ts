import { setDescriptor } from './descriptor';

export function group(...args: string[]) {
    return (target: any, propertyKey: string | symbol): void => {
        setDescriptor(target, propertyKey, 'groups', Object.assign([], args));
    };
}
