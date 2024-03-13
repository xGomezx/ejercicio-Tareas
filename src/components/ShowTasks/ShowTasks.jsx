import React from 'react'
import './ShowTasks.css'

export const ShowTasks = ({title, description}) => {
  return (
    <div className='divTasks'>
      <ul className='listTasks'>
        <li className='itemTask'>
          <h2 className='titleShowTask'>{title} </h2>
          <p className='descriptionShowTask'>{description}</p>
          <input type="checkbox" name="" id="" />
        </li>
      </ul>
       
    </div>
  )
}
