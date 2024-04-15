import axios from 'axios'
import { it } from 'node:test';
import React from 'react'

interface Products {
    id: Number,
    title: String
}

const getProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
}

//async component
const page = async () => {
   const products: Products[] = await getProducts();
  return (
    <div>
        {
            products.map((items: Products) => {
                return(
                    <div key={String(items.id)}>
                        <h3>{items.title}</h3>
                    </div>
                )
            })
        }
    </div>
  )
}

export default page