import {Model, ModelType} from '../model';
import {optional, attr, array, group, _type, translatable} from '../decorators';
import {Translatable, TranslatableType} from '../translatable'
interface AddressType extends ModelType {
    city: string,
    street: Translatable,
    house: string,
    appartment?: number,
}

interface AuthorType extends ModelType{
    name: string,
    address: AddressType,
}

@_type('address')
export class Address extends Model<AddressType> implements AddressType {

    public city!: string;
    @attr()
    @group('cat')
    @translatable()
    public street!: Translatable;
    @attr()
    @group('cat')
    public house!: string;
    @attr()
    @optional()
    @group('cat')
    public appartment?: number;

}

@_type('author')
export class Author extends Model<AuthorType> implements AuthorType  {

    @attr()
    public name!: string;

    public get Name(): string {
        return this.name + '***'
    };

    @translatable()
    @group('dog', 'cat')
    public get Name1(): TranslatableType {
        return {
            ru: this.name + '*** ru',
            en: this.name + '*** en',
            uk: this.name + '*** uk',
        } as TranslatableType;
    };

    @attr(Address)
    @group('dog')
    public address!: Address

    @array(Address)
    @group('dog')
    @optional()
    public addresses!: Array<Address>


}



test('class log', () => {
    console.log(Author)
});
