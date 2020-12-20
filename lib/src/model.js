"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
require("reflect-metadata");
const decorators_1 = require("./decorators");
class Model {
    constructor(data) {
        const proto = Object.getPrototypeOf(this);
        const descriptors = decorators_1.getDescriptors(proto);
        for (const name of Object.keys(descriptors)) {
            const descriptor = descriptors[name];
            if (descriptor.required && descriptor.attr && !descriptor.array && typeof data[name] === 'undefined') {
                throw new Error(`${this.constructor}[${name}] is requierd`);
            }
            if (descriptor.attr && !descriptor.getter) {
                if (descriptor.constr) {
                    if (descriptor.array) {
                        this[name] = [];
                        for (const item of data[name]) {
                            this[name].push(new descriptor.constr(item));
                        }
                    }
                    else {
                        this[name] = new descriptor.constr(data[name]);
                    }
                }
                else {
                    if (descriptor.array) {
                        this[name] = [];
                        for (const item of data[name]) {
                            this[name].push(item);
                        }
                    }
                    else {
                        this[name] = data[name];
                    }
                }
            }
        }
    }
    toJSON() {
        const proto = Object.getPrototypeOf(this);
        const descriptors = decorators_1.getDescriptors(proto);
        const jsonObj = {};
        for (const name of Object.keys(descriptors)) {
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
        var _a, _b;
        const proto = Object.getPrototypeOf(this);
        const descriptors = decorators_1.getDescriptors(proto);
        const jsonObj = {};
        for (const name of Object.keys(descriptors)) {
            const descriptor = descriptors[name];
            if (((_a = descriptor === null || descriptor === void 0 ? void 0 : descriptor.groups) === null || _a === void 0 ? void 0 : _a[0]) === '_all' || ((_b = descriptor === null || descriptor === void 0 ? void 0 : descriptor.groups) === null || _b === void 0 ? void 0 : _b.some((item) => (groups === null || groups === void 0 ? void 0 : groups.indexOf(item)) > -1))) {
                if (descriptor === null || descriptor === void 0 ? void 0 : descriptor.array) {
                    if (descriptor.constr) {
                        jsonObj[name] = [];
                        for (const item of this[name]) {
                            jsonObj[name].push(item.get(groups, locale));
                        }
                    }
                    else {
                        jsonObj[name] = [...this[name]];
                    }
                    continue;
                }
                if (descriptor === null || descriptor === void 0 ? void 0 : descriptor.constr) {
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
    decorators_1.persistent(),
    decorators_1.optional(),
    decorators_1.group('_all'),
    __metadata("design:type", Object)
], Model.prototype, "_type", void 0);
__decorate([
    decorators_1.persistent(),
    decorators_1.optional(),
    decorators_1.group('_all'),
    __metadata("design:type", Object)
], Model.prototype, "_key", void 0);
__decorate([
    decorators_1.persistent(),
    decorators_1.optional(),
    decorators_1.group('_all'),
    __metadata("design:type", Object)
], Model.prototype, "_id", void 0);
__decorate([
    decorators_1.persistent(),
    decorators_1.optional(),
    decorators_1.group('_all'),
    __metadata("design:type", Object)
], Model.prototype, "_rev", void 0);
exports.Model = Model;
