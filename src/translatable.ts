export interface TranslatableType {
    en?: string;
    toJSON?: any;
}

export class Translatable implements TranslatableType {
    public en!: string;

    constructor(translations: TranslatableType) {
        Object.assign(this, translations);
    }

    toJSON() {
        return Object.assign({}, this);
    }
}
