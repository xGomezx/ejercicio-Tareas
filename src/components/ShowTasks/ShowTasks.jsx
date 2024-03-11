import React from 'react'
import './ShowTasks.css'

export const ShowTasks = ({title, description}) => {
  return (
    <div className='firstDiv'>
        <div className='secondDiv'>
            <h2 className='titleShowTask'>{title} </h2>
            <p className='descriptionShowTask'>{description}</p>
            <button className='file'>Archivar</button>
        </div>
    </div>
  )
}
