let myLibrary = [];
const container = document.querySelector(".container");
const mainBox = document.querySelector(".main");
const sidebar = document.querySelector(".sidebar");
const hero = document.querySelector(".hero");
const addButton = document.getElementById("add-button");
const popupWindow = document.querySelector(".popup");
let submitButton = document.getElementById("submit-button");
const bookForm = document.getElementById("book-form");
const trashButton = document.getElementById("trash-icon");


function Book(title, author, pages, state) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.state = state;
}

function addBookToLibrary() {

}

function displayBooks(bookArray) {
    mainBox.innerHTML ="";
    bookArray.forEach(element => {
        let newCard = mainBox.appendChild(document.createElement("div"));
        newCard.classList.add("card");
        console.log(bookArray[1]);
        let bookTitle = newCard.appendChild(document.createElement("p"));
        let bookAuthor = newCard.appendChild(document.createElement("p"));
        let bookPages = newCard.appendChild(document.createElement("p"));
        let bookState = newCard.appendChild(document.createElement("p"));
        const cardButtons = newCard.appendChild(document.createElement("div"));
        cardButtons.classList.add("card-buttons");
        const shareIcon = cardButtons.appendChild(document.createElement("img"));
        const trashIcon = cardButtons.appendChild(document.createElement("img"));
        shareIcon.classList.add("icon");
        shareIcon.src = "img/share.svg";
        trashIcon.classList.add("icon");
        trashIcon.src = "img/trash.svg";

        bookTitle.textContent = element.title;
        bookAuthor.textContent = element.author;
        bookPages.textContent = element.pages;
        bookState.textContent = element.state;
        if(bookState.textContent === "read") {
            bookState.style.color = "cyan";
        }
        else {
            bookState.style.color = "red";
        }
        console.log("state: " + element.state);;
    });
}

const isHidden = elem => {
    const styles = window.getComputedStyle(elem);
    return styles.visibility === "hidden";
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

function submitButtonClick(event) {
    event.preventDefault();
    let titleInput = document.getElementById("title").value;
    let authorInput = document.getElementById("author").value;
    let pagesInput = document.getElementById("pages").value;
    let stateInput = document.getElementById("state");

    if(stateInput.checked === true) {
        let newBook =  new Book(titleInput,authorInput,pagesInput,"read");
        myLibrary.push(newBook);
        showPopup();
        displayBooks(myLibrary);
    }
    else {
        let newBook =  new Book(titleInput,authorInput,pagesInput,"unread");
        myLibrary.push(newBook);
        showPopup();
        displayBooks(myLibrary);
    }
}

function clearPopup() {
    document.getElementById("title").innerHTML = "";
    document.getElementById("author").innerHTML = "";
    document.getElementById("pages").innerHTML = "";
    document.getElementById("state").innerHTML = "";
}

myLibrary[0] = new Book("1984","George Orwell",259,"read");
myLibrary[1] = new Book("Brave new World","Alous Huxley",350,"unread");
displayBooks(myLibrary);
console.log(addButton);
console.log(myLibrary[0]);



addButton.addEventListener("click", function() {
    bookForm.reset();
    showPopup();
});


submitButton.addEventListener("click", submitButtonClick, false);

window.addEventListener("keydown", function(e) {
    if(e.code === "Escape" && !isHidden(popupWindow)) {
        showPopup();
    }
});

