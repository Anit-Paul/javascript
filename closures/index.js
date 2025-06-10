//closure
function makeFun(){
    const name="funky"
    function play(){
        console.log(name)
    }
    return play
}
//fun=makeFun() //then reference of parent also will come lexicographical scope
//fun()

function change(color){
    const body=document.querySelector("body")
    function apply(){
        body.style.background=color
    }
    return apply
}

