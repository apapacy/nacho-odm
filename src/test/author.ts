import {Model, ModelType} from '../model';
import {optional, property, group, _type, translatable} from '../decorators';
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

export class Address extends Model<AddressType> implements AddressType {

    public city!: string;
    @property()
    @group('cat')
    @translatable()
    public street!: Translatable;
    @property()
    @group('cat')
    public house!: string;
    @property()
    @optional()
    @group('cat')
    public appartment?: number;

}

export class Author extends Model<AuthorType> implements AuthorType  {

    @property()
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

    @property(Address)
    @group('dog')
    public address!: Address

}



test('class log', () => {
    console.log(Author)
});
