//server action
import React from 'react'
import prisma from '../../../utils/db';
import { revalidatePath } from 'next/cache';
import { createTask } from '../../../utils/actions';

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div>
        <input
          className='border-2 border-black ml-1'
          type="text" placeholder='enter your task'
          name="content" required/>
        <button
          className='bg-purple-500 ml-1'>create task</button>
      </div>
    </form>
  )
}

export default TaskForm