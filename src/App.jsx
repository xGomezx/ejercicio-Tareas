import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [tasks, setTasks] = useState([
    {
      idTask: '1',
      nameTask: 'Bañarse'
    },
    {
      idTask: '2',
      nameTask: 'Hacer tareas del sena'
    },
    {
      idTask:'3',
      nameTask: 'Subir a challenger'
    }
  ]);


  return (
    <>
      <div>
        <input className='inputTask' type="text" placeholder='Ingresa la tarea' />
        <button className='buttonTask'>Crear</button>
      </div>
      <hr className='separator' />

      <div className='taskDiv'>

        {tasks.map(item => (
         console.log(item.nameTask)
        ))}

      </div>
    </>
  )
}

export default App
