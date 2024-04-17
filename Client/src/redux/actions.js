import { ADD_FAV, REMOVE_FAV, FILTER_FAV, ORDER_FAVS } from "./actions-type"
import axios  from 'axios';


// const addFav = (character) => {
    
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//    return (dispatch) => {
//       axios.post(endpoint, character).then(({ data }) => {
//          return dispatch({
//             type: 'ADD_FAV',
//             payload: data,
//          });
//       });
//    };
// }

const addFav = (character) => {
    
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return async (dispatch) => {
     try {
         const { data } =  await axios.post(endpoint, character)
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
     }
     catch(error){
      console.log(error)

     }
  };
}



// const removeFav = (id) => {
    
//     const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//    return (dispatch) => {
//       axios.delete(endpoint).then(({ data }) => {
//          return dispatch({
//             type: 'REMOVE_FAV',
//             payload: data,
//       });
//       });
//    };
// }

const removeFav = (id) => {
    
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;

  return async (dispatch) => {
     try {
         const { data } = await axios.delete(endpoint);
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
      });
     }
     catch(error){
      console.log(error)
     }
  };
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