export interface TranslatableType {
    en?: string;
    toJSON?: any;
}
export declare class Translatable implements TranslatableType {
    en: string;
    constructor(translations: TranslatableType);
    toJSON(): {} & this;
}
