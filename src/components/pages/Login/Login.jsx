import './Login.css'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login({onLogin}) {
  let {register, handleSubmit, formState:{errors}} = useForm();

  let navigate = useNavigate();

  let onSubmit = async (data) => {
    console.log("datos del formulario")
    console.log(data)
    try {
      let respuesta = await axios.post("", data) //entre comillas la url de la api
      onLogin()
      navigate("/home")
      console.log("Datos del servidor")
      console.log(respuesta)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className="titulo">
        <h1>Inicio de sesion</h1>
      </div>
        <div className="formularioContenedor">
          <form action="" className='formulario' onSubmit={handleSubmit(onSubmit)}>
            <div className="campoTexto">
              <label htmlFor="usuario" className='labelTexto'>Ingresar Correo</label>
              <input type="email" {...register("correo", { required: true })} className='inputTexto' placeholder='correo@ejemplo.com' />
              {errors.correo && <p className='errorTexto'>Debes escribir un correo</p>}
            </div>
            <div className="campoTexto">
              <label htmlFor="contraseña" className='labelTexto'>Ingresar Contraseña</label>
              <input type="password" {...register("contraseña", { required: true })}  className='inputTexto' placeholder='******' />
              {errors.contraseña && <p className='errorTexto'>La contraseña es obligatoria</p>}
            </div>
            <button type="submit" className='botonFormulario'>Iniciar Sesión</button>
          </form>
        </div>
    </div>
  )
}
