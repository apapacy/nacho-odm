import 'reflect-metadata';
import { enumerable, property } from './decorators';

export interface TranslatableType {
  en?: string,
  toJSON?: any
}

export class Translatable implements TranslatableType{

    public en?: string;

    constructor({ en }: TranslatableType) {
      this.en = en;
    }


    toJSON() {
        return Object.assign({}, this);
    }
}
