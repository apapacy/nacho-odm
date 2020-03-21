import 'reflect-metadata';

const meta = Symbol('nacho:desriptors');

export class Descriptor {
    public property?: boolean;
    public required = true;
    public type?: new (...args: any[]) => void;
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
    Reflect.defineMetadata(meta, descriptors, target)
}

export function getDescriptor(target: any, propertyKey: string | symbol): Descriptor  {
    return Reflect.getMetadata(meta, target)[propertyKey];
}

export function getDescriptors(target: any): any  {
    console.log( Reflect.getMetadataKeys(target))
    return Reflect.getMetadata(meta, target);
}