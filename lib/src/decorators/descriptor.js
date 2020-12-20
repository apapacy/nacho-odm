"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDescriptors = exports.getDescriptor = exports.setDescriptor = exports.Descriptor = void 0;
const meta = Symbol('nacho:desriptors');
class Descriptor {
    constructor() {
        this.attr = false;
        this.array = false;
        this.required = true;
        this.getter = false;
        this.translatable = false;
    }
}
exports.Descriptor = Descriptor;
function setDescriptor(target, propertyKey, key, value) {
    let descriptors = Reflect.getOwnMetadata(meta, target);
    if (!descriptors) {
        const parentDescriptors = Reflect.getMetadata(meta, target);
        if (parentDescriptors) {
            descriptors = Object.assign({}, parentDescriptors);
        }
        else {
            descriptors = {};
        }
    }
    if (!descriptors[propertyKey]) {
        descriptors[propertyKey] = new Descriptor();
    }
    descriptors[propertyKey][key] = value;
    Reflect.defineMetadata(meta, descriptors, target);
}
exports.setDescriptor = setDescriptor;
function getDescriptor(target, propertyKey) {
    return Reflect.getMetadata(meta, target)[propertyKey];
}
exports.getDescriptor = getDescriptor;
function getDescriptors(target) {
    return Reflect.getMetadata(meta, target);
}
exports.getDescriptors = getDescriptors;
