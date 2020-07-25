let u=prompt("Enter User Name:");
document.write("Welcome "+u);
setInterval(displayClock,1000);
function displayClock(){
    let date=new Date();
    let hrs=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    document.getElementById('time').innerHTML=hrs +":"+min+":"+sec;
}
function func(){
    var el=document.body;
    el.classList.toggle("dark-mode");
}