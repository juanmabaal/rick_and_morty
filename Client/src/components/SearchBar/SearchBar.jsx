import style from './SearchBar.module.css';
import { useState } from "react";

export default function SearchBar({onSearch}) {

   const [id, setId] = useState('');
   
   const handleChange = (event) => {
      setId(event.target.value);
   }


   return (
      <div className = {style.containerSearchBar}>
         <span className= {style.spanSearchCharacter}>Agrega un personaje: </span>
         <input className ={style.inputSearch} type='search' onChange={handleChange} value={id}/>
         <button className ={style.btnSearch} onClick={() =>onSearch(id)}>Agregar</button>
      </div>
   );
}
