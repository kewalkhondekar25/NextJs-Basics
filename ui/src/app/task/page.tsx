import React from 'react'
import prisma from '../../../utils/db'
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const page = async () => {
  const allTask = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });
  // if(allTask.length === 0){
  //   return(
  //     <div>No tasks 🤧</div>
  //   )
  // }
  return (
    <div>
      <TaskForm/>
      <TaskList/>
    </div>
  )
}

export default page