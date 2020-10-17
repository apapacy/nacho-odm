"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function collection(Constructor) {
    return (target, propertyKey, descriptor) => {
        const originalValue = descriptor.value;
        descriptor.value = async function (...args) {
            const plainData = await originalValue.apply(this, args);
            const collection = new Array();
            plainData.forEach((item) => collection.push(new Constructor(item)));
            return collection;
        };
    };
}
exports.collection = collection;
