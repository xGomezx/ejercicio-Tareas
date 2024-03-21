import React, { useContext, useState } from 'react';
import './ShowTasks.css';
import { tasksContext } from '../Context/Context';

export const ShowTasks = ({ title, description, id }) => {
  
  const [isChecked, setIsChecked] = useState(false);

  const showContext = useContext(tasksContext);

  const updateClass = (event) => {

      const newValue = event.target.checked; 
      setIsChecked(newValue);
  
      showContext.setTasks(prevTasks => {
        return prevTasks.map(task => {
          if (task.id === id) {
            return { ...task, status: newValue }; 
          } else {
            return task; 
          }
        });
      });
  };
  

  let circleClasses = 'circle1';
  let titleComplet = 'titleShowTask'

  if (isChecked) {
    circleClasses += ' circle2';
    titleComplet += ' titleComplet'
  }

  return (
    <li className='itemTask'>
      <span className={circleClasses}></span>
      <h2 className={titleComplet}>{title}</h2>
      <p className='descriptionShowTask'>{description}</p>
      <input onChange={updateClass} checked={isChecked} className='check' type="checkbox" />
    </li>
  )
}