import { Model, ModelType } from '../src';
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
export declare class Address extends Model<AddressType> implements AddressType {
    city: string;
    street: Translatable;
    house: string;
    appartment?: number;
}
export declare class Author extends Model<AuthorType> implements AuthorType {
    name: string;
    get Name(): string;
    get Name1(): TranslatableType;
    address: Address;
    get addressId(): string | undefined;
    addresses: Array<Address>;
}
export {};
