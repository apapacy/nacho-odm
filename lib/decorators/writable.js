"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function writable(value) {
    return function writableFabrica(target, propertyKey, descriptor) {
        descriptor.writable = value;
    };
}
exports.writable = writable;
