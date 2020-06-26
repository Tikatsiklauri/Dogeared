export const fetchShelvings = () => (
 $.ajax({
    method: 'get',
    url: `/api/shelvings/`
})
)

export const fetchShelving = (id) => (
 $.ajax({
        method: 'get',
        url: `/api/shelvings/${id}`
    })
)

export const createShelving = (book_id, shelf_id, all_id) => (
    $.ajax({
        method: 'post',
        url: "/api/shelvings",
        data: { shelving: {book_id, shelf_id, all_id} }
    })
)

export const updateShelving = (shelving) => (
     $.ajax({
        method: 'patch',
        url: `/api/shelvings/${shelving.id}`,
        data: { shelving }
    })
)

export const removeShelving = (shelvingId) => (
   $.ajax({
        method: 'delete',
        url: `api/shelvings/${shelvingId}`,
        data: { shelvingId }
    })
)