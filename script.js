let myLibrary = [];
const container = document.querySelector(".container");
const mainBox = document.querySelector(".main");
const sidebar = document.querySelector(".sidebar");
const hero = document.querySelector(".hero");
const addButton = document.getElementById("add-button");
const popupWindow = document.querySelector(".popup");
let titleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let pagesInput = document.getElementById("pages");
let stateInput = document.getElementById("state");
let submitButton = document.getElementById("submit-button");

function Book(title, author, pages, state) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.state = state;
}

function addBookToLibrary() {

}

function displayBooks(bookArray) {
    bookArray.forEach(element => {
        const newCard = mainBox.appendChild(document.createElement("div"));
        newCard.classList.add("card");

        const bookTitle = newCard.appendChild(document.createElement("p"));
        const bookAuthor = newCard.appendChild(document.createElement("p"));
        const bookPages = newCard.appendChild(document.createElement("p"));
        const bookState = newCard.appendChild(document.createElement("p"));
        bookTitle.textContent = element.state;
        bookAuthor.textContent = element.author;
        bookPages.textContent = element.title;
        bookState.textContent = element.state;
        
        const cardButtons = newCard.appendChild(document.createElement("div"));
        cardButtons.classList.add("card-buttons");
        const shareIcon = cardButtons.appendChild(document.createElement("img"));
        const trashIcon = cardButtons.appendChild(document.createElement("img"));
        shareIcon.classList.add("icon");
        shareIcon.src = "img/share.svg";
        trashIcon.classList.add("icon");
        trashIcon.src = "img/trash.svg";
    });
}

function showPopup() {
    if(isHidden(popupWindow)) {
        popupWindow.style.visibility = "visible";
        container.style.webkitFilter = "blur(3px)";
        console.log("set visiblity to visible");
    }
    else {
        popupWindow.style.visibility = "hidden";
        container.style.webkitFilter = "blur(0px)";
        console.log("set visiblity to visible");
    }
}

const isHidden = elem => {
    const styles = window.getComputedStyle(elem);
    return styles.visibility === "hidden";
}

myLibrary[0] = new Book("title","author",250,"not read");
myLibrary[1] = new Book("title","author",250,"not read");
displayBooks(myLibrary);
console.log(addButton);



addButton.addEventListener("click", function() {
    showPopup();
});


submitButton.addEventListener("click", function() {
    let newBook = Book(titleInput,authorInput,pagesInput,stateInput);
    myLibrary.push(newBook);
    showPopup();
});

