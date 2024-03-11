import React, { useState } from 'react';
import './App.css';
import { Header } from './components/layouts/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Main } from './components/layouts/Main/Main';
import { ContentDivs } from './components/ContentDivs/ContentDivs';
import { AddTask } from './components/AddTask/AddTask';
import { ShowTasks } from './components/ShowTasks/ShowTasks';

function App() {

  const [tasks, setTasks] = useState([
    {
      idTask: '1',
      title: 'Bañarse',
      description: 'Aseo personal'
    },
    {
      idTask: '2',
      title: 'Hacer tareas del sena',
      description: 'Cumplir con las tareas'
    },
    {
      idTask: '3',
      title: 'Subir a challenger',
      description: 'para dejar de ser noob como santiago'
    }
  ]);

  const handleAddTask = (newTask) => {
    // Agrega la nueva tarea al estado
    setTasks([...tasks, { ...newTask, idTask: (tasks.length + 1).toString() }]);
  };


  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <ContentDivs>
          <AddTask onAddTask={handleAddTask} />
        </ContentDivs>
        <hr />
        <ContentDivs>

          {tasks.map(item => (
            <ShowTasks
              key={item.idTask}
              title={item.title}
              description={item.description}
            />
          ))}

        </ContentDivs>
      </Main>
    </>
  );
}

// function App() {

//   const [tasks, setTasks] = useState([
//     {
//       idTask: '1',
//       nameTask: 'Bañarse'
//     },
//     {
//       idTask: '2',
//       nameTask: 'Hacer tareas del sena'
//     },
//     {
//       idTask:'3',
//       nameTask: 'Subir a challenger'
//     }
//   ]);

//   const newTaskRef = useRef();

//   const createTask = () => {
//     const newTaskName = newTaskRef.current.value.trim();

//     if (newTaskName !== '') {
//       setTasks(prevTasks => [
//         ...prevTasks,
//         {
//           idTask: (prevTasks.length + 1).toString(),
//           nameTask: newTaskName
//         }
//       ]);

//       newTaskRef.current.value = '';
//     }
//   };

//   return (
//     <>
//       <div>
//         <input ref={newTaskRef} className='inputTask' type="text" placeholder='Ingresa la tarea' />
//         <button onClick={createTask} className='buttonTask'>Crear</button>
//       </div>
//       <hr className='separator' />

//       <div className='taskDiv'>

//         {tasks.map(item => (
//         <p className='pTask'>
//           {item.nameTask}
//         </p>
//         ))}

//       </div>
//     </>
//   )
// }

export default App
