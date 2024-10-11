var Book = /** @class */ (function () {
    function Book() {
        this.bookId = 0;
        this.bookName = '';
        this.bookPrice = 0;
    }
    return Book;
}());
var book1 = new Book();
book1.bookId = 87623;
book1.bookName = 'Learning HTML';
book1.bookPrice = 234.5;
var book2 = new Book();
book2.bookId = 86367;
book2.bookName = 'Angular Basics';
book2.bookPrice = 1294.75;
var book3 = new Book();
book3.bookId = 24287;
book3.bookName = 'React Basics';
book3.bookPrice = 1194.75;
var books;
books = [book1, book2, book3];
function mapBooksToTable() {
    var tableString = "";
    for (var i = 0; i < books.length; i++) {
        tableString += "\n                <tr>\n                    <td>".concat(books[i].bookId, "</td>\n                    <td>").concat(books[i].bookName, "</td>\n                    <td>").concat(books[i].bookPrice, "</td>\n                </tr>\n        ");
    }
    tableString += "\n        <tr>\n            <td>\n                <input type=\"number\" class=\"form-control\" id=\"bookId\" placeholder=\"enter book id\">\n            </td>\n            <td>\n                <input type=\"text\" class=\"form-control\" id=\"bookName\" placeholder=\"enter book name\">\n            </td>\n            <td>\n            <div class=\"d-flex justify-content-start\">\n                <input type=\"number\" class=\"form-control\" id=\"bookPrice\" placeholder=\"enter book price\">\n                <button class=\"btn btn-primary ms-2\" onclick=\"addBook()\">save</button>\n            </div>\n            </td>\n        </tr>\n    ";
    document.getElementById("tableBody").innerHTML = tableString;
}
function addBook() {
    var newBook = new Book();
    var tempBookId = document.getElementById("bookId");
    newBook.bookId = tempBookId.value;
    var tempBookName = document.getElementById("bookName");
    newBook.bookName = tempBookName.value;
    var tempBookPrice = document.getElementById("bookPrice");
    newBook.bookPrice = tempBookPrice.value;
    books.push(newBook);
    mapBooksToTable();
}
