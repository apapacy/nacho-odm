"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optional = void 0;
const descriptor_1 = require("./descriptor");
function optional(Constructor) {
    return (target, propertyKey) => {
        descriptor_1.setDescriptor(target, propertyKey, 'required', false);
        if (Constructor) {
            descriptor_1.setDescriptor(target, propertyKey, 'constr', Constructor);
        }
    };
}
exports.optional = optional;
