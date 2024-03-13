import style from './App.module.css';
import { Routes, Route, useNavigate } from 'react-router-dom'; 
import Cards from './components/Cards/Cards.jsx';
import About from './components/about/About.jsx';
import Navbar from './components/navBar/Navbar.jsx';
import Detail from './components/detail/Detail.jsx';
import Error from './components/error/Error.jsx';
import Form from './components/form/Form.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

   const navigate = useNavigate();

   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const EMAIL = 'juanma.baal@gmail.com'
   const PASSWORD = 'HERACLITO8';

   function login(userData){
      if(userData.password === PASSWORD && userData.email === EMAIL){
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access])

   const onSearch = (id) => {
      axios(`https://rym2.up.railway.app/api/character/${id}?key={tuApiKey}`).then(
         ({ data }) => {
            if (data.id) {
               const isCharacterExist = characters.some(character => character.id === data.id);
               if(!isCharacterExist)   { 
                  setCharacters((characters) => [...characters, data])
               }else {
                  window.alert('Este personaje ya existe en la Lista!');
               }
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      );
   }
   const onClose = (idString) =>{
      const id = parseInt(idString);
      const updateCharacters = characters.filter(character => character.id !== id);
      setCharacters(updateCharacters);
   };

   return (
      <div className={style.container}>
            <Navbar onSearch={onSearch}/>
         <Routes>
            <Route path='/home' element={
               <>
                  <div className={style.cardsContainer}>
                  <Cards 
                     key={characters.id}
                     characters={characters} 
                     onClose={onClose} 
                     id={characters.id}
                  />     
                  </div>
               </>
               }>              
            </Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/detail/:id' element={<Detail/>}></Route>
            <Route path='/' element={<Form login ={login}/>}></Route>
            <Route path='*' element={<Error/>}></Route>
         </Routes>
      </div>

   );
}

export default App;

