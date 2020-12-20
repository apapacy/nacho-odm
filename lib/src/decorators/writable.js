"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writable = void 0;
function writable(value) {
    return function writableFabrica(target, propertyKey, descriptor) {
        descriptor.writable = value;
    };
}
exports.writable = writable;
