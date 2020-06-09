export const fetchBooksOnShelves = () => (
    $.ajax({
        method: 'GET',
        url: "/api/books_on_shelves"
    })
)

export const fetchBookOnShelf = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/books_on_shelves/${id}`
    })
)

export const createBookOnShelf = (book_on_shelf) => (
    $.ajax({
        method: 'POST',
        url: "/api/books_on_shelves",
        data: {book_on_shelf}
    })
)

export const updateBookOnShelf = (book_on_shelf) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/books_on_shelves/${books_on_shelves.id}`,
        data: { book_on_shelf}
    })
)

export const deleteBookOnShelf = (book_on_shelfId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/books_on_shelves/${book_on_shelfId}`,
        data: { book_on_shelfId }
    })
)
