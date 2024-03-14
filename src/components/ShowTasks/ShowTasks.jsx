import React from 'react'
import './ShowTasks.css'

export const ShowTasks = ({title, description}) => {
  return (
        <li className='itemTask'>
          <span className='circle1'></span>
          <h2 className='titleShowTask'>{title} </h2>
          <p className='descriptionShowTask'>{description}</p>
          <input type="checkbox" name="" id="" />
        </li>
  )
}
