let salary = Number(prompt("Enter Salary:"));
let sales = Number(prompt("Enter No. of Sales:"));
if(sales>0 && sales<=5000){
    let commission = salary+((2/100)*100);
    console.log("New commission is "+commission);
}
else if(sales>5001 && sales<=10000){
    let commission = salary+((5/100)*100);
    console.log("New commission is "+commission);
}
else if(sales>10001 && sales<=20000){
    let commission = salary+((7/100)*100);
    console.log("New commission is "+commission);
}
else{
    let commission = salary+((10/100)*100);
    console.log("New commission is "+commission);
}
