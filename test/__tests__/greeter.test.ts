import {Author, Address} from '../author';
import { Reposytory } from '../reposytory';

const db = new Reposytory();


test('create Author', async () => {
  const author = new Author(<Author>{
    //_key: "1234567890",
    name: 'Joe',
    address: <Address>{
      _key: '123',
      city: 'Ach',
      street: {
        en: 'King Road',
        //ru: 'King Road',
        //uk: 'King Road',
      },
      house: '12b',
      appartment: 45,
    },
    addresses: [<Address>{
      _key: '123',
      city: 'Ach',
      street: {
        en: 'King Road',
        //ru: 'King Road',
        //uk: 'King Road',
      },
      house: '12b',
      appartment: 45,
    }]
  })
  //author.name = 12
  //console.log(author)
  //console.log(author.toJSON())
  const doc: Author =  await db.authorCreate(author);
  console.log(doc);
  console.log(doc.toJSON());
  console.log(doc.get(['cat', 'dog'], 'uk'));
  //const arr: Array<Author> =  await db.authorFindAll();
  //console.log('222222222222222222222', arr)
  //console.log('222222222222222222222', doc.get(['cat', 'dog']))

});
