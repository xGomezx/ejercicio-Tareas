import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <input className='inputTask' type="text" placeholder='Ingresa la tarea' />
        <button className='buttonTask'>Crear</button>
      </div>
      <hr className='separator' />
      <div className='taskDiv'>
        <p className='pTask'>bañarse</p>
        <p className='pTask'>hacer tareas del sena</p>
      </div>
    </>
  )
}

export default App
