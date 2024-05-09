//server action
import React from 'react'

const createTask = async (formData: FormData) => {
  "use server"
  const content = formData.get("content");
  console.log(content);
  
}

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