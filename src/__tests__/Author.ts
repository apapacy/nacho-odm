import {Model as Model} from '../Model';
import {optional, property, writable, _type, getDescriptors} from '../decorators';

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

export class Address extends Model<AddressType> implements AddressType {

    public city!: string;
    public street!: string;
    @property()
    public house!: string;
    @property()
    @optional()
    public appartment?: number;

}

@_type('author')
export class Author extends Model<AuthorType> implements AuthorType  {

    @property()
    public name!: string;

    public get Name(): string {
        return this.name + '***'
    };

    public get Name1(): string {
        return this.name + '***'
    };

    @property(Address)
    public address!: Address

}



test('class log', () => {
    console.log(Author)
});

