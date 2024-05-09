import React from 'react'
import { getSingleTask } from '../../../../utils/actions'
import Link from 'next/link';
import EditForm from '@/app/components/EditForm';

interface SingleParamsType {
  id: string
}
const SingleTask = async ({params}: {params: SingleParamsType}) => {
  // console.log(params);
  const task = await getSingleTask(params.id);
  if(!task){
    return(
      <div>
        no task
      </div>
    )
  }
  return (
    <div>
      <p>SingleTask</p>
      <EditForm task={task}/>
      <span className='text-blue-500'>
        <Link href="/task">Back to task</Link>
      </span>
    </div>
  )
}

export default SingleTask