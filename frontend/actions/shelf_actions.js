import * as ShelfUtil from '../util/shelf_api_util';


export const RECEIVE_ALL_SHELVES = 'RECEIVE_ALL_SHELVES';
export const RECEIVE_SHELF = 'RECEIVE_SHELF';
export const REMOVE_SHELF = 'REMOVE_SHELF';

export const receiveAllShelves = (shelves) => ({
    type: RECEIVE_ALL_SHELVES,
    shelves
}) 

export const receiveShelf = (payload) => ({
    type: RECEIVE_SHELF,
    payload: payload
})

export const removeShelf = (shelf) => ({
    type: REMOVE_SHELF,
    shelfId: shelf.id
})

export const fetchShelves = () => dispatch => (
    ShelfUtil.fetchShelves()
        .then(shelves => dispatch(receiveAllShelves(shelves)))
)

export const fetchShelf = (id) => dispatch => (
    ShelfUtil.fetchShelf(id)
        .then(shelf => dispatch(receiveShelf(shelf)))
)

export const createShelf = (shelf) => dispatch => (
    ShelfUtil.createShelf(shelf)
        .then(shelf => dispatch(receiveShelf(shelf)))
)

export const deleteShelf = (shelfId) => dispatch => (
    ShelfUtil.deleteShelf(shelfId)
        .then(shelf => dispatch(removeShelf(shelf)))
)