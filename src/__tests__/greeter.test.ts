import { greeter } from '../index';
import {Author, Address} from '../test/author';
import { Reposytory } from '../test/reposytory';

const db = new Reposytory();

test('My Greeter', () => {
  expect(greeter('Carl')).toBe('Hello Carl');
});

test('create Author', async () => {
  const author = new Author(<Author>{
    _id: "1234567890",
    name: 'Joe',
    address: <Address>{
      city: 'Ach',
      street: {
        en: 'King Road',
        //ru: 'King Road',
        //uk: 'King Road',
      },
      house: '12b',
      appartment: 45,
    }
  })
  //author.name = 12
  //console.log(author.getData())
  const doc: Author =  await db.authorCreate(author);
  console.log('222222222222222222222', new Author(doc).group(['cat'], 'uk'))
});
