import { Database } from 'arangojs';

export const db = new Database({
  url: 'http://localhost:8000',
  databaseName: 'test',
  auth: { username: 'root', password: '' },
});
