function getFinalPrice(price, discount) {
    return price + price / discount;
}
console.log(getFinalPrice(100, 10));
var showLog = function () {
    console.log('Hello');
};
showLog();
var showChidren = function (name, children) {
    if (typeof children === 'boolean') {
        if (children === true) {
            console.log("".concat(name, " has children"));
        }
        else {
            console.log("".concat(name, " doesn't have children"));
        }
    }
    if (typeof children === 'number') {
        if (children > 1) {
            console.log("".concat(name, " has ").concat(children, " children"));
        }
        else if (children === 1) {
            console.log("".concat(name, " has a child"));
        }
        else {
            console.log("".concat(name, " doesn't have children"));
        }
    }
};
showChidren("Peter", 2);
showChidren("Oleg", 0);
showChidren("Marina", true);
//# sourceMappingURL=index.js.map