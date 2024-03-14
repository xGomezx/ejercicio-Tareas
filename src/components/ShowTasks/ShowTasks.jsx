import React, { useState } from 'react';
import './ShowTasks.css';

export const ShowTasks = ({ title, description,statusTask }) => {

  const [isChecked, setIsChecked] = useState(false);
  const [statusTask,setStatusTask] = useState(false)

  const updateClass = (event) => {
    const newValue = event.target.checked;
    setIsChecked(newValue);
    console.log('El checkbox está marcado:', newValue);

  }
  if (isChecked == true) {
    setStatusTask(true)
  }

  let circleClasses = 'circle1';
  if (isChecked) {
    circleClasses += ' circle2';
  }

  return (
    <li className='itemTask'>
      <span className={circleClasses}></span>
      <h2 className='titleShowTask'>{title}</h2>
      <p className='descriptionShowTask'>{description}</p>
      <input onChange={updateClass} checked={isChecked} className='check' type="checkbox" />
    </li>
  )
}
