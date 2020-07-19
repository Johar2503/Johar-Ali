  
function isPrime(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i == 0 ) {
            return false;
        }
    }
    return true;
}

function display(n) {
    var arr = [2];
    for ( var i = 3; i < n; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    return arr; // use arr result on your own
}

let n = Number(prompt("Enter Range number:"));
console.log(display(n)); 