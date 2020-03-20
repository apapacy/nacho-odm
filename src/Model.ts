import * as ts from 'typescript';
import 'reflect-metadata';
import { enumerable, property } from './decorators';

export class Model<IType> {

    @property()
    public _type: string|undefined;

    @property()
    public _id: string|undefined;

    @property()
    public _rev: string|undefined;

    constructor(data: any) {
      this._id = data._id;
      const meta = 'nacho:property';
      const properties = 'nacho:properties';
      const propertiesTypes = 'nacho:properties:types';
      const proto = Object.getPrototypeOf(this);
      const list: string[] = Reflect.getMetadata(properties, proto)
      console.log(list);
      const types: string[] = Reflect.getMetadata(propertiesTypes, proto)
      console.log(types);
      const jsonObj: any = {};
      for (const name of list) {
          if (Reflect.getMetadata(meta, proto, name)) {
              const Type = (types as any)[name];
              if (Type) {
                  console.log(name, Type);
                  (this as any)[name] = new Type((data as any)[name]);
              } else {
                  console.log(name);
                  (this as any)[name] = (data as any)[name];
              }
          }
      }
  };


    public toJSON(): any {
        const meta = 'nacho:property';
        const proto = Object.getPrototypeOf(this);
        const jsonObj: any = {};
        for (const name in this) {
            if (Reflect.getMetadata(meta, proto, name)) {
                if (typeof (this as any)[name] === 'object') {
                    jsonObj[name] = (this as any)[name].toJSON();
                } else {
                    jsonObj[name] = (this as any)[name];
                }
            }
        }
        return jsonObj;
    }

}
