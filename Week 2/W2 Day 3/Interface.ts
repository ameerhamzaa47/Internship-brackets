interface student{
    name?:string
    age?:number
    score?:number
}

interface array extends student{
    [index:number]:string
}

const person:array={
    name:'Hamza',
    age:20,
    score:94,
    0:'Hi',
    1:'Hello'
    
}
console.log(person);

