"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const decorators_1 = require("./decorators");
class Model {
    constructor(data) {
        const proto = Object.getPrototypeOf(this);
        const descriptors = decorators_1.getDescriptors(proto);
        for (const name in descriptors) {
            const descriptor = descriptors[name];
            if (descriptor.required
                && descriptor.attr
                && !descriptor.array
                && typeof (data[name]) === 'undefined') {
                throw new Error(`${this.constructor}[${name}] is requierd`);
            }
            if (descriptor.attr && !descriptor.getter) {
                if (descriptor.type) {
                    if (descriptor.array) {
                        this[name] = new Array();
                        if (data[name]) {
                            data[name].forEach((item) => (this[name]).push(new (descriptor.type || Object)(item)));
                        }
                    }
                    else {
                        this[name] = new descriptor.type(data[name]);
                    }
                }
                else {
                    if (descriptor.array) {
                        this[name] = new Array();
                        data[name].forEach((item) => this[name].push(data[name]));
                    }
                    else {
                        this[name] = data[name];
                    }
                }
            }
        }
    }
    ;
    toJSON() {
        const proto = Object.getPrototypeOf(this);
        const descriptors = decorators_1.getDescriptors(proto);
        const jsonObj = {};
        for (const name in descriptors) {
            const descriptor = descriptors[name];
            if (descriptor.attr && descriptor.array) {
                jsonObj[name] = [];
                this[name].forEach((item) => {
                    if (typeof item[name] === 'object') {
                        jsonObj[name].push(item.toJSON());
                    }
                    else {
                        jsonObj[name].push(item);
                    }
                });
            }
            else if (descriptor.attr) {
                if (typeof this[name] === 'object') {
                    jsonObj[name] = this[name].toJSON();
                }
                else {
                    jsonObj[name] = this[name];
                }
            }
        }
        return jsonObj;
    }
    get(groups, locale) {
        var _a, _b, _c, _d, _e;
        const proto = Object.getPrototypeOf(this);
        const descriptors = decorators_1.getDescriptors(proto);
        const jsonObj = {};
        for (const name in descriptors) {
            const descriptor = descriptors[name];
            if (((_b = (_a = descriptor) === null || _a === void 0 ? void 0 : _a.groups) === null || _b === void 0 ? void 0 : _b[0]) === '_all'
                || ((_d = (_c = descriptor) === null || _c === void 0 ? void 0 : _c.groups) === null || _d === void 0 ? void 0 : _d.some(item => { var _a; return ((_a = groups) === null || _a === void 0 ? void 0 : _a.indexOf(item)) > -1; }))) {
                if ((_e = descriptor) === null || _e === void 0 ? void 0 : _e.array) {
                    jsonObj[name] = [...this[name]];
                    continue;
                }
                if (typeof this[name] === 'object') {
                    if (descriptor.translatable) {
                        if (locale) {
                            jsonObj[name] = this[name][locale];
                        }
                        else {
                            jsonObj[name] = Object.assign(this[name]);
                        }
                    }
                    else {
                        jsonObj[name] = this[name].get(groups, locale);
                    }
                }
                else {
                    jsonObj[name] = this[name];
                }
            }
        }
        return jsonObj;
    }
}
__decorate([
    decorators_1.attr(),
    decorators_1.optional(),
    decorators_1.group('_all')
], Model.prototype, "_type", void 0);
__decorate([
    decorators_1.attr(),
    decorators_1.optional(),
    decorators_1.group('_all')
], Model.prototype, "_key", void 0);
__decorate([
    decorators_1.attr(),
    decorators_1.optional(),
    decorators_1.group('_all')
], Model.prototype, "_id", void 0);
__decorate([
    decorators_1.attr(),
    decorators_1.optional(),
    decorators_1.group('_all')
], Model.prototype, "_rev", void 0);
exports.Model = Model;
