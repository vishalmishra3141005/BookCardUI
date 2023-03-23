
let uiContainer = document.querySelector(".ui-container");
let imageFolder = "/assets/images";

function createUI() {
    while (uiContainer.firstChild) {
        uiContainer.removeChild(uiContainer.lastChild);
    }

    for (let book of books) {
        console.log(book);
        let newBook = document.createElement("div");
        newBook.setAttribute("class", "book-container");
        newBook.setAttribute("id", `${book.bookid}`)

        let iconContainer = document.createElement("div");
        iconContainer.setAttribute("class", "icon-container");

        icon = document.createElement("img");
        icon.setAttribute("class", "icon-style");
        icon.setAttribute("src", `${imageFolder}/${book.images}`);

        iconContainer.appendChild(icon);
        newBook.appendChild(iconContainer);
        let bookWrapper = document.createElement("div");
        bookWrapper.setAttribute("class", "book-wrapper");

        let bookDetailContainer = document.createElement("div");
        bookDetailContainer.setAttribute("class", "book-detail-container");

        let bookTitleContainer = document.createElement("div");
        bookTitleContainer.setAttribute("class", "common-padding book-title-container");

        let bookTitle = document.createElement("div");
        bookTitle.setAttribute("class", "book-title");
        bookTitle.innerText = book.book.title;

        bookTitleContainer.appendChild(bookTitle);

        bookDetailContainer.appendChild(bookTitleContainer);

        let bookAuthorContainer = document.createElement("div");
        bookAuthorContainer.setAttribute("class", "common-padding book-author-container");

        let bookAuthor = document.createElement("div");
        bookAuthor.setAttribute("class", "book-author");
        bookAuthor.innerText = book.book.author;
        bookAuthorContainer.appendChild(bookAuthor);


        bookDetailContainer.appendChild(bookAuthorContainer);
        bookWrapper.appendChild(bookDetailContainer);

        newBook.appendChild(bookWrapper);
        uiContainer.appendChild(newBook);
    }
}

createUI();