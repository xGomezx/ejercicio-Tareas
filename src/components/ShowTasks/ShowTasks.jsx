import React, { useContext } from 'react';
import './ShowTasks.css';
import { tasksContext } from '../Context/Context';

export const ShowTasks = ({ title, description, id, checked }) => {
  
  const showContext = useContext(tasksContext);

  const updateClass = (event) => {
    const newValue = event.target.checked; 

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
  
  return (
    <li className='itemTask'>
      <span className={checked ? 'circle1 circle2': 'circle1'}></span>
      <h2 className={checked ? 'titleShowTask titleComplet': 'titleShowTask'}>{title}</h2>
      <p className='descriptionShowTask'>{description}</p>
      <input onChange={updateClass} checked={checked} className='check' type="checkbox" />
    </li>
  )
}
