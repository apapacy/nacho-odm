import {Model as Model} from '../Model';
import {enumerable, property, writable, _type} from '../decorators';

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

    constructor(data: AddressType) {
      super(data);
      this.city = data.city;
      this.street = data.street;
      this.house = data.house;
      this.appartment = data.appartment;
    };

    public city: string;
    public street: string;
    @property()
    public house: string;
    public appartment?: number;

}

@_type('author')
export class Author extends Model<AuthorType> implements AuthorType  {

    constructor(data: AuthorType) {
      super(data);
      this.name = data.name;
      this.address = new Address(data.address);
    };

    @property()
    public name: string;

    @property()
    public get Name(): string {
        return this.name + '***'
    };

    public get Name1(): string {
        return this.name + '***'
    };

    @property()
    public address: Address

}



test('class log', () => {
    console.log(Author)
});
