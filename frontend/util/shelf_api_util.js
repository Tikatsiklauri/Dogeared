export const fetchShelves = () => (
    $.ajax({
        method: 'GET',
        url: "/api/shelves"
    })
)

export const fetchShelf = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/shelves/${id}`
    })
)

export const createShelf = (shelf) => (
    $.ajax({
        method: 'POST',
        url: "/api/shelves",
        data: {shelf}
    })
)


export const deleteShelf = (shelfId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/shelves/${shelfId}`,
        data: {shelfId}
    })
)