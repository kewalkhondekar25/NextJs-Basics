import React from 'react'
import prisma from '../../../utils/db'
import { space } from 'postcss/lib/list';
import { getAllTasks } from '../../../utils/actions';
import DeleteForm from './DeleteForm';
import Link from 'next/link';

const getTasks = async () => {
  const allTasks = await getAllTasks();
  return allTasks;
}

const TaskList = async () => {

  const allTasks = await getTasks();
  if (allTasks.length === 0) {
    return (
      <div>No tasks 🤧</div>
    )
  }
  // console.log(allTasks);

  return (
    <div
      className='flex mt-3'>
      <div>{allTasks.map(item => {
        return (
          <div key={item.id} className='flex'>
            <span className='text-white'>{item.content}</span>
            <Link href={`/task/${item.id}`}>
              <button className='bg-purple-800 rounded-[50%] text-white ml-2'>edit</button>
            </Link>
            <DeleteForm id={item.id}/>
          </div>

        )
      })}</div>

    </div>
  )
}

export default TaskList