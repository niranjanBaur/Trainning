var a

function g(){
    // let a;
    if(true){
        a = 5
        console.log("g");
    }
}

function h(){
    g()
    console.log(a);
    console.log("h");
}

h()

// g()
// console.log(a)