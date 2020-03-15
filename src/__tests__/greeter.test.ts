import { greeter } from '../index';
import {Database} from '../Database'
import {Author, Address} from './Author';

const conn = {
  host: '127.0.0.1',
  port: 5984,
  user: 'admin',
  password: 'password'
}

const db = new Database(conn)

test('My Greeter', () => {
  expect(greeter('Carl')).toBe('Hello Carl');
});

test('create database', () => {
  db.use('test')
  return  db.insert({a: 11});
});

test('create Author', () => {
  const author = new Author(<Author>{
    _id: "1234567890",
    name: 'Joe',
    address: <Address>{
      city: 'Ach',
      street: 'King Road',
      house: '12b',
    }
  })
  //author.name = 12
  //console.log(author.getData())
  console.log('****************', JSON.stringify(author))
});
