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
exports.Author = exports.Address = void 0;
const src_1 = require("../src");
const src_2 = require("../src");
const src_3 = require("../src");
let Address = class Address extends src_1.Model {
};
__decorate([
    src_2.persistent(),
    src_2.group('cat'),
    src_2.translatable(src_3.Translatable),
    __metadata("design:type", src_3.Translatable)
], Address.prototype, "street", void 0);
__decorate([
    src_2.persistent(),
    src_2.group('cat'),
    __metadata("design:type", String)
], Address.prototype, "house", void 0);
__decorate([
    src_2.persistent(),
    src_2.optional(),
    src_2.group('cat'),
    __metadata("design:type", Number)
], Address.prototype, "appartment", void 0);
Address = __decorate([
    src_2._type('address')
], Address);
exports.Address = Address;
let Author = class Author extends src_1.Model {
    get Name() {
        return this.name + '***';
    }
    get Name1() {
        return {
            ru: this.name + '*** ru',
            en: this.name + '*** en',
            uk: this.name + '*** uk',
        };
    }
    get addressId() {
        return this.address._key;
    }
};
__decorate([
    src_2.persistent(),
    __metadata("design:type", String)
], Author.prototype, "name", void 0);
__decorate([
    src_2.translatable(src_3.Translatable),
    src_2.group('dog', 'cat'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Author.prototype, "Name1", null);
__decorate([
    src_2.persistent(Address),
    src_2.group('dog'),
    __metadata("design:type", Address)
], Author.prototype, "address", void 0);
__decorate([
    src_2.persistent(),
    src_2.optional(),
    src_2.getter(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Author.prototype, "addressId", null);
__decorate([
    src_2.persistent(Address),
    src_2.array(Address),
    src_2.group('dog'),
    src_2.optional(Address),
    __metadata("design:type", Array)
], Author.prototype, "addresses", void 0);
Author = __decorate([
    src_2._type('author')
], Author);
exports.Author = Author;
