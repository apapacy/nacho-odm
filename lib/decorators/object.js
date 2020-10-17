"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const descriptor_1 = require("./descriptor");
function object(Type) {
    return (target, propertyKey, descriptor) => {
        if (Type) {
            descriptor_1.setDescriptor(target, propertyKey, 'type', Type);
        }
    };
}
exports.object = object;
