//add another language
function addLanguage(language){
    const ul=document.querySelector(".language")
    const li=document.createElement("li")
    li.appendChild(document.createTextNode(language))
    ul.appendChild(li)
}
//edit nth child
function editLanguage(n){
    const ul=document.querySelector(".language")
    const child=ul.children[n]
    const li=document.createElement("li")
    li.appendChild(document.createTextNode("replaced language"))
    ul.replaceChild(li, child);
}
//delete a node
function deleteNode(n){
    const ul=document.querySelector(".language")
    const child=ul.children[n]
    ul.removeChild(child)
}