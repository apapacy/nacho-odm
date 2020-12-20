"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persistent = void 0;
const descriptor_1 = require("./descriptor");
function persistent(Constructor) {
    return (target, propertyKey) => {
        descriptor_1.setDescriptor(target, propertyKey, 'attr', true);
        if (Constructor) {
            descriptor_1.setDescriptor(target, propertyKey, 'constr', Constructor);
        }
    };
}
exports.persistent = persistent;
