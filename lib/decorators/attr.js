"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const descriptor_1 = require("./descriptor");
function attr(Type) {
    return (target, propertyKey, descriptor) => {
        descriptor_1.setDescriptor(target, propertyKey, 'attr', true);
        if (Type) {
            descriptor_1.setDescriptor(target, propertyKey, 'type', Type);
        }
        if (descriptor) {
            descriptor.enumerable = true;
        }
    };
}
exports.attr = attr;