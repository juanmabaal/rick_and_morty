import style from './App.module.css';
import { Routes, Route, useNavigate } from 'react-router-dom'; 
import Cards from './components/Cards/Cards.jsx';
import About from './components/about/About.jsx';
import Navbar from './components/navBar/Navbar.jsx';
import Detail from './components/detail/Detail.jsx';
import Error from './components/error/Error.jsx';
import Form from './components/form/Form.jsx';
import FavoritesView from './components/views/FavoritesViews'
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

   const navigate = useNavigate();

   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(true);

 

   // function login(userData){

   //    const { email, password } = userData;
   //    const URL = 'http://localhost:3001/rickandmorty/login/';
      
   //     axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
   //       const { access } = data;
   //       setAccess(data);
   //       access && navigate('/home');
   //    });
       
   // }

   async function login(userData){

      try{
         const { email, password } = userData;
            const URL = 'http://localhost:3001/rickandmorty/login/';
            
            const { data } = await axios(URL + `?email=${email}&password=${password}`)

               setAccess(data.access);
               access && navigate('/home');
             
      }
      catch(error){
         window.alert('Usuario o contraeña incorrectos')
      }
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access])

   async function onSearch (id) {

      try{
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (data.id) {
                  const isCharacterExist = characters.some(character => character.id === data.id);
                  if(!isCharacterExist)   { 
                           setCharacters((oldChars) => [...oldChars, data]);
                  }else {
                           window.alert('Este personaje ya existe en la Lista!');
                   }

         
         }
      }
      catch(error){
         window.alert('¡No hay personajes con este ID!');
      }
   }
      
      // const onSearch = (id) => {
      //    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      //       ({ data }) => {
      //          if (data.id) {
      //             const isCharacterExist = characters.some(character => character.id === data.id);
      //             if(!isCharacterExist)   { 
      //                setCharacters((characters) => [...characters, data])
      //             }else {
      //                window.alert('Este personaje ya existe en la Lista!');
      //             }
      //          } else {
      //             window.alert('¡No hay personajes con este ID!');
      //          }
      //       }
      //    );
      // }
   
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
               <Route path='/favorites' element={<FavoritesView/>}></Route>
               <Route path='/detail/:id' element={<Detail/>}></Route>
               
               <Route path='/' element={<Form login ={login}/>}></Route>
               <Route path='*' element={<Error/>}></Route>
         </Routes>
        
      </div>

   );
}

export default App;

