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
}