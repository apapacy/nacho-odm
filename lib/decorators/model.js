"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function model(Type) {
    return (target, propertyKey, descriptor) => {
        const originalValue = descriptor.value;
        descriptor.value = async function (...args) {
            const plainData = await originalValue.apply(this, args);
            return new Type(plainData);
        };
    };
}
exports.model = model;
