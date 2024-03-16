import { ADD_FAV, REMOVE_FAV, FILTER_FAV, ORDER_FAVS } from "./actions-type"

const initialState = {
    myFavorites: [],
    allCharacter: []
}

function  rootReducer (state = initialState, action) {
    
    switch(action.type) {
        case ADD_FAV:
            return {
                ...state, myFavorites: [...state.myFavorites, action.payload],
                allCharacter: [...state.allCharacter, action.payload]
            }
        case REMOVE_FAV:
            const filteredFavs =  state.myFavorites.filter((fav) =>  
                 fav.id !== Number(action.payload)
            );
            return {
                ...state,
                myFavorites: filteredFavs,
            }
        case FILTER_FAV: 
        const filteredFavsGender = 
        action.payload === 'All' ?
            state.allCharacter
           :state.allCharacter.filter((fav) =>  fav.gender === action.payload);

            return {
                ...state,
                myFavorites: filteredFavsGender,
            }

        case ORDER_FAVS: 
            const orderFavs = state.myFavorites.sort((a, b) => { 
                return action.payload === 'A' ? a.id - b.id : b.id - a.id;
           });
                return {
                    ...state,
                    myFavorites: orderFavs,
                }
        default:
            return {...state};
    }
}

export default rootReducer;

