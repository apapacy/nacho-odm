"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const descriptor_1 = require("./descriptor");
function group(...args) {
    return (target, propertyKey, descriptor) => {
        descriptor_1.setDescriptor(target, propertyKey, 'groups', Object.assign([], args));
    };
}
exports.group = group;
