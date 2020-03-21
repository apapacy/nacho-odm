import 'reflect-metadata';

const meta = 'nacho:desriptors';

export class Descriptor {
    public property?: boolean;
    public required = true;
    public type?: new (...args: any[]) => void;
}

export function setDescriptor(target: any, propertyKey: string | symbol, key: string, value: any) {
    let descriptors:any;
    if (Reflect.hasOwnMetadata(meta, target)) {
        descriptors = Reflect.getMetadata(meta, target);
    } else {
        descriptors = {};
    }
    if (!descriptors[propertyKey]) {
        descriptors[propertyKey] = new Descriptor();
    }
    descriptors[propertyKey][key] = value;
    Reflect.defineMetadata(meta, descriptors, target)
    console.log(meta, descriptors, target)
}

export function getDescriptor(target: any, propertyKey: string | symbol): Descriptor  {
    return Reflect.getMetadata(meta, target)[propertyKey];
}

export function getDescriptors(target: any): any  {
    return Reflect.getMetadata(meta, target);
}