function reverse() {
    let p = document.getElementById("ans")

    let str = document.getElementById("word").value;
    var res = "";
    for (let i = str.length - 1; i >= 0; i--) {
        res += str.charAt(i);
    }
    p.innerHTML=res;

}


