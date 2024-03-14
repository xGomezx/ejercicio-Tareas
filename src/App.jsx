import React, { useState } from 'react';
import './App.css';
import { Header } from './components/layouts/Header/Header';
import { Main } from './components/layouts/Main/Main';
import { ContentDivs } from './components/ContentDivs/ContentDivs';
import { AddTask } from './components/AddTask/AddTask';
import { ShowTasks } from './components/ShowTasks/ShowTasks';
import { Footer } from './components/layouts/Footer/Footer';
import { Reminder } from './components/Reminder/Reminder';
import { FilterTasks } from './components/FilterTasks/FilterTasks';

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
    },
    {
      idTask: '4',
      title: 'Jugar project',
      description: 'Andres no quiere jugar conmigo'
    }
  ]);

  const handleAddTask = (newTask) => {
    // Agrega la nueva tarea al estado
    setTasks([...tasks, { ...newTask, idTask: (tasks.length + 1).toString() }]);
  };


  return (
    <>
      <Header />
      <Main>
        <ContentDivs>
          <AddTask onAddTask={handleAddTask} />
        </ContentDivs>
        <Reminder />
        <hr />
        <ContentDivs>
          <FilterTasks>
            {tasks.map(item => (
              <ShowTasks
                key={item.idTask}
                title={item.title}
                description={item.description}
              />
            ))}
          </FilterTasks>

        </ContentDivs>
      </Main>
      <Footer />
    </>
  );
}


export default App
