import Card from '../Card/Card';

import style from './Cards.module.css'

export default function Cards({characters, onClose}) {
   return(
    <div className={style.cardContainer}>
      {
         characters.map(({id, image, name, status, species, gender, origin } )=> 
            <Card 
            key ={id}
            id={id}
            image={image}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin?.name}
            
            onClose={onClose}
            />
         )
      }
      {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={onClose}
         /> */}

   </div>
   )
}
