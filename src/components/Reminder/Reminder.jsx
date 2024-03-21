import React, { useContext } from 'react'
import './Reminder.css'
import { tasksContext } from '../Context/Context'

export const Reminder = () => {

  const reminderContext = useContext(tasksContext)

  return(
    <div>
        <p className='reminder'>Usted tiene {reminderContext.completed} tareas completadas y {reminderContext.earrings} tareas pendientes</p>
    </div>
  )
}
