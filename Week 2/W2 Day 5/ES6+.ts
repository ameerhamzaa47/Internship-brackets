const Student=(name:string,age:number,score:number)=>{

    interface studentDetails{
        name:string
        age:number
        score:number
    }

    let Object:studentDetails={
        name,
        age,
        score
    }
    const {name:StudentName,age:StudentAge,score:StudentScore}=Object
    
    const result=`Student ${StudentName} is Added that Age ${StudentAge} and got ${StudentScore} Score.`
    console.log(result);
}
Student('hamza',20,92)
Student('Ahmed',24,92)