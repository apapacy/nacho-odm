"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const descriptor_1 = require("./descriptor");
function optional(Type) {
    return (target, propertyKey, descriptor) => {
        descriptor_1.setDescriptor(target, propertyKey, 'required', false);
        if (Type) {
            descriptor_1.setDescriptor(target, propertyKey, 'type', Type);
        }
    };
}
exports.optional = optional;
