export declare function _type(_type: string): <T extends new (...args: any[]) => {}>(constructor: T) => {
    new (...args: any[]): {
        _type: string;
    };
} & T;
