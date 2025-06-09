const headEvent=setTimeout(()=>{
    text=document.querySelector(".heading")
    node=document.createTextNode("i am a web developer")
    text.replaceChild(node,text.firstChild)
},2000)

document.querySelector("#button").addEventListener('click',()=>{
    clearTimeout(headEvent)
});