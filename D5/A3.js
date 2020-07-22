/*fetch('https://jsonplaceholder.typicode.com/todos/5')
.then(response=>response.json())
.then(data=>console.log(data))
fetch('https://jsonplaceholder.typicode.com/todos/93')
.then(response=>response.json())
.then(data=>console.log(data))
fetch('https://jsonplaceholder.typicode.com/todos/143')
.then(response=>response.json())
.then(data=>console.log(data))
fetch('https://jsonplaceholder.typicode.com/todos/199')
.then(response=>response.json())
.then(data=>console.log(data))

let obj={
    userid:2564,
    title:"The uncompleted man",
    completed:true,

}
fetch('https://jsonplaceholder.typicode.com/todos',{
    method:'POST',
    body:JSON.stringify(obj)
})
.then(response=>response.json())
.then(data=>console.log(data))*/

let users = [
    {
        name:'Berlin',
        email:'b@gmail.com',
    },
    {
        name:'Rio',
        email:'r@gmail.com',
    },
    {
        name:'Tokyo',
        email:'t@gmail.com',
    },
]
function getUsers(){
    setTimeout(()=>{
        let result = '';
        users.forEach(user=>{
            result += `The user is ${user.name} \n`;
        });
        console.log(result);
    },1000);
}

function createUser(user){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            users.push(user);

            const error = false;

            if(!error){
                resolve();
            }
            else{
                reject("Oops an error occured");
            }

        }, 3000);
    })
}

createUser({name:'Professor',email:'pro@gmail.com'})
.then(getUsers)
.catch(error=>console.log(error));

/*const document = [];
async function docUpload(){
    let status = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            document.push('Avatar');
            resolve('Profile Updated');
        },3000)
    })

    let result = await status;
    console.log(document.length);
}

docUpload();
docUpload();*/