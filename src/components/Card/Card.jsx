import styles from './Card.module.css';
import style from './Card.module.css';
import { useNavigate } from 'react-router-dom'; 
let { btn, imageStyle} = styles;

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   const navigate = useNavigate();
   
   return (
      <div className= {style.container} onClick={() => navigate(`/detail/${id}`)}>
         <button className={btn} onClick={()=> onClose(id)}>X</button>
         <div className={style.charactersContainer}>
            <img className={imageStyle} src={image} alt='' />
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
