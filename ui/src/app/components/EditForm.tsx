"use client"
import React from 'react'
import { editTask } from '../../../utils/actions';

interface TaskType {
  id: string;
    content: string;
    createdAt: Date;
    completed: boolean;
}
const EditForm = ({task}: {task: TaskType}) => {

  const {id, content, createdAt, completed} = task;
  
  return (
    <div>
      <form action={editTask}>
        <input type="hidden" name="id" value={id} />
        <input type="text" name='content' defaultValue={content} />
        <div className='flex'>
          <label htmlFor="completed">completed</label>
          <input type="checkbox" name="completed" id="completed" defaultChecked={completed} />
        </div>
        <button type='submit' className='bg-purple-500'>submit</button>
      </form>
    </div>
  )
}

export default EditForm