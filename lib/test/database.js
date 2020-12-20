"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const arangojs_1 = require("arangojs");
exports.db = new arangojs_1.Database({
    url: 'http://localhost:8001',
    databaseName: 'test',
    auth: { username: 'root', password: '' },
});
