import React, {useState, createContext} from 'react'

export const tasksContext = createContext()

export const TasksProvider = ({children}) => {
  
    const [tasks,setTasks] = useState([])

    const [filterOption, setFilterOption] = useState('all')

    let completed = 0;
    let earrings = 0;

    let completedTasks;
    let earringsTasks;
    countTasks()
    
    let filterSelect = [];
    

    const filterList = () => {
      if (filterOption === 'earrings' ) {
        filterSelect = earringsTasks
        console.log('fltantes',filterSelect);
      }else if(filterOption === 'completed'){
        filterSelect = completedTasks
        console.log('completas',filterSelect);
      }else if(filterOption === 'all'){
        filterSelect = tasks
        console.log('todas',filterSelect);
      }
      console.log(filterOption);
      
    }
    filterList()

    function countTasks() {
      completedTasks = tasks.filter(item => item.status);
      earringsTasks = tasks.filter(item => !item.status);

      completed = completedTasks.length;
      earrings = earringsTasks.length;
    }

   

  return (
    <tasksContext.Provider value={{tasks,setTasks,completed,earrings,setFilterOption,filterSelect}}>
        {children}
    </tasksContext.Provider>
  )
}
