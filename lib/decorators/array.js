"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const descriptor_1 = require("./descriptor");
function array(Type) {
    return (target, propertyKey, descriptor) => {
        console.log('==============', propertyKey, Reflect.getMetadata("design:type", target, propertyKey));
        descriptor_1.setDescriptor(target, propertyKey, 'array', true);
        if (Type) {
            descriptor_1.setDescriptor(target, propertyKey, 'type', Type);
        }
    };
}
exports.array = array;
