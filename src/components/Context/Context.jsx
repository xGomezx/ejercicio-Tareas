import React, {useState, createContext} from 'react'

export const tasksContext = createContext()

export const TasksProvider = ({children}) => {
    const [tasks,setTasks] = useState([])

    let completed = 0;
    let earrings = 0;
    countTasks()

    function countTasks() {
      const completedTasks = tasks.filter(item => item.status === true);
      completed = completedTasks.length;
      earrings = tasks.length - completed;
    }

  return (
    <tasksContext.Provider value={{tasks,setTasks,completed,earrings}}>
        {children}
    </tasksContext.Provider>
  )
}
