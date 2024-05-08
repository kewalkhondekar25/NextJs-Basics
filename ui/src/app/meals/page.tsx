import { log } from 'console';
import Image from 'next/image';
import Link from 'next/link';
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
  if (!response.ok) {
    throw new Error("failed to fetch meals")
  }
  const data: DataType[] = await response.json();
  console.log(data);

  return (
    <div className='flex flex-row flex-wrap mt-5 justify-center place-items-center'>
      {
        data.map(item => {
          return (
            <div className="" key={item._id}>
              <Link href="/meals/meals-info">
                <Image
                  className='ml-5 mt-5 rounded-[5px]'
                  src={item.image} alt="img" height={200} width={200} />
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default page