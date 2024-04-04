import React, { useContext } from 'react'
import './Reminder.css'
import { tasksContext } from '../Context/Context'

export const Reminder = () => {

  const reminderContext = useContext(tasksContext)

  return(
    <div className='reminderContent'>
        <p className='reminder'>Usted tiene <p className='reminderCompleted'> {reminderContext.completed}</p> tareas completadas y <p className='reminderEarrings'> {reminderContext.earrings} </p> tareas pendientes</p>
    </div>
  )
}
