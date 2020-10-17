"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
function _type(_type) {
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
