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

class Book{
    constructor(title, author, pages, read){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.read=read;
    }

    get title(){ return this._title};
    get author(){ return this._author};
    get pages(){ return this._pages};
    get read(){ return this._read};

    set title(value){ this._title=value};
    set author(value){ this._author=value};
    set pages(value){ this._pages=value};
    set read(value){ this._read=value};
}

let addBookButton=document.getElementById("add-button");
addBookButton.addEventListener("click", createForm);

function addBookToLibrary() {
    let newTitle=document.getElementById("title").value;
    let newAuthor=document.getElementById("author").value;
    let newPages=document.getElementById("pages").value;
    let newStatus=document.getElementById("read");
    if (newTitle=="" || newAuthor=="" || newPages==""){
        alert("Please enter information about the book.");
        return;
    }
    let readStatus;
    if (newStatus.checked){
        readStatus=true;
    }
    else{
        readStatus=false;
    }
    let newBook=new Book(newTitle, newAuthor, newPages, readStatus);
    myLibrary.push(newBook);
    removeForm();
    updateDisplay();
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
                        <label for="read" class="form-checkbox">Read?
                            <input type="checkbox" name="read" id="read">
                            <span class="input-checkbox-new"></span>
                        </label>
                       </form>
                       <div id="form-button-container">
                        <button class="form-button darkgreen" type="submit" value="submit" onclick="addBookToLibrary()">Submit</button>
                        <button class="form-button darkred" onclick="removeForm()">Cancel</button>
                       </div>`;
    formDisplay.innerHTML+=formGenerator;
}

function removeForm(){
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