import 'reflect-metadata';
import { enumerable } from './decorators';

export class Model<IType> {
    protected __DATA__: IType;

    constructor(data: IType) {
        this.__DATA__ = data;
    }

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

    @enumerable(false)
    protected getData(): IType {
        return this.__DATA__;
    }

    @enumerable(false)
    protected setData(data: IType) {
        this.__DATA__ = data;
    }
}
