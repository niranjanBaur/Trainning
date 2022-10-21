// let btn = document.getElementById("btn")

btn.addEventListener('click',rainbow)

// function getDetails(){
//     const xhr = new XMLHttpRequest();

//     xhr.open("GET","https://pokeapi.co/api/v2/pokemon/ditto",true)

//     xhr.onprogress = function(){
//         console.log("On Progress");
//     }
    
//     xhr.onload = function(){
//         console.log(this.response);
//     }

//     xhr.send()

// }

const delayedColorChange = (color,delay) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        },delay)
    })
}

// delayedColorChange("red",1000)
//     .then(() =>  delayedColorChange("orange",1000))
//     .then(() =>  delayedColorChange("yellow",1000))
//     .then(() =>  delayedColorChange("green",1000))
//     .then(() =>  delayedColorChange("aqua",1000))
//     .then(() =>  delayedColorChange("indigo",1000))
//     .then(() =>  delayedColorChange("purple",1000))
//     .then(() =>  delayedColorChange("red",1000))

async function rainbow(){
    await delayedColorChange("red",1000)
    await delayedColorChange("orange",1000)
    await delayedColorChange("yellow",1000)
    await delayedColorChange("green",1000)
    await delayedColorChange("aqua",1000)
    await delayedColorChange("indigo",1000)
    await delayedColorChange("purple",1000)
    await delayedColorChange("red",1000)
}