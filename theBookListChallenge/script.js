const books = [
    {
      title: "The Design of EveryDay Things",
      author: "Don Norman",
      alreadyRead: false,
    },
    {
      title: "The Most Human Human",
      author: "Brian Christian",
      alreadyRead: true,
    },
    {
        title: "Saga of the Seven Suns",
        author: "Kevin J Anderson",
        alreadyRead: true,
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
        alreadyRead: true
    }
  ];

function displayAllBooks() {
    const ul = document.createElement("ul");
    document.body.appendChild(ul);
    for (const book of books) {
        const li = document.createElement("li");
        ul.append(li);    
        li.textContent = `${book.title} [by ${book.author}]`    
    }
};

displayAllBooks();