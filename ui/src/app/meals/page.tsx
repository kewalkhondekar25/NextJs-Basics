import { log } from 'console';
import React from 'react'

interface DataType {
  _id: string;
  category: string;
  title: string;
  description: string;
  price: number;
  image: string;
  __v: number
}

const page = async () => {
  const response = await fetch("https://vegan-meals-api.vercel.app/api/v1/meals");
  if(!response.ok){
    throw new Error("failed to fetch meals")
  }
  const data: DataType[] = await response.json();
  console.log(data);
  
  return (
    <div>
      {
        data.map(item => {
          return(
            <ul>
              <li>{item.title}</li>
            </ul>
          )
        })
      }
    </div>
  )
}

export default page