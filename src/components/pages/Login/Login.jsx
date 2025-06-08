import './Login.css'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import datos from '../../../assets/data.json'
import { UseAuth } from '../../../context/AuthContext';

export default function Login() { //{onLogin}
  let {login} = UseAuth();
  console.log(datos.users)
  let {register, handleSubmit, formState:{errors}} = useForm();

  let navigate = useNavigate();

  // const onSubmit = async (data) => {
  //   console.log("datos del formulario")
  //   console.log(data)
  //   try {
  //     let respuesta = await axios.post("", data) //entre comillas la url de la api
  //     onLogin()
  //     navigate("/home")
  //     console.log("Datos del servidor")
  //     console.log(respuesta)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  const onSubmit = (dataForm) => {
    console.log("form user", dataForm)
    //logica para verificar un usuaurio
    let userVerify = datos.users.find((u)=>{
      return u.email== dataForm.email && u.password == dataForm.password;
    });

  console.log("usuario: ", userVerify);

  // guardar el usuario en localStorage y redireccionar al home
  if(userVerify){
    login(userVerify);
    
  }else{
    alert("Usuario o contraseña incorrectos");
  }
  }

  return (
    <div>
      <div className="titulo">
        <h1>Inicio de sesion</h1>
      </div>
        <div className="formularioContenedor">
          <form className='formulario' onSubmit={handleSubmit(onSubmit)}>
            <div className="campoTexto">
              <label htmlFor="usuario" className='labelTexto'>Ingresar Correo</label>
              <input type="email" {...register("email", { required: true })} className='inputTexto' placeholder='correo@ejemplo.com' />
              {errors.correo && <p className='errorTexto'>Debes escribir un correo</p>}
            </div>
            <div className="campoTexto">
              <label htmlFor="contraseña" className='labelTexto'>Ingresar Contraseña</label>
              <input type="password" {...register("password", { required: true })}  className='inputTexto' placeholder='******' />
              {errors.contraseña && <p className='errorTexto'>La contraseña es obligatoria</p>}
            </div>
            <button type="submit" className='botonFormulario'>Iniciar Sesión</button>
          </form>
        </div>
    </div>
  )
}
