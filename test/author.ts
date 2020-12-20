import { Model, ModelType } from '../src';
import { optional, attr, array, getter, group, _type, translatable } from '../src';
import { Translatable, TranslatableType } from '../src';

interface AddressType extends ModelType {
    city: string;
    street: Translatable;
    house: string;
    appartment?: number;
}

interface AuthorType extends ModelType {
    name: string;
    address: AddressType;
}

@_type('address')
export class Address extends Model<AddressType> implements AddressType {
    public city!: string;
    @attr()
    @group('cat')
    @translatable(Translatable)
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
export class Author extends Model<AuthorType> implements AuthorType {
    @attr()
    public name!: string;

    public get Name(): string {
        return this.name + '***';
    }

    @translatable(Translatable)
    @group('dog', 'cat')
    public get Name1(): TranslatableType {
        return {
            ru: this.name + '*** ru',
            en: this.name + '*** en',
            uk: this.name + '*** uk',
        } as TranslatableType;
    }

    @attr(Address)
    @group('dog')
    public address!: Address;

    @attr()
    @optional()
    @getter()
    public get addressId(): string | undefined {
        return this.address._key;
    }

    @attr(Address)
    @array(Address)
    @group('dog')
    @optional(Address)
    public addresses!: Array<Address>;
}
