function Calculator(a: number, c: string, b: number) {
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

Calculator(5, '+', 5)


interface details{
    readonly name?:string
    email?:string
    password?:number
}

interface datli extends details{
    isactive?:boolean
    [index: number]: string
    greet: (greet:string)=> string
}

const person: datli={
    name:'Hamza',
    email:'84',
    password:73,
    isactive:true,
    0:'hamza',
    1:'talha',
    greet: (greet: string) => `Hello, ${greet}!`
}

console.log(person);


const user = {
    profile: {
        address: {
            city: 'Lahore',
        },
    },
};

console.log(user.profile?.address?.city); // ✅ 'Lahore'
console.log(user.profile?.address?.zipCode); 

