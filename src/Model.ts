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
        const proto = Object.getPrototypeOf(this);
        const jsonObj: any = Object.assign({}, this);
      
        Object.entries(Object.getOwnPropertyDescriptors(proto))
          .filter(([key, descriptor]) => typeof descriptor.get === 'function')
          .map(([key, descriptor]) => {
            if (descriptor && key[0] !== '_') {
              try {
                const val = (this as any)[key];
                jsonObj[key] = val;
              } catch (error) {
                console.error(`Error calling getter ${key}`, error);
              }
            }
          });
      
        return jsonObj;    }
}