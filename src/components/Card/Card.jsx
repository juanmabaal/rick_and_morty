import styles from './Card.module.css';
import style from './Card.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
let { btn, imageStyle} = styles;

 function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {
   const navigate = useNavigate();

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      isFav ? removeFav(id)
      : addFav({
         id,
         name,
         image, 
         status,
         species,
         gender
      });
      setIsFav(!isFav);
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);
   
   return (
      <div className= {style.container} >
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ): (
               <button onClick={handleFavorite}>❤</button>
            )
         }
         <button className={btn} onClick={()=> onClose(id)}>X</button>
         <div className={style.charactersContainer}>
            <img className={imageStyle} src={image} alt=''onClick={() => navigate(`/detail/${id}`)} />
            <div>
               {/* <h2>{origin.name}</h2> */}
               <h3>{name}</h3>
               <h3>{status}</h3>
               <h3>{species}</h3>
               <h3>{gender}</h3>
            </div>
         </div>
      </div>
   );
}  

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character))
      },
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
