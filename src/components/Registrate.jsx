import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "../assets/css/Registrate.css";

import React, {useState} from "react";
import {auth} from "../Firebase";
import {useNavigate} from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";


const RegistroUsuarios = () => {
	const navigate = useNavigate();
	const [correo, establecerCorreo] = useState('');
	const [password, establecerPassword] = useState('');

	const handleChange = (e) => {
		switch(e.target.name){
			case 'email':
				establecerCorreo(e.target.value);
				break;
			case 'password':
				establecerPassword(e.target.value);
				break;
			default:
				break;
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		if(correo === '' || password === '' ){
            return;
		}

		try {
			await createUserWithEmailAndPassword(auth, correo, password );
			navigate('/Registrate');
		} catch(error) {
			//console.log('error');

			let mensaje;
			switch(error.code){
				case 'auth/invalid-password':
					mensaje = 'La contraseña tiene que ser de al menos 6 caracteres.'
					break;
				case 'auth/email-already-in-use':
					mensaje = 'Ya existe una cuenta con el correo electrónico proporcionado.'
				break;
				case 'auth/invalid-email':
					mensaje = 'El correo electrónico no es válido.'
				break;
				default:
					mensaje = 'Hubo un error al intentar crear la cuenta.'
				break;
			}
		}
	}
  
  
  
  return (
    <>
    <Form className="Registrate" onSubmit={handleSubmit}>      
        <Form.Group  controlId="formGridEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control type="email" name="email" value={correo} onChange={handleChange} placeholder="Ingresa tu Correo Electrónico..." />
        </Form.Group>

        <Form.Group  controlId="formGridPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" name="password" value={password} onChange={handleChange} placeholder="Ingresa tu Contraseña..." />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
			    <Form.Label>Repetir Contraseña</Form.Label>
			    <Form.Control type="password" name="password2"  placeholder="Repite tu contraseña..." />
		    </Form.Group>	

        <div className='btn-IS'>
            <Button as="button" variant="success"  type='submit'>Crear cuenta</Button>{' '}
		    <Button as="button" variant="info"  type='submit'>Volver</Button>
		  </div>       
    </Form >   
     </>
  );
}

export default RegistroUsuarios;
