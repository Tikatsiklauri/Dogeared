import * as BooksUtil from '../util/books_api_util';

export const RECEIVE_ALL_BOOKS = 'RECEIVE_ALL_BOOKS';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const receiveAllbooks = (books) => ({
    type: RECEIVE_ALL_BOOKS,
    books
})

export const receivebook = ({books, reviews}) => ({
    type: RECEIVE_BOOK,
    books,
    reviews
})
export const removeBook = (book) => ({
    type: REMOVE_BOOK,
    bookId: book.id
})

export const fetchBooks = () => dispatch => (
    BooksUtil.fetchBooks()
        .then(books => dispatch(receiveAllbooks(books)))
)

export const fetchBook = (id) => dispatch => (
    BooksUtil.fetchBook(id)
        .then(book => dispatch(receivebook(book)))
)

export const fetchBooksOnShelves = (shelfId) => (dispatch) => (
    BooksUtil.fetchShelfBooks(shelfId)
        .then(books => dispatch(receiveAllbooks(books)))
)

export const createBook = (book) => dispatch => (
    BooksUtil.createBook(book)
        .then(book => dispatch(receivebook(book)))
)

export const updateBook = (id) => dispatch => (
    BooksUtil.updateBook(id)
        .then(book => dispatch(receivebook(book)))
)

export const deleteBook = (bookId) => dispatch => (
    BooksUtil.removeBook(bookId)
        .then(book => dispatch(removeBook(book)))
)