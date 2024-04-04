import React, { useContext } from 'react'
import './FilterTasks.css'
import { tasksContext } from '../Context/Context'

export const FilterTasks = ({children}) => {

  const filterContext = useContext(tasksContext)

  const handleFilters = (event) =>{
    let currentOption = event.target.value
    filterContext.setFilterOption(currentOption); 
  }

  return (
    <div className='divContainer'>
        <div>
            <label className='lblFilter' htmlFor="">Filtrar:</label>
            <select onChange={handleFilters} name="" id="">
                <option value="all">Todas las tareas</option>
                <option value="earrings">Pendientes</option>
                <option value="completed">Resueltas</option>
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
