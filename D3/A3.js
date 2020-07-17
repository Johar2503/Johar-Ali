let m=Number(prompt("Enter your marks:"));
if(m>=85&&m<=100){
    console.log(`Marks are ${m} and grade is A+`);
}
else if(m>=65&&m<84){
    console.log(`Marks are ${m} and grade is A`);   
}
else if(m>=50&&m<65){
    console.log(`Marks are ${m} and grade is B`);   
}
else if(m>=35&&m<50){
    console.log(`Marks are ${m} and grade is C`);   
}
else{
    console.log("You are Fail")
}

