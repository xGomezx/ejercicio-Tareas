import React, {useRef} from 'react'
import './AddTask.css'

export const AddTask = ({ onAddTask }) => {


  const newTitleRef = useRef('');
  const newDescriptionRef = useRef('');

  const handleAddTask = () => {
    const newTask = {
      title: newTitleRef.current.value,
      description: newDescriptionRef.current.value,
    };

    // Validaciones u otras lógicas pueden ir aquí antes de agregar la tarea

    // Llamamos a la función proporcionada desde App
    onAddTask(newTask);

    // Limpia el formulario después de agregar la tarea
    newTitleRef.current.value = '';
    newDescriptionRef.current.value = '';
  };

  return (
    <div className='container'>
      <form action="" className='DivAddTask'>
          <input ref={newTitleRef} className='titleTask' type="text" />
          <textarea ref={newDescriptionRef} className='DesTask' name="" id="" cols="30" rows="10"></textarea>
      </form>
      <button onClick={handleAddTask} className='addTask'>Crear Tarea</button>
    </div>
  )
}
