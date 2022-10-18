let btn = document.getElementById("btn")

btn.addEventListener('click',getDetails)

function getDetails(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET","https://pokeapi.co/api/v2/pokemon/ditto",true)

    xhr.onprogress = function(){
        console.log("On Progress");
    }
    
    xhr.onload = function(){
        console.log(this.response);
    }

    xhr.send()

}