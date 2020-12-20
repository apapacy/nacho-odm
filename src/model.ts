import 'reflect-metadata';
import { optional, persistent, group, Descriptor, getDescriptors } from './decorators';

export interface ModelType {
    _type?: string;
    _key?: string;
    _id?: string;
    _rev?: string;
    toJSON(): any;
}

export class Model<Type extends ModelType> implements ModelType {
    @persistent()
    @optional()
    @group('_all')
    public _type?: string;

    @persistent()
    @optional()
    @group('_all')
    public _key?: string;

    @persistent()
    @optional()
    @group('_all')
    public _id?: string;

    @persistent()
    @optional()
    @group('_all')
    public _rev?: string;

    constructor(data: any) {
        const prototype = Object.getPrototypeOf(this);
        const descriptors = getDescriptors(prototype);
        for (const name of Object.keys(descriptors)) {
            const descriptor = descriptors[name] as Descriptor;
            if (descriptor.required && descriptor.attr && !descriptor.array && typeof data[name] === 'undefined') {
                throw new Error(`${this.constructor}[${name}] is requierd`);
            }
            if (descriptor.attr && !descriptor.getter) {
                if (descriptor.constr) {
                    if (descriptor.array) {
                        (this as any)[name] = [];
                        for (const item of data[name]) {
                            (this as any)[name].push(new descriptor.constr(item));
                        }
                    } else {
                        (this as any)[name] = new descriptor.constr(data[name]);
                    }
                } else {
                    if (descriptor.array) {
                        (this as any)[name] = [];
                        for (const item of data[name]) {
                            (this as any)[name].push(item);
                        }
                    } else {
                        (this as any)[name] = data[name];
                    }
                }
            }
        }
    }

    public toJSON(): any {
        const proto = Object.getPrototypeOf(this);
        const descriptors = getDescriptors(proto);
        const jsonObject: any = {};
        for (const name of Object.keys(descriptors)) {
            const descriptor = descriptors[name] as Descriptor;
            if (descriptor.attr && descriptor.array) {
                jsonObject[name] = [];
                (this as any)[name].forEach((item: any) => {
                    if (typeof (item as any)[name] === 'object') {
                        jsonObject[name].push(item.toJSON());
                    } else {
                        jsonObject[name].push(item);
                    }
                });
            } else if (descriptor.attr) {
                if (typeof (this as any)[name] === 'object') {
                    jsonObject[name] = (this as any)[name].toJSON();
                } else {
                    jsonObject[name] = (this as any)[name];
                }
            }
        }
        return jsonObject;
    }

    public get(groups: string[], locale?: string): Type {
        const prototype = Object.getPrototypeOf(this);
        const descriptors = getDescriptors(prototype);
        const jsonObject: any = {};
        for (const name of Object.keys(descriptors)) {
            const descriptor = descriptors[name] as Descriptor;
            if (descriptor?.groups?.[0] === '_all' || descriptor?.groups?.some((item) => groups?.indexOf(item) > -1)) {
                if (descriptor?.array) {
                    if (descriptor.constr) {
                        jsonObject[name] = [];
                        for (const item of (this as any)[name]) {
                            jsonObject[name].push(item.get(groups, locale));
                        }
                    } else {
                        jsonObject[name] = [...(this as any)[name]];
                    }
                    continue;
                }
                if (descriptor?.constr) {
                    if (descriptor.translatable) {
                        if (locale) {
                            jsonObject[name] = (this as any)[name][locale];
                        } else {
                            jsonObject[name] = Object.assign((this as any)[name]);
                        }
                    } else {
                        jsonObject[name] = (this as any)[name].get(groups, locale);
                    }
                } else {
                    jsonObject[name] = (this as any)[name];
                }
            }
        }
        return jsonObject;
    }
}
