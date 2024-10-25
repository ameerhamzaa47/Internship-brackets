const numbers:number[] = [1,2,3,4,5]
let sum:number = 0

for(let i=1;i<=numbers.length;i++){
    sum+=i
}

console.log(sum);

let newNumbers:number[]=[...numbers,6,7]
console.log("New array with additional elements:", newNumbers);

const person={name:'Hamza',age:20}
const contactInfo={email:'hamza@123'}

const fullInfo={...person,...contactInfo}
console.log('mergeObject is',fullInfo);
