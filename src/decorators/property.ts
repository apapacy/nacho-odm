import 'reflect-metadata';

const meta = 'nacho:property';
const properties = 'nacho:properties';
const propertiesTypes = 'nacho:properties:types';


export function property(Type?: Function) {
  return (target: any, propertyKey: string | symbol, descriptor?: PropertyDescriptor): void => {
    let list: string[]|undefined = Reflect.getMetadata(properties, target);
    if (!list) {
        list = [];
    }
    list.push(propertyKey.toString());
    Reflect.defineMetadata(properties, list, target);
    let types: any = Reflect.getMetadata(propertiesTypes, target);
    if (!types) {
        types = {};
    }
    if (Type) {
      types[propertyKey.toString()] = Type;
    }
    Reflect.defineMetadata(propertiesTypes, types, target);
    Reflect.defineMetadata(meta, true, target, propertyKey);
      if (descriptor) {
          descriptor.enumerable = true;
      }
    }
}
