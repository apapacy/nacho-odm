export function _type(_type: string) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function <T extends { new (...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            _type = _type;
        };
    };
}
