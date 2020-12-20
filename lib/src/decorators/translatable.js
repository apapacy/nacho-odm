"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translatable = void 0;
const descriptor_1 = require("./descriptor");
const translatable_1 = require("../translatable");
function translatable(Constructor) {
    return (target, propertyKey) => {
        if (!(Constructor instanceof translatable_1.Translatable.constructor)) {
            throw new Error(`${Constructor} not instanceof ${translatable_1.Translatable}`);
        }
        descriptor_1.setDescriptor(target, propertyKey, 'translatable', true);
        descriptor_1.setDescriptor(target, propertyKey, 'constr', Constructor);
    };
}
exports.translatable = translatable;
