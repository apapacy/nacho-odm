import * as ts from 'typescript';
import 'reflect-metadata';
import { optional, property, Descriptor, getDescriptors } from './decorators';

export interface ModelType {
    _type?: string,
    _id?: string,
    _rev?: string
}

export class Model<Type extends ModelType> implements ModelType {

    @property()
    @optional()
    public _type: string|undefined;

    @property()
    @optional()
    public _id: string|undefined;

    @property()
    @optional()
    public _rev: string|undefined;

    constructor(data: Type) {
      this._id = data._id;
      const proto = Object.getPrototypeOf(this);
      const descriptors = getDescriptors(proto);
      for (const name in descriptors) {
          const descriptor = descriptors[name] as Descriptor;
          if (descriptor.required && descriptor.property && typeof((data as any)[name]) === 'undefined') {
              throw new Error(`${this.constructor}[${name}] is requierd`);
          }
          if (descriptor.property)  {
              if (descriptor.type) {
                  (this as any)[name] = new descriptor.type((data as any)[name]);
              } else {
                  console.log(name);
                  (this as any)[name] = (data as any)[name];
              }
          }
      }
    };


    public toJSON(): any {
        const proto = Object.getPrototypeOf(this);
        const descriptors = getDescriptors(proto);
        const jsonObj: any = {};
        for (const name in descriptors) {
            const descriptor = descriptors[name] as Descriptor;
            if (descriptor.property) {
                if (typeof (this as any)[name] === 'object') {
                    jsonObj[name] = (this as any)[name].toJSON();
                } else {
                    jsonObj[name] = (this as any)[name];
                }
            }
        }
        return jsonObj;
    }

    public group(...groups: string[]) {
        const proto = Object.getPrototypeOf(this);
        const descriptors = getDescriptors(proto);
        const jsonObj: any = {};
        for (const name in descriptors) {
            console.log(name)
            const descriptor = descriptors[name] as Descriptor;
            console.log(descriptor)
            console.log(typeof (this as any)[name])
            if (descriptor?.groups?.some(item => groups?.indexOf(item) > -1)) {
                if (typeof (this as any)[name] === 'object') {
                    jsonObj[name] = (this as any)[name].group(...groups);
                } else {
                    jsonObj[name] = (this as any)[name];
                }
            }
        }
        return jsonObj;        
    }

}
