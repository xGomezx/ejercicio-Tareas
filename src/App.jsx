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
   
  ]);

  const handleAddTask = (newTask) => {
    console.log("Nueva tarea:", newTask);
    // Agrega la nueva tarea al estado
    setTasks([...tasks, { ...newTask, idTask: (tasks.length + 1).toString(),statusTask:false }]);
    console.log('tareas actualizadas:',tasks);
  };
  console.log(tasks);


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
                statusTask={item.statusTask}

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
