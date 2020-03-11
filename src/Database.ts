import * as nano from 'nano';

export class Database {
    private conn: any;
    private db: any;
    constructor({ host, port, user, password }: { host: string; port: number; user: string; password: string }) {
        const url = `http://${user}:${password}@${host}:${port}`;
        this.conn = nano(url);
    }
    async create(name: string) {
        const created = await this.conn.db.create(name);
        console.log(created);
    }
    use(name: string) {
        this.db = this.conn.use(name);
    }
    insert(...params: any[]) {
        return this.db.insert(...params);
    }
}
