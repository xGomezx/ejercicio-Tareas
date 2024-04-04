import React, {useContext, useState} from 'react'
import './AddTask.css'
import { tasksContext } from '../Context/Context'


export const AddTask = () => {
  const context = useContext(tasksContext)
  const [titleTasks,setTitleTasks] = useState('')
  const [desciptionTask,setDesciptionTask] = useState('')

  const newTitle = (event)=> {setTitleTasks(event.target.value)}
  const newDesciption = (event)=> {setDesciptionTask(event.target.value)}
 

  const createTask = (event)=>{
    const newId = context.tasks.length + 1;
    event.preventDefault()
     const newTask = {
      id:newId,
      title:titleTasks,
      description:desciptionTask,
      status:false
     }
     let listTasks = [...context.tasks,newTask]
     context.setTasks(listTasks)
  }

  return (
      <form action="" className='DivAddTask'>
          <label className='lblAdd' htmlFor="">Titulo tarea:</label>
          <input onChange={newTitle} className='titleTask' type="text" />
          <label className='lblAdd' htmlFor="">Descripcion de tarea:</label>
          <input onChange={newDesciption} type='text'  className='DesTask'></input>
          <button onClick={createTask} className='addTask'>Crear Tarea</button>
      </form>
  )
}
