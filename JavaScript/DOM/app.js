let p = document.getElementById("para")
let b = document.getElementById("btn")

let isStrike = true

b.addEventListener("click",function(){

    if(isStrike){
        p.style.textDecoration = "line-through"
    }else{
        p.style.textDecoration = "none"
    }
    isStrike = !isStrike
    
})