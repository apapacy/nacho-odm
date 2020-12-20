"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.group = void 0;
const descriptor_1 = require("./descriptor");
function group(...args) {
    return (target, propertyKey) => {
        descriptor_1.setDescriptor(target, propertyKey, 'groups', Object.assign([], args));
    };
}
exports.group = group;
