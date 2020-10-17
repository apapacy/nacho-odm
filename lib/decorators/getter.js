"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const descriptor_1 = require("./descriptor");
function getter(Type) {
    return (target, propertyKey, descriptor) => {
        descriptor_1.setDescriptor(target, propertyKey, 'getter', true);
        if (Type) {
            descriptor_1.setDescriptor(target, propertyKey, 'type', Type);
        }
    };
}
exports.getter = getter;
