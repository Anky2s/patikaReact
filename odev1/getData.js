import axios from "axios"



const getUser = (id) =>{
    return new Promise(async(resolve,reject)=>{
        const{data:user}=await axios("https://jsonplaceholder.typicode.com/users/" + id)
        resolve(user)
    }
    )
}


const getPost = (post_id) =>{
    return new Promise(async(resolve,reject)=>{
        const{data:userpost}=await axios("https://jsonplaceholder.typicode.com/posts?userId=" + post_id)
        resolve(userpost)
    }
    )
}

async function asyncCall(idNumber){
    let result=
await getUser(idNumber)
.then((user)=>console.log(user) )
.catch((e)=> console.log(e))

await getPost(idNumber)
.then((userpost)=>console.log("posts:",userpost) )
.catch((e)=> console.log(e))

}

export default asyncCall