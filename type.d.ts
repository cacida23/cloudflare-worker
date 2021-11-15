declare module '*.json' {
    const value: any;
    export default value;
}

declare const FRIST: {
    put: (key: string, value: string) => void
}

type IValueByKey = {
    [key: string]: PropertyKey
}

declare type GetValue<T extends IValueByKey>= {
    [p in keyof T]: T[p]
}[keyof T]