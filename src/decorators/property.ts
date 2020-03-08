export function property() {
    return (target: any, propertyKey: string | symbol): void => {
        Object.defineProperty(target, propertyKey, {
          get() { return this.__data__[propertyKey];},
          set(value) {
            this.__data__[propertyKey] = value;
            console.log(target)
          },
          enumerable: true,
          configurable: true,
        });    
    }
}