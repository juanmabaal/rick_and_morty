import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import Cards from "../Cards/Cards";
import { filterFavs, orderFavs } from "../../redux/actions";


const Favorites = ({myFavorites}) => {

    const dispatch = useDispatch();
    const optionGender = ['All','Male', 'Female', 'Genderless', 'unknown'];
    const [aux, setAux ] = useState(false);

    const handleOrder = (e) => {
        dispatch(orderFavs(e.target.value))
        setAux(!aux)
    }

    const handleFilter = (e) => {
        dispatch(filterFavs(e.target.value))
    }

    return (
        
    <div>
        <select onChange={handleOrder}>
            <option value='A'>ASCENDENTE</option>
            <option value='D'>DESCENDENTE</option>
        </select>
        <select onChange={handleFilter}>
            {
                optionGender.map (op => <option key={op} value={op}>
                    {op}
                </option>)
            }
        </select>
        <Cards characters={myFavorites}/>
        
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}



export default connect(mapStateToProps, null)(Favorites);