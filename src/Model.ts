import 'reflect-metadata';
import {enumerable} from './decorators'

export class Model<IType> {

    private __data__: IType

    constructor(data: IType) {
        this.__data__ = data;
    }

    @enumerable(false)
    getData(): IType {
        return this.__data__;
    }

    @enumerable(false)
    setData(data: IType) {
        this.__data__ = data;
    }

    public toJSON(): any {
        const meta = 'nacho:property';
        const proto = Object.getPrototypeOf(this);
        const jsonObj: any = {};
        for (let name in this) {
            console.log(name)
            if (Reflect.getMetadata(meta, proto, name)) {
                jsonObj[name] = (this as any)[name];
            }
        };
        return jsonObj;
    }
}
