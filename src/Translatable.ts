import 'reflect-metadata';
import { enumerable, property } from './decorators';

interface TranslatableType {
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
