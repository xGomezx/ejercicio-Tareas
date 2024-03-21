import React,{useContext} from 'react'
import { Header } from '../../layouts/Header/Header';
import { Main } from '../../layouts/Main/Main';
import { ContentDivs } from '../../ContentDivs/ContentDivs';
import { AddTask } from '../../AddTask/AddTask';
import { ShowTasks } from '../../ShowTasks/ShowTasks';
import { Footer } from '../../layouts/Footer/Footer';
import { Reminder } from '../../Reminder/Reminder';
import { FilterTasks } from '../../FilterTasks/FilterTasks';
import { tasksContext } from '../../Context/Context';
import './Home.css'

export const Home = () => {
    const otherContext = useContext(tasksContext)

    return (
      <>
        <Header />
        <Main>
          <ContentDivs>
            <AddTask />
          </ContentDivs>
          <Reminder />
          <hr />
          <ContentDivs>
            <FilterTasks>
              {
                otherContext.tasks.map( (task,index) => (<ShowTasks key={task.title+index} title={task.title} id={task.id} description={task.description}/>))
              }
            </FilterTasks>
  
          </ContentDivs>
        </Main>
        <Footer />
      </>
    );
}
