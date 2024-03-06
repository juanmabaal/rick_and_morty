import SearchBar from "../SearchBar/SearchBar"
import { useNavigate, Link } from "react-router-dom"; 

const Navbar = ({onSearch}) => {

    const navigate = useNavigate();
    return (
        <nav>
            <button onClick={()=> navigate(-1)}>Atras</button>
            <button onClick={()=> navigate('/home')}>Home</button>
            <button onClick={()=> navigate('/about')}>About</button>
            <SearchBar onSearch={onSearch}/>  
        </nav>
    )
}

export default Navbar;