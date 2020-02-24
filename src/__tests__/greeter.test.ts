import { greeter } from '../index';
import {Database} from '../Database'

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
  return  db.use('test').insert({a: 11});
});
