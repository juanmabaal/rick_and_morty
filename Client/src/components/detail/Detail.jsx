import { useEffect, useState } from "react"; 
import { useParams, useNavigate  } from "react-router-dom"; 
import style from './Detail.module.css';
import styles from './Detail.module.css';
import axios from 'axios';
let { btn, imageStyle} = styles;

const Detail = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [character, setCharacter] = useState();

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
         if (data.name) {
            setCharacter(data);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      }
    );
    return setCharacter({});
    }, [id]);
   


    return !character ? <div>Cargando...</div> : (
        <div className= {style.container} >
         <button className={btn} onClick={()=> navigate('/home')}>X</button>
         <div className={style.charactersContainer}>
            <img className={imageStyle} src={character.image} alt='' />
            <div>
               {/* <h2>{character.origin.name}</h2> */}
               <h3>{character.name}</h3>
               <h3>{character.status}</h3>
               <h3>{character.species}</h3>
               <h3>{character.gender}</h3>
            </div>
         </div>
      </div>
    )
}

export default Detail;