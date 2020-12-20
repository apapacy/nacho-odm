"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enumerable = void 0;
function enumerable(value) {
    return function enumerableFabrica(target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
exports.enumerable = enumerable;
