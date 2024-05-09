import React from 'react'
import prisma from '../../../utils/db'

const page = async () => {
  const allTask = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });
  if(allTask.length === 0){
    return(
      <div>No tasks 🤧</div>
    )
  }
  return (
    <div>task page</div>
  )
}

export default page