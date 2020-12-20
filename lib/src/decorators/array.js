"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.array = void 0;
const descriptor_1 = require("./descriptor");
function array(Constructor) {
    return (target, propertyKey) => {
        descriptor_1.setDescriptor(target, propertyKey, 'array', true);
        if (Constructor) {
            descriptor_1.setDescriptor(target, propertyKey, 'constr', Constructor);
        }
    };
}
exports.array = array;
