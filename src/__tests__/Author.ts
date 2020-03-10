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

export class Author extends Model<AuthorType> implements AuthorType  {
    @property()
    public name: string;

    @property()
    public get Name(): string {
        return this.getData().name + '***'
    };

    public get Name1(): string {
        return this.getData().name + '***'
    };

    public address: Address

    constructor(author: AuthorType) {
        super(author);
        this.name = author.name;
        this.address = new Address(author.address)
    }
}


export class Address extends Model<AddressType> implements AddressType {
    public city: string;
    public street: string;
    public house: string;
    public appartment?: number;

    constructor(address: AddressType) {
        super(address);
        ({
            city: this.city,
            street: this.street,
            house: this.house,
            appartment: this.appartment
         } = address)
    }
}

test('class log', () => {
    console.log(Author)
});
