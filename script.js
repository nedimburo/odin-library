let myLibrary = [
    {
        "title": "Don Quixote",
        "author": "Miguel de Cervantes",
        "pages": 304,
        "read": true
    },
    {
        "title": "A Tale of Two Cities",
        "author": "Charles Dickens",
        "pages": 290,
        "read": false
    },
    {
        "title": "The Lord of the Rings",
        "author": "J.R.R. Tolkien",
        "pages": 1220,
        "read": true
    }
];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

window.addEventListener("load", updateDisplay);

function updateDisplay(){
    let displayContainer=document.getElementById("container");
    displayContainer.innerHTML="";
    for (let i=0; i<myLibrary.length; i++){
        let sample=`<div class="book-item">
                        <h2>Title: ${myLibrary[i].title}</h2>
                        <p>Author: ${myLibrary[i].author}</p>
                        <p>Number of pages ${myLibrary[i].pages}</p>
                        <p>Status: ${(myLibrary[i].read) ? "Read" : "Not read yet"}</p>
                        <div class="item-button-container">
                            <button>Change status</button>
                            <button>Delete book</button>
                        </div>
                    </div>`;
        displayContainer.innerHTML+=sample;
    }
}