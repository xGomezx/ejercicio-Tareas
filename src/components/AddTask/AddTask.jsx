import React, {useRef} from 'react'
import './AddTask.css'

export const AddTask = () => {


  // const newTitleRef = useRef('');
  // const newDescriptionRef = useRef('');

  // const handleAddTask = () => {
  //   const newTask = {
  //     title: newTitleRef.current.value,
  //     description: newDescriptionRef.current.value,
  //   };

  //   // Llamamos a la función proporcionada desde App
  //   onAddTask(newTask);

  //   // Limpia el formulario después de agregar la tarea
  //   newTitleRef.current.value = '';
  //   newDescriptionRef.current.value = '';
  // };

  return (
      <form action="" className='DivAddTask'>
          <input /*ref={newTitleRef}*/ className='titleTask' type="text" />
          <input type='text' /*ref={newDescriptionRef}*/ className='DesTask'></input>
          <button /*onClick={handleAddTask}*/ className='addTask'>Crear Tarea</button>
      </form>
  )
}
