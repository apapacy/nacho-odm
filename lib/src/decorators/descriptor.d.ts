export declare class Descriptor {
    attr: boolean;
    array: boolean;
    required: boolean;
    getter: boolean;
    constr?: new (...args: any[]) => void;
    groups?: string[];
    translatable: boolean;
}
export declare function setDescriptor(target: any, propertyKey: string | symbol, key: string, value: any): void;
export declare function getDescriptor(target: any, propertyKey: string | symbol): Descriptor;
export declare function getDescriptors(target: any): any;
