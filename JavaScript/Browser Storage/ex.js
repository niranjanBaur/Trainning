let addBtn = document.getElementById('addNote')
let createNotePopUp = document.getElementById('createNoteContainer')

let saveBtn = document.getElementById('saveBtn')
let cancleBtn = document.getElementById('cancleBtn')

let container = document.getElementById('container')



addBtn.addEventListener('click',()=>{
    createNotePopUp.style.display = "flex"
    container.style.display = "none"
})
cancleBtn.addEventListener('click',()=>{
    createNotePopUp.style.display = "none"
    container.style.display = "flex"

})

saveBtn.addEventListener('click',()=>{
    const details = {
        title : document.getElementById('titleInp').value,
        descpription : document.getElementById('msgInp').value
    }
    localStorage.setItem(`${localStorage.length+1}`,JSON.stringify(details))

    createNotePopUp.style.display = "none"
    container.style.display = "flex"

    createNoteCards(details.title,details.descpription)
})

function fetchDetails(){
    for(let i=1 ; i<=localStorage.length ; i++){
        createNoteCards( JSON.parse(localStorage.getItem(i)).title, JSON.parse(localStorage.getItem(i)).descpription )
    }
}


fetchDetails()

function createNoteCards(title,descpription){

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = dd + '/' + mm + '/' + yyyy;

    const noteEle = document.createElement('div');

    noteEle.classList.add('note');

    const noteInnerHTMl = `
        <div class="note-container">
            <h3>${title}</h3>
            <p id="para"> ${descpription}</p>
        </div>
        <hr>
        <div class = "note-bottom">
            <h5>${today}</h5>
        </div>
    `;

    noteEle.innerHTML = noteInnerHTMl

    container.appendChild(noteEle)
    // container.insertAdjacentElement("afterend",noteEle)
}


