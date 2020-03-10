export declare class Model<IType> {
    private __data__;
    constructor(data: IType);
    getData(): IType;
    setData(data: IType): void;
    toJSON(): any;
}
