const meta = Symbol('nacho:desriptors');

export class Descriptor {
    public attr = false;
    public array = false;
    public required = true;
    public getter = false;
    public constr?: new (...args: any[]) => void;
    public groups?: string[];
    public translatable = false;
}

export function setDescriptor(target: any, propertyKey: string | symbol, key: string, value: any) {
    let descriptors = Reflect.getOwnMetadata(meta, target);
    if (!descriptors) {
        const parentDescriptors = Reflect.getMetadata(meta, target);
        if (parentDescriptors) {
            descriptors = Object.assign({}, parentDescriptors);
        } else {
            descriptors = {};
        }
    }
    if (!descriptors[propertyKey]) {
        descriptors[propertyKey] = new Descriptor();
    }
    descriptors[propertyKey][key] = value;
    Reflect.defineMetadata(meta, descriptors, target);
}

export function getDescriptor(target: any, propertyKey: string | symbol): Descriptor {
    return Reflect.getMetadata(meta, target)[propertyKey];
}

export function getDescriptors(target: any): any {
    return Reflect.getMetadata(meta, target);
}
