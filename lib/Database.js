"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nano = require("nano");
class Database {
    constructor({ host, port, user, password }) {
        const url = `http://${user}:${password}@${host}:${port}`;
        this.conn = nano(url);
    }
    async create(name) {
        const created = await this.conn.db.create(name);
        console.log(created);
    }
    use(name) {
        this.db = this.conn.use(name);
    }
    insert(...params) {
        return this.db.insert(...params);
    }
}
exports.Database = Database;
