import { Database } from 'arangojs';
import { db } from './database';
import { Author } from './author';
import { model, collection } from '../decorators';


export class Reposytory {

  private db: Database;

  constructor() {
    this.db = db;
  }

  @collection(Author)
  async authorFindAll() {
    const row = await this.db.query({
      query: 'for row in authors return row',
      bindVars: {},
    });
    return row.all();
  }

  @model(Author)
  async authorCreate(author: Author): Promise<Author> {
    // console.log('000000000000000', author)
    const doc = await this.db.query({
      query: 'insert @author into authors let doc = NEW return doc',
      bindVars: { 'author': author }
    });
    return doc.next();
  }
}
