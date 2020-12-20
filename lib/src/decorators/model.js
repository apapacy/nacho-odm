"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.model = void 0;
function model(Constructor) {
    return (target, propertyKey, descriptor) => {
        const originalValue = descriptor.value;
        descriptor.value = async function (...args) {
            const plainData = await originalValue.apply(this, args);
            return new Constructor(plainData);
        };
    };
}
exports.model = model;
