class Book {
    bookId: number
    bookName: string
    bookPrice: number

    constructor() {
        this.bookId = 0
        this.bookName = ''
        this.bookPrice = 0
    }

}

var book1 = new Book()
book1.bookId = 87623
book1.bookName = 'Learning HTML'
book1.bookPrice = 234.5

var book2 = new Book()
book2.bookId = 86367
book2.bookName = 'Angular Basics'
book2.bookPrice = 1294.75

var book3 = new Book()
book3.bookId = 24287
book3.bookName = 'React Basics'
book3.bookPrice = 1194.75

var books: Book[]
books = [book1, book2, book3]

function mapBooksToTable() {
    var tableString = ""

    for (let i = 0; i < books.length; i++) {
        tableString += `
                <tr>
                    <td>${books[i].bookId}</td>
                    <td>${books[i].bookName}</td>
                    <td>${books[i].bookPrice}</td>
                </tr>
        `
    }
    tableString += `
        <tr>
            <td>
                <input type="number" class="form-control" id="bookId" placeholder="enter book id">
            </td>
            <td>
                <input type="text" class="form-control" id="bookName" placeholder="enter book name">
            </td>
            <td>
            <div class="d-flex justify-content-start">
                <input type="number" class="form-control" id="bookPrice" placeholder="enter book price">
                <button class="btn btn-primary ms-2" onclick="addBook()">save</button>
            </div>
            </td>
        </tr>
    `
    document.getElementById("tableBody").innerHTML = tableString
}

function addBook() {
    var newBook: Book = new Book()

    var tempBookId: any = document.getElementById("bookId")
    newBook.bookId = tempBookId.value

    var tempBookName: any = document.getElementById("bookName")
    newBook.bookName = tempBookName.value

    var tempBookPrice: any = document.getElementById("bookPrice")
    newBook.bookPrice = tempBookPrice.value

    books.push(newBook)
    mapBooksToTable()
}