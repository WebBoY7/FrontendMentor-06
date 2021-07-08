const btn1 = document.getElementById("share-button");
const profile = document.getElementById("profile-container");
const btn2 = document.getElementById("share-button-2");
const share = document.getElementById("share-container");

btn1.addEventListener("click",()=>{
    profile.style.transform = "translateY(1000%)"
    profile.style.zIndex = "1"
    share.style.transform = "translateY(0)"
    share.style.zIndex = "2"
})
btn2.addEventListener("click",()=>{
    share.style.transform = "translateY(1000%)"
    share.style.zIndex = "1"
    profile.style.transform = "translateY(0)"
    profile.style.zIndex = "2"
})

// desktop

const btnD = document.getElementById("share-button-d");
const toolpick = document.getElementById("tool-tip")
let open = false;

btnD.addEventListener("click",()=>{
    if(!open){
        toolpick.style.bottom = "80px";
        toolpick.style.opacity = "1"
        toolpick.style.transform = "scale(1)"
        open = true;
    }else{
        toolpick.style.bottom = "50px";
        toolpick.style.opacity = "0"
        toolpick.style.transform = "scale(0)"
        open = false;
    }
})