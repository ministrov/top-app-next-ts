const x = { a: 1, b: 2, c: 3, d: 4 };

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

getProperty(x, 'a');
getProperty(x, 'b');

function findFibonacciNum(num: number): number {
    if (num <= 0 || num === Infinity) return 0;

    return num * findFibonacciNum(num - 1);
}

export {
    getProperty,
    findFibonacciNum
}