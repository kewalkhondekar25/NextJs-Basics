import React from 'react'
import prisma from '../../../utils/db'
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const page = async () => {
  return (
    <div>
      <TaskForm/>
      <TaskList/>
    </div>
  )
}

export default page