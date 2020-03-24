import 'reflect-metadata';
import { enumerable, property } from './decorators';

export interface TranslatableType {
  en?: string,
  ru?: string,
  uk?: string
}

export class Translatable implements TranslatableType{

    public en?: string;
    public ru?: string;
    public uk?: string;

    constructor({ ru, en, uk }: TranslatableType) {
      this.ru = ru;
      this.en = en;
      this.uk = uk;
    }


    toJSON() {
        return Object.assign({}, this);
    }
}
