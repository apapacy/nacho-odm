import { setDescriptor } from './descriptor';

export function object(Constructor?: new (...args: any[]) => void) {
    return (target: any, propertyKey: string | symbol): void => {
        if (Constructor) {
            setDescriptor(target, propertyKey, 'constr', Constructor);
        }
    };
}
