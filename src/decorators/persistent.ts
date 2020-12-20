import { setDescriptor } from './descriptor';

export function persistent(Constructor?: new (...args: any[]) => void) {
    return (target: any, propertyKey: string | symbol): void => {
        setDescriptor(target, propertyKey, 'attr', true);
        if (Constructor) {
            setDescriptor(target, propertyKey, 'constr', Constructor);
        }
    };
}
