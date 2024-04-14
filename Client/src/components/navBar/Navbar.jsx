import SearchBar from "../SearchBar/SearchBar"
import { useNavigate, useLocation, Link } from "react-router-dom"; 

const Navbar = ({onSearch}) => {
    const location = useLocation();
    const isFormRoute = location.pathname === '/';
    
    if (isFormRoute)return null;

    const navigate = useNavigate();
    return (
        <nav>
            <button onClick={()=> navigate(-1)}>Atras</button>
            <button onClick={()=> navigate('/home')}>Home</button>
            <button onClick={()=> navigate('/about')}>About</button>
            <button onClick={()=> navigate('/favorites')}>Favorites</button>
            <SearchBar onSearch={onSearch}/>  
        </nav>
    )
}

export default Navbar;