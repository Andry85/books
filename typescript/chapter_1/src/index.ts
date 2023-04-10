function getFinalPrice(price: number, discount: number): number {
    return price + price/discount;
}

console.log(getFinalPrice(100, 10));


const showLog = (): void => {
    console.log('Hello');
}

showLog();

const showChidren = (name: string, children: number | boolean): void => {
    if (typeof children === 'boolean') {
        if (children === true) {
            console.log(`${name} has children`);
        } else {
            console.log(`${name} doesn't have children`);
        }
    }

    if (typeof  children === 'number') {
        if (children > 1) {
            console.log(`${name} has ${children} children`);
        } else if (children === 1) {
            console.log(`${name} has a child`);
        } else {
            console.log(`${name} doesn't have children`);
        }
    }
}


showChidren("Peter", 2);
showChidren("Oleg", 0);
showChidren("Marina", true);