import { useForm } from 'react-hook-form'
import axios from 'axios'
import Modal from '../commons/Modal'

const Formulario = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = async datos => {
    try {
      await axios.post('http://localhost:3001/api/mascotas', datos, { withCredentials: true })
      console.log('Datos enviados exitosamente')
    } catch (error) {
      console.error('Error al enviar los datos:', error)
    }
  }
  const date = new Date().toLocaleString()

  const boton = <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '380px' }}><span style={{ backgroundColor: '#ddddddc0', borderRadius: '100% 100% 100% 100%', height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><p style={{ fontSize: '50px', color: '#f5f5f5' }}>+</p></span></div>

  const formulario = () => {
    return (
      <form id='formulario' onSubmit={handleSubmit(onSubmit)}>
        <h1>Ingresar nueva huellita</h1>
        <select {...register('animal')}>
          <option value='Perro'>Perro</option>
          <option value='Gato'>Gato</option>
        </select>
        <input type='text' placeholder='Nombre' {...register('name', { required: false, maxLength: 100 })} />
        <textarea type='text' placeholder='Nota' {...register('note', { required: false, maxLength: 100 })} />
        <label>
          *Importante:
          <input type='checkbox' placeholder='Importante' defaultChecked={false} {...register('important', {})} />
          <p style={{ fontSize: '10px' }}>*Si el animal se encuentra en una situción critica.</p>
        </label>
        <input type='hidden' value={date} {...register('date', {})} />
        <button>AGREGAR</button>
      </form>
    )
  }

  return (
    <div id='carta-mascota'>
      <Modal contenido={formulario()} textoDelBoton={boton} />
    </div>
  )
}

export default Formulario
