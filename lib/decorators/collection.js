"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function collection(Constructor) {
    return (target, propertyKey, descriptor) => {
        const originalValue = descriptor.value;
        descriptor.value = async function (...args) {
            const plainData = await originalValue.apply(this, args);
            const data = new Array();
            plainData.forEach((item) => data.push(new Constructor(item)));
            return data;
        };
    };
}
exports.collection = collection;
