const student = {
    name:"Helsinki",
    age:24,
    projects:{
        dicegame:"Two player dice game using Javascript"
    },
 }
 const{name,age,projects:{dicegame}}=student;
 console.log(name,age,dicegame);