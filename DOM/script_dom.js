parent=document.querySelector(".parent")
day=document.querySelector(".day")

//create element
div=document.createElement("div")
div.innerText="i am a new div"
div.className="new_div"
div.id="new_div"
div.setAttribute("name","name")
document.body.appendChild(div)