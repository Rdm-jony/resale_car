const jwt=currentUser=>{
    fetch("http://localhost:5000/jwt",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(currentUser)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        localStorage.setItem("review-token",data?.token)
    })
    .catch(er=>console.log(er))
}
export default jwt;