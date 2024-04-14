
export default function validate (userData, errors, setErrors) {
    
    const minLength = 6;
    const maxLength = 10;
    const hasNumber = /\d/.test(userData.password);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validación del campo Email
    if (!userData.email) {
        setErrors(prevErrors => ({ ...prevErrors, email: 'Email vacío' }));
    } else if (!emailRegex.test(userData.email)) {
        setErrors(prevErrors => ({ ...prevErrors, email: 'Email inválido' }));
    } else if (userData.email.length > 35) {
        setErrors(prevErrors => ({ ...prevErrors, email: 'El email no puede tener más de 35 caracteres' }));
    } else {
        setErrors(prevErrors => ({ ...prevErrors, email: '' }));
    }

    // Validación del campo Contraseña
    if (!userData.password) {
        setErrors(prevErrors => ({ ...prevErrors, password: 'Debe ingresar una contraseña válida' }));
    } else if (userData.password.length < minLength || userData.password.length > maxLength) {
        setErrors(prevErrors => ({ ...prevErrors, password: `La contraseña debe tener entre ${minLength} y ${maxLength} caracteres` }));
    } else if (!hasNumber) {
        setErrors(prevErrors => ({ ...prevErrors, password: 'La contraseña debe contener al menos un número' }));
    } else {
        setErrors(prevErrors => ({ ...prevErrors, password: '' }));
    }
}