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
exports.Reposytory = void 0;
const database_1 = require("./database");
const author_1 = require("./author");
const src_1 = require("../src");
class Reposytory {
    constructor() {
        this.db = database_1.db;
    }
    async authorFindAll() {
        const row = await this.db.query({
            query: 'for row in authors return row',
            bindVars: {},
        });
        return row.all();
    }
    async authorCreate(author) {
        // console.log('000000000000000', author)
        const doc = await this.db.query({
            query: 'insert @author into authors let doc = NEW return doc',
            bindVars: { author: author },
        });
        return doc.next();
    }
}
__decorate([
    src_1.collection(author_1.Author),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Reposytory.prototype, "authorFindAll", null);
__decorate([
    src_1.model(author_1.Author),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [author_1.Author]),
    __metadata("design:returntype", Promise)
], Reposytory.prototype, "authorCreate", null);
exports.Reposytory = Reposytory;
