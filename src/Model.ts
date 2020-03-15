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
