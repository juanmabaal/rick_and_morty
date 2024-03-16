import { ADD_FAV, REMOVE_FAV, FILTER_FAV, ORDER_FAVS } from "./actions-type"

const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character
    }
}

const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

const filterFavs = (gender) => {
    return {
        type: FILTER_FAV,
        payload: gender
    }
}

const orderFavs = (order) => {
    return {
    type: ORDER_FAVS,
    payload: order
    }
}

export { addFav, removeFav, filterFavs, orderFavs };