document.querySelector("#images").addEventListener('click',function(e){
    parent=e.target.parentNode
    parent.parentNode.removeChild(parent)
})