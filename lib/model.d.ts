import 'reflect-metadata';
export interface ModelType {
    _type?: string;
    _key?: string;
    _id?: string;
    _rev?: string;
}
export declare class Model<Type extends ModelType> implements ModelType {
    _type: string | undefined;
    _key: string | undefined;
    _id: string | undefined;
    _rev: string | undefined;
    constructor(data: Type);
    toJSON(): any;
    get(groups: string[], locale?: string): any;
}
