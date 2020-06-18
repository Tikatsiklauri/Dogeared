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

export const createShelving = (shelving) => (
    $.ajax({
        method: 'post',
        url: "/api/shelvings",
        data: { shelving }
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