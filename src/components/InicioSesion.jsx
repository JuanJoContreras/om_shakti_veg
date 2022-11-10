import React, {useState} from "react";
import { Link } from "react-router-dom";
import {auth} from "../Firebase";
import {useNavigate} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import "../assets/css/InicioSesion.css";
import { Form, Button} from 'react-bootstrap';


const InicioSesion = () => {
    const navigate = useNavigate();
	const [correo, establecerCorreo] = useState('');
	const [password, establecerPassword] = useState('');

    const handleChange = (e) => {
		if(e.target.name === 'email'){
			establecerCorreo(e.target.value);
		} else if (e.target.name === 'password'){
			establecerPassword(e.target.value);
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		if(correo === '' || password === ''){
			return;
		}
		try {
			await signInWithEmailAndPassword(auth, correo, password);
			navigate('/InicioSesion');
		} catch(error) {
			//console.log(error)
			let mensaje;
			switch(error.code){
				case 'auth/wrong-password':
					mensaje = 'La contraseña no es correcta.'
					break;
				case 'auth/user-not-found':
					mensaje = 'No se encontro ninguna cuenta con este correo electrónico.'
					break;
				default:
					mensaje = 'Hubo un error al intentar crear la cuenta.'
				break;
			}
		}
	}

	return (
		<>
		<Form onSubmit={handleSubmit} className="InicioSesion">
		  <Form.Group className="text-center mb-3 input-container" controlId="exampleForm.ControlInput1">
			<Form.Label>Correo Electrónico</Form.Label>
			<Form.Control input className='input' type="email" name="email" placeholder="Ingresa tu correo..." value={correo} onChange={handleChange}/>
		  </Form.Group>

		  <Form.Group className="text-center mb-3 input-container" controlId="formBasicPassword.ControlInput1">
			<Form.Label>Contraseña</Form.Label>
			<Form.Control input className='input' type="password" name="password" value={password} onChange={handleChange} placeholder="Ingresa tu contraseña..." />
		  </Form.Group>		

		  <div className='btn-IS'>
                <Button as="button" variant="success" className='button-IS px-10 font-semibold text-lg text-teal-50 text-teal-900 transition-colors duration-150 bg-lime-500 rounded-lg focus:shadow-outline hover:bg-lime-300"' type='submit'>Iniciar Sesión</Button>
				<Button as="button" variant="info" className='button-IS px-10 font-semibold text-lg text-teal-50 text-teal-900 transition-colors duration-150 bg-lime-500 rounded-lg focus:shadow-outline hover:bg-lime-300"' type='submit'>Volver</Button>
		  </div>		  
		</Form>		
		</> 
	  );
}
export default InicioSesion;