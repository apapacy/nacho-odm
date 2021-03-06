"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const descriptor_1 = require("./descriptor");
const translatable_1 = require("../translatable");
function translatable(Type) {
    return (target, propertyKey, descriptor) => {
        descriptor_1.setDescriptor(target, propertyKey, 'translatable', true);
        descriptor_1.setDescriptor(target, propertyKey, 'type', Type || translatable_1.Translatable);
    };
}
exports.translatable = translatable;
