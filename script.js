let myLibrary = [];
const container = document.querySelector(".container");
const mainBox = document.querySelector(".main");
const sidebar = document.querySelector(".sidebar");
const hero = document.querySelector(".hero");
const addButton = document.getElementById("add-button");
const popupWindow = document.querySelector(".popup");
let submitButton = document.getElementById("submit-button");
const bookForm = document.getElementById("book-form");
let trashButtonList = document.querySelectorAll(".trash");
function Book(title, author, pages, state) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.state = state;
}



function displayBooks(bookArray) {
    mainBox.innerHTML ="";
    for(let i = 0; i < bookArray.length; i++) {
        let newCard = mainBox.appendChild(document.createElement("div"));
        newCard.classList.add("card");
        let bookTitle = newCard.appendChild(document.createElement("p"));
        let bookAuthor = newCard.appendChild(document.createElement("p"));
        let bookPages = newCard.appendChild(document.createElement("p"));
        let bookState = newCard.appendChild(document.createElement("p"));

        const cardButtons = newCard.appendChild(document.createElement("div"));
        cardButtons.classList.add("card-buttons");

        const readIcon = cardButtons.appendChild(document.createElement("img"));
        readIcon.classList.add("icon");
        readIcon.classList.add("read");
        readIcon.src = "img/read.svg";

        const shareIcon = cardButtons.appendChild(document.createElement("img"));
        shareIcon.classList.add("icon");
        shareIcon.src = "img/share.svg";

        const trashIcon = cardButtons.appendChild(document.createElement("img"));
        trashIcon.classList.add("icon");
        trashIcon.classList.add("trash");
        trashIcon.src = "img/trash.svg";

        bookTitle.textContent = bookArray[i].title;
        bookAuthor.textContent = bookArray[i].author;
        bookPages.textContent = bookArray[i].pages;
        bookState.textContent = bookArray[i].state;
        if(bookState.textContent === "read") {
            bookState.style.color = "cyan";
            
        }
        else {
            bookState.style.color = "red";
        }
        trashIcon.setAttribute("data-key", `${i}`);
        readIcon.setAttribute("data-key", `${i}`);
        trashButtonList = document.querySelectorAll(".trash");

    }
}

const isHidden = elem => {
    const styles = window.getComputedStyle(elem);
    return styles.visibility === "hidden";
}
function showPopup() {
    if(isHidden(popupWindow)) {
        popupWindow.style.visibility = "visible";
        container.style.webkitFilter = "blur(3px)";
    }
    else {
        popupWindow.style.visibility = "hidden";
        container.style.webkitFilter = "blur(0px)";
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
console.log(myLibrary);
console.log(trashButtonList);

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

// for(let i = 0; i < trashButtonList.length; i++) {
//     trashButtonList[i].addEventListener("click", function() {
//         console.log(myLibrary[i].title + " deleted");
//         myLibrary.splice(i,1);
//         displayBooks(myLibrary);
//         console.log(myLibrary);
//         console.log(trashButtonList);
//     });
// }

document.addEventListener("click", function (event) {
    if(event.target.matches(".trash")) {
        console.log(event.target);
        let num = parseInt(event.target.dataset.key);
        console.log(num);
        myLibrary.splice(num,1);
    }

    if(event.target.matches(".read")) {
        let num = parseInt(event.target.dataset.key);
        console.log(myLibrary[num].state);
        if(myLibrary[num].state === "read") {
            console.log("first if case");
            myLibrary[num].state = "unread";
        }
        else {
            console.log("else case");
            myLibrary[num].state = "read";
        }
    }
    displayBooks(myLibrary);
});
