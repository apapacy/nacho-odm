import { Model, ModelType } from '../src';
import { optional, persistent, array, getter, group, _type, translatable } from '../src';
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
    @persistent()
    @group('cat')
    @translatable(Translatable)
    public street!: Translatable;
    @persistent()
    @group('cat')
    public house!: string;
    @persistent()
    @optional()
    @group('cat')
    public appartment?: number;
}

@_type('author')
export class Author extends Model<AuthorType> implements AuthorType {
    @persistent()
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

    @persistent(Address)
    @group('dog')
    public address!: Address;

    @persistent()
    @optional()
    @getter()
    public get addressId(): string | undefined {
        return this.address._key;
    }

    @persistent(Address)
    @array(Address)
    @group('dog')
    @optional(Address)
    public addresses!: Array<Address>;
}
