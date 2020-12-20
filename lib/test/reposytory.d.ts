import { Author } from './author';
export declare class Reposytory {
    private db;
    constructor();
    authorFindAll(): Promise<any[]>;
    authorCreate(author: Author): Promise<Author>;
}
