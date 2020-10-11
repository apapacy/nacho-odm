import * as ts from 'typescript';
import 'reflect-metadata';
import { optional, property, group, Descriptor, getDescriptors } from './decorators';

export interface ModelType {
    _type?: string,
    _key?: string,
    _id?: string,
    _rev?: string
}

export class Model<Type extends ModelType> implements ModelType {

    @property()
    @optional()
    @group('_all')
    public _type: string|undefined;

    @property()
    @optional()
    @group('_all')
    public _key: string|undefined;

    @property()
    @optional()
    @group('_all')
    public _id: string|undefined;

    @property()
    @optional()
    @group('_all')
    public _rev: string|undefined;

    constructor(data: Type) {
      const proto = Object.getPrototypeOf(this);
      const descriptors = getDescriptors(proto);
      for (const name in descriptors) {
          const descriptor = descriptors[name] as Descriptor;
          if (descriptor.required
              && descriptor.property
              && !descriptor.array
              && typeof((data as any)[name]) === 'undefined') {
                console.log('============================================', name, descriptor)
                console.log(data)
                console.log(name, (data as any)[name])
              throw new Error(`${this.constructor}[${name}] is requierd`);
          }
          if (descriptor.property)  {
              if (descriptor.type) {
                  if (descriptor.array) {
                    (this as any)[name] = new Array();
                    if ((data as any)[name]) {
                      (data as any)[name].forEach((item: any) => (this as any)[name].push(new (descriptor.type || Object)(item)));
                    }
                  } else {
                      (this as any)[name] = new descriptor.type((data as any)[name]);
                  }
              } else {
                  if (descriptor.array) {
                    (this as any)[name] = new Array();
                    (data as any)[name].forEach((item: any) => (this as any)[name].push((data as any)[name]));
                  } else {
                      (this as any)[name] = (data as any)[name];
                  }
              }
          }
      }
    };


    public toJSON(): any {
        const proto = Object.getPrototypeOf(this);
        const descriptors = getDescriptors(proto);
        const jsonObj: any = {};
        for (const name in descriptors) {
            console.log(name);
            console.log((this as any)[name]);
            const descriptor = descriptors[name] as Descriptor;
            console.log(descriptor)
            if (descriptor.array) {
                (this as any)[name].forEach((item: any) => {
                  if (typeof (item as any)[name] === 'object') {
                      jsonObj[name] = (item as any)[name].toJSON();
                  } else {
                      jsonObj[name] = (item as any)[name];
                  }
                });
            } else if (descriptor.property) {
                if (typeof (this as any)[name] === 'object') {
                    jsonObj[name] = (this as any)[name].toJSON();
                } else {
                    jsonObj[name] = (this as any)[name];
                }
            }
        }
        return jsonObj;
    }

    public get(groups: string[], locale?: string) {
        const proto = Object.getPrototypeOf(this);
        const descriptors = getDescriptors(proto);
        const jsonObj: any = {};
        for (const name in descriptors) {
            const descriptor = descriptors[name] as Descriptor;
            if (descriptor?.groups?.[0] === '_all'
                || descriptor?.groups?.some(item => groups?.indexOf(item) > -1)) {
                if (typeof (this as any)[name] === 'object') {
                    if (descriptor.translatable) {
                        if (locale) {
                            jsonObj[name] = (this as any)[name][locale];
                        } else {
                            jsonObj[name] = Object.assign((this as any)[name]);
                        }
                    } else {
                        jsonObj[name] = (this as any)[name].get(groups, locale);
                    }
                } else {
                    jsonObj[name] = (this as any)[name];
                }
            }
        }
        return jsonObj;
    }

}
