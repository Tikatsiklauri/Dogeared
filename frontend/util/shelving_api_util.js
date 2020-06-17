export const fetchShelvings = () => (
 $.ajax({
    method: 'get',
    url: `/api/shelving/`
})
)

export const fetchShelving = (id) => (
 $.ajax({
        method: 'get',
        url: `/api/shelving/${id}`
    })
)

export const createShelving = (shelving) => (
    $.ajax({
        method: 'post',
        url: `/api/shelving`,
        data: { shelving }
    })
)

export const updateShelving = (shelving) => (
     $.ajax({
        method: 'patch',
        url: `/api/shelving/${shelving.id}`,
        data: { shelving }
    })
)

export const removeShelving = (shelvingId) => (
   $.ajax({
        method: 'delete',
        url: `api/shelving/${shelvingId}`,
        data: { shelvingId }
    })
)