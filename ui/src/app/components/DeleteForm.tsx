import React from 'react'
import { deleteTask } from '../../../utils/actions'

const DeleteForm = ({id}: {id: string}) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <button className='bg-red-600 rounded-[50%] text-white  ml-2'>Delete</button>
    </form>
  )
}

export default DeleteForm