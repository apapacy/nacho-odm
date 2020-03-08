import {Model as Model} from '../Model';
import {property} from '../decorators';

interface AddressType {
    city: string,
    street: string,
    house: string,
    appartment?: number,
}

interface AuthorType {
    _id?: string,
    name: string,
    address: AddressType,
}

export class Author extends Model<AuthorType> {
    @property()
    public name?: string;
}

test('class log', () => {
    console.log(Author)
});