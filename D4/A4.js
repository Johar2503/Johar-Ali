let v=prompt("Enter operator:");
if(v=='+'){
    n1=Number(prompt("Enter 1st number:"));
    n2=Number(prompt("Enter 2nd number:"));
    function add(n1,n2){
        return n1+n2;
    }

        console.log(add(n1,n2));    
    }
    
else if(v=='-'){
    n1=Number(prompt("Enter 1st number:"));
    n2=Number(prompt("Enter 2nd number:"));
    function sub(n1,n2){
        return n1-n2;
    }

    console.log(sub(n1,n2));   
}
else if(v=='*'){
    n1=Number(prompt("Enter 1st number:"));
    n2=Number(prompt("Enter 2nd number:"));
    function mul(n1,n2){
        return n1*n2;
    }

    console.log(mul(n1,n2));
}
else if(v=='/'){
    n1=Number(prompt("Enter 1st number:"));
    n2=Number(prompt("Enter 2nd number:"));
    function div(n1,n2){
        return n1/n2;
    }

    console.log(div(n1,n2));
    }
else if(v=='sq'){
    n1=Number(prompt("Enter a number:"));
    console.log(Math.sqrt(n1));
}
else if(v=='%'){
    n1=Number(prompt("Enter 1st number:"));
    n2=Number(prompt("Enter 2nd number:"));
    function per(n1,n2){
        return n1%n2;
    }
    console.log(per(n1,n2));
}

