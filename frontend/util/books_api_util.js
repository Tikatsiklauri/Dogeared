export const fetchBooks = () => (
    $.ajax({
        method: 'GET',
        url: "/api/books"
    })
);

export const fetchBook = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/books/${id}`
    })
);

export const fetchShelfBooks = (shelfId) => (
    $.ajax({
        method: 'GET',
        url: "/api/books",
        data: {shelfId}
    })
);

export const createBook = (book) => (
    $.ajax({
        method: 'POST',
        url: "/api/books",
        data: {book}
    })
);

export const updateBook = (book) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/books/${book.id}`,
        data: {book}
    })
)

export const removeBook = (bookId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/books/${bookId}`,
        data: {bookId}
    })
)