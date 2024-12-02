function Calculator(a, c, b) {
    switch (c) {
        case '+':
            console.log(a + b);
            break;
        case '-':
            console.log(a - b);
            break;
        case '*':
            console.log(a * b);
            break;
        case '/':
            console.log(a / b);
            break;
        case '%':
            console.log(a % b);
            break;
        default:
            console.log('Invalid Input');
    }
}
Calculator(5, '+', 5);
var person = {
    name: 'Hamza',
    email: '84',
    password: 73,
    isactive: true,
    0: 'hamza',
    1: 'talha',
    greet: function (greet) { return "Hello, ".concat(greet, "!"); }
};
console.log(person);
var obj = {
    name: 'Hamza',
    age: 9,
    profile: null
};
console.log(obj.profile.city);
