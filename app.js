const nameSpn = document.querySelector(".name")
const emailSpn = document.querySelector(".email")
const phoneSpn = document.querySelector(".phone")
const pictureSrc = document.querySelector(".pictureSrc")
const btn = document.getElementById("btn")
const API = "https://randomuser.me/api/";

const getApi = async () =>{
    try {
        const res =await fetch(API)
        if(res.ok){
        const data = await res.json()
        showData(data)
        }else{
            throw new Error(`Something went wrong ${res.status}`)
        }
        
    } catch (error) {
        console.log(error);
    }
}

const showData = (personalInfo) =>{
    const{name: {title, first, last}, email, phone, picture:{large}} = personalInfo.results[0];

    nameSpn.textContent = `${title} ${first} ${last}`
    emailSpn.textContent = email;
    phoneSpn.textContent = phone;
    pictureSrc.src = large;
}

btn.addEventListener("click", ()=>{
    getApi()
})

getApi()