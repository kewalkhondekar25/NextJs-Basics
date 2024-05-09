import { log } from 'console'
import React from 'react'
import Image from 'next/image'

interface ParamsType {
  id: string
}

interface SingleMeal {
  _id: string;
  category: string;
  title: string;
  description: string;
  price: number;
  image: string;
  __v: number
}

const getSingleMeal = async (params: ParamsType) => {
  console.log(params.id);
  const response = await fetch(`https://vegan-meals-api.vercel.app/api/v1/categories/meals/${params.id}`);
  console.log(response);
  if (!response.ok) {
    throw new Error("failed to load")
  };
  return response.json();
}

const page = async ({ params }: { params: ParamsType }) => {
  const data = await getSingleMeal(params);
  return (
    <div>
       <Image src={data.image} alt={data.title} width={250} height={250} /> 
    </div>
  )
}

export default page