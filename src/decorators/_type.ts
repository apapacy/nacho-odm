/* tslint:disable */
export function _type(_type: string) {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            _type = _type;
        }
    }
}
