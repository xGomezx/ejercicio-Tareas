import React from 'react'
import './FilterTasks.css'

export const FilterTasks = ({children}) => {
  return (
    <div className='divContainer'>
        <div>
            <label htmlFor="">Filtrar</label>
            <select name="" id="">
                <option value="">Todas las tareas</option>
                <option value="">Pendientes</option>
                <option value="">Resueltas</option>
            </select>
        </div>
        <div className='firstDiv'>
          <ul className='listTasks'>
            {children}
          </ul>
        </div>
    </div>
  )
}
