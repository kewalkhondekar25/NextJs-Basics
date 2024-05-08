import { log } from 'console'
import React from 'react'

interface ParamsType {
  id: string
}

const page = ({params}: {params: ParamsType}) => {
  console.log(params.id);
  
  return (
    <div>params page</div>
  )
}

export default page