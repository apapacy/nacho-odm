"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._type = void 0;
function _type(_type) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this._type = _type;
            }
        };
    };
}
exports._type = _type;
