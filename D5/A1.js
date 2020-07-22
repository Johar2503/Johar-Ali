let n=Number(prompt("Enter no.of elements in array:"));
if(n>0){
    let a=new Array(n);
    for(let i=0;i<a.length;i++){
        a[i]=prompt("Enter elements in array:");
    }
    console.log(a);
    let odd=a.filter(el=>el%2!=0);
    console.log(odd);
    let oddcubes=odd.map(el=>el**3);
    console.log(oddcubes);
}
else{
    console.log("Enter positive Number");
}