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

function Book(title, author, pages, read) {
  // the constructor...
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.read=read;
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
                        <h2>Title: "${myLibrary[i].title}"</h2>
                        <p>Author: ${myLibrary[i].author}</p>
                        <p>Number of pages: ${myLibrary[i].pages}</p>
                        <p id="read_status_${i}">Status: ${(myLibrary[i].read) ? "Read" : "Not read yet"}</p>
                        <div class="item-button-container">
                            <button class="book-button change" onclick="changeReadStatus(${i})">Change Status</button>
                            <button class="book-button delete" onclick="deleteBook(${i})">Delete Book</button>
                        </div>
                    </div>`;
        displayContainer.innerHTML+=sample;
    }
}

function createForm(){
    let formDisplay=document.getElementById("form-container");
    formDisplay.style.display="block";
    let formGenerator=`<form id="submit-book-form">
                        <label for="title">Title:</label>
                        <input type="text" name="title" id="title" required><br>
                        <label for="author">Author:</label>
                        <input type="text" name="author" id="author" required><br>
                        <label for="pages">Pages:</label>
                        <input type="number" name="pages" id="pages" min="1" required><br>
                        <label for="read">Read:</label>
                        <input type="checkbox" name="read" id="read">
                       </form>
                       <div id="form-button-container">
                        <button class="form-button darkgreen" type="submit" value="submit" onclick="addBookToLibrary()">Submit</button>
                        <button class="form-button darkred" onclick="cancelBookAdd()">Cancel</button>
                       </div>`;
    formDisplay.innerHTML+=formGenerator;
}

function cancelBookAdd(){
    let formDisplay=document.getElementById("form-container");
    formDisplay.innerHTML="";
    formDisplay.style.display="none";
}

function changeReadStatus(index){
    let targetedBookStatus=document.getElementById(`read_status_${index}`);
    if (myLibrary[index].read){
        targetedBookStatus.innerHTML="Status: Not read yet";
        myLibrary[index].read = false;
    }
    else{
        targetedBookStatus.innerHTML="Status: Read";
        myLibrary[index].read = true;
    }
}

function deleteBook(index){
    myLibrary.splice(index, 1);
    updateDisplay();
}