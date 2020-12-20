"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Translatable = void 0;
class Translatable {
    constructor(translations) {
        Object.assign(this, translations);
    }
    toJSON() {
        return Object.assign({}, this);
    }
}
exports.Translatable = Translatable;
