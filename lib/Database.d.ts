export declare class Database {
    private conn;
    private db;
    constructor({ host, port, user, password }: {
        host: string;
        port: number;
        user: string;
        password: string;
    });
    create(name: string): Promise<void>;
    use(name: string): void;
    insert(...params: any[]): any;
}
