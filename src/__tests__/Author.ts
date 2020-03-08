import {Model as Model} from '../Model';
import {enumerable, property, writable} from '../decorators';

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
    public name?: number;

    @enumerable(false)
    public get Name(): string {
        return this.getData().name + '***'
    }
}

test('class log', () => {
    console.log(Author)
});