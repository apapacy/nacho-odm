import { setDescriptor } from './descriptor';

export function array(Constructor?: new (...args: any[]) => void) {
    return (target: any, propertyKey: string | symbol): void => {
        setDescriptor(target, propertyKey, 'array', true);
        if (Constructor) {
            setDescriptor(target, propertyKey, 'constr', Constructor);
        }
    };
}
