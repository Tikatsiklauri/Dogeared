import * as BooksOnShelvesUtil from '../util/books_on_shelves_api_util';

export const RECEIVE_BOOKS_ON_SHELVES = "RECEIVE_BOOKS_ON_SHELVES";
export const RECEIVE_BOOK_ON_SHELF = "RECEIVE_BOOK_ON_SHELF";
export const REMOVE_BOOK_ON_SHELF = "REMOVE_BOOK_ON_SHELF";

export const receiveBooksOnShelves = (books_on_shelves) => ({
    type: RECEIVE_BOOKS_ON_SHELVES,
    books_on_shelves
})

export const receiveBookOnShelf = (payload) => ({
    type: RECEIVE_BOOK_ON_SHELF,
    payload: payload
})

export const removeBookOnShelf = (book_on_shelf) => ({
    type: REMOVE_BOOK_ON_SHELF,
    book_on_shelfId: book_on_shelf.id,
    bookId: book_on_shelf.book_id
})


export const fetchBooksOnShelves = () => dispatch => (
    BooksOnShelvesUtil.fetchBooksOnShelves()
        .then(books_on_shelves => dispatch(receiveBooksOnShelves(books_on_shelves)))
)

export const fetchBookOnShelf = (id) => dispatch => (
    BooksOnShelvesUtil.fetchBookOnShelf(id)
        .then(book_on_shelf => dispatch(receiveBookOnShelf(book_on_shelf)))
)

export const createBookOnShelf = (book_on_shelf) => dispatch => (
    BooksOnShelvesUtil.createBookOnShelf(book_on_shelf)
        .then(book_on_shelf => dispatch(receiveBookOnShelf(book_on_shelf)))
)

export const updateBookOnShelf = (id) => dispatch => (
    BooksOnShelvesUtil.updateBookOnShelf(id)
        .then(book_on_shelf => dispatch(receiveBookOnShelf(book_on_shelf)))
)

export const removeBookOnShelf = (book_on_shelfId) => dispatch => (
    BooksOnShelvesUtil.deleteBookOnShelf(book_on_shelfId)
        .then(book_on_shelf => dispatch(removeBookOnShelf(book_on_shelf)))
)