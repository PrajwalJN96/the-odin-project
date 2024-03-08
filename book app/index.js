const addBook = document.getElementById("addBook");
const title = document.getElementById("title");
const author = document.getElementById("author");
const noOfPages = document.getElementById("noOfPages");

const myLibrary = [];

function Book(title, author, pages, readingStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readingStatus = readingStatus;
}

function addBookToLibrary() {
  addBook.addEventListener("click", (event) => {
    event.preventDefault();
    let titleContent = title.value;
    let authorContent = author.value;
    let noOfPagesContent = noOfPages.value;
    let readingStatus = false;

     let book1 = new Book(
      titleContent,
      authorContent,
      noOfPagesContent,
      readingStatus
    );

    let singleBook = document.createElement("div");
    singleBook.classList.add("books");

    let container = document.querySelector(".container");
    container.appendChild(singleBook);

    singleBook.innerHTML = `
    <h3>${book1.title}</h3>
    <h3>${book1.author}</h3>
    <h3>${book1.pages}</h3>
    <button class="button removeBook">Remove Book</button>
    <button class="button statusBook">Reading</button>`;
  });
}

addBookToLibrary();

let removeBook = document.getElementsByClassName("removeBook")
let removeBooks = Array.from(removeBook)
removeBooks.forEach((book)=> {
  book.addEventListener("click",()=>{
    book1.innerhtml=""
    console.log("ermove");
  })
})