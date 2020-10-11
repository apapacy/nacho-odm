import {Author, Address} from '../author';
import { Reposytory } from '../reposytory';

const db = new Reposytory();


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
    },
    addresses: [<Address>{
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
  //console.log(author.getData())
  const doc: Author =  await db.authorCreate(author);
  console.log(doc);
  //const arr: Array<Author> =  await db.authorFindAll();
  //console.log('222222222222222222222', arr)
  //console.log('222222222222222222222', doc.get(['cat', 'dog']))

});
