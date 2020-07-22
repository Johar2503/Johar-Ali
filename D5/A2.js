class User{
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
        this.lucoins=0;
        this.courses=[];
    }
    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    getDetails(){
        console.log(`Name is ${this.name}, email is ${this.email}`);
        return this;
    }
}
class Moderator extends User{
    addcoins(){
        this.lucoins++;
        console.log(`${this.name} has ${this.lucoins}coins`);
        return this;
    }
    removecoins(){
        this.lucoins--;
        console.log(`${this.name} has ${this.lucoins}coins`);
        return this;
    }
}
class Admin extends Moderator{
    addCourse(user,course){
        user.courses.push(course);
        console.log(user);
    }
    deleteCourse(user,course){
        user.courses.pop(course);
        console.log(user);
    }
}
 let u1=new User('Johar',19,'johar@mail.com');
 let u2=new User('Ali',20,'ali@mail.com');
 let mod=new Moderator("Jaan",19,"Jaan@mail.com");
 let admin=new Admin('Rio',25,'rio@mail.com');
 let users=[u1,u2,mod,admin];
 users.forEach(el=>{
     console.log(el);
 });
 u1.login();
 u2.login();
 mod.login().addcoins().addcoins().getDetails().logout();
admin.addCourse(u1,"JavaScript");
admin.addCourse(u2,'Python');
admin.addCourse(u2,'C++');
admin.deleteCourse(u2,'Python');
