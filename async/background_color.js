let count=0
let myEvent;
let color=["red","green","blue","yellow","orange"]
document.querySelector(".start").addEventListener('click',()=>{
    myEvent=setInterval(()=>{
        body=document.querySelector("body")
        idx=count%5
        count++;
        body.style.background=color[idx]
    },1000)
    console.log("clicked")
})
document.querySelector(".stop").addEventListener('click',()=>{
    clearInterval(myEvent)
    console.log("stopped")
})