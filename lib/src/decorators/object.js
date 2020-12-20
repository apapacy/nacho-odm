"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.object = void 0;
const descriptor_1 = require("./descriptor");
function object(Constructor) {
    return (target, propertyKey) => {
        if (Constructor) {
            descriptor_1.setDescriptor(target, propertyKey, 'constr', Constructor);
        }
    };
}
exports.object = object;
