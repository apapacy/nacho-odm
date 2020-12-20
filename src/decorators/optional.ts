import { setDescriptor } from './descriptor';

export function optional(Constructor?: new (...args: any[]) => void) {
    return (target: any, propertyKey: string | symbol, descriptor?: PropertyDescriptor): void => {
        setDescriptor(target, propertyKey, 'required', false);
        if (Constructor) {
            setDescriptor(target, propertyKey, 'constr', Constructor);
        }
    };
}
