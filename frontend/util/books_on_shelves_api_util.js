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

export const createBookOnShelf = (books_on_shelves) => (
    $.ajax({
        method: 'POST',
        url: "/api/books_on_shelves",
        data: {books_on_shelves}
    })
)

export const updateBookOnShelf = (books_on_shelves) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/books_on_shelves/${books_on_shelves.id}`,
        data: { books_on_shelves }
    })
)

export const deleteBookOnShelf = (books_on_shelvesId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/books_on_shelves/${books_on_shelvesId}`,
        data: { books_on_shelvesId }
    })
)
