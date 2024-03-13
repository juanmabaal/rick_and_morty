import { useState } from "react";
import style from './Form.module.css';
import validate from "./validation";


const Form = ({ login }) => {

    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    })

    const handleChange = (event) => {

        const {name, value} = event.target;
        setUserData({
            ...userData,
            [name]:value
        })
        validate({...userData, [name]: value}, errors, setErrors)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return (
        
        <form className={style.form} onSubmit={handleSubmit}>
            
            <img src='../../../img/Rick_and_Morty_Form.png'/>
            
            <div className={style.inputContainer}>
                <label htmlFor="email" className={style.labelForm}>Email:</label>
                <input
                    type="text"
                    name="email"
                    value={userData.email}
                    placeholder="Escribe tu email"
                    onChange={handleChange}
                    className={errors.email ? style.emailInputError : style.emailInputSuccess}
                />
                <span className={style.spanEmailError}>{errors.email}</span>
            </div>
            <div className={style.inputContainer}>
            <label htmlFor="password" className={style.labelForm}>Password:</label>
            <input
                    type="text"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    className={errors.password ? style.passwordInputError : style.passwordInputSuccess}
                />
                <span className={style.spanPasswordError}>{errors.password}</span>
            </div>
            <button 
            type="submit"
            className={style.buttonForm}
            >
                Submit
            </button>
        </form>
    )

}

export default Form;