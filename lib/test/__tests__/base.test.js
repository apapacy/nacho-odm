"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const author_1 = require("../author");
const reposytory_1 = require("../reposytory");
const db = new reposytory_1.Reposytory();
jest.setTimeout(1000000);
test('create Author', async () => {
    const author = new author_1.Author({
        //_key: "1234567890",
        name: 'Joe',
        address: {
            _key: '123',
            city: 'Ach',
            street: {
                en: 'King Road',
            },
            house: '12b',
            appartment: 45,
        },
        addresses: [
            {
                _key: '123',
                city: 'Ach',
                street: {
                    en: 'King Road',
                },
                house: '12b',
                appartment: 45,
            },
        ],
    });
    //author.name = 12
    //console.log(author)
    //console.log(author.toJSON())
    const doc = await db.authorCreate(author);
    const promise = [];
    for (let i = 0; i < 10; i++) {
        promise.push(await db.authorCreate(author));
    }
    const result = await Promise.all(promise);
    console.log(result);
    console.log(doc.toJSON());
    console.log(doc.get(['cat', 'dog'], 'uk'));
    // const arr: Array<Author> =  await db.authorFindAll();
    // console.log('222222222222222222222', arr)
    // console.log('222222222222222222222', doc.get(['cat', 'dog']))
});
