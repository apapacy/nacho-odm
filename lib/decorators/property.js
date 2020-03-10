"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function property() {
    return (target, propertyKey) => {
        Object.defineProperty(target, propertyKey, {
            get() { return this.__data__[propertyKey]; },
            set(value) {
                this.__data__[propertyKey] = value;
                console.log(target);
            },
            enumerable: true,
            configurable: true,
        });
    };
}
exports.property = property;
