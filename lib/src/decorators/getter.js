"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getter = void 0;
const descriptor_1 = require("./descriptor");
function getter(Constructor) {
    return (target, propertyKey) => {
        descriptor_1.setDescriptor(target, propertyKey, 'getter', true);
        if (Constructor) {
            descriptor_1.setDescriptor(target, propertyKey, 'constr', Constructor);
        }
    };
}
exports.getter = getter;
