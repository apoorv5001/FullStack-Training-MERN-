import React, { useEffect, useState } from 'react'
import Card from './Card'

const Mycard = () => {
    const [products,setProducts]=useState([
        // {
        //     id:1,
        //     title:"iPhone 9",
        //     description:"An apple mobile which is nothing like apple",
        //     price:549,
        //     discountPercentage:12.96,
        //     rating:4.69,
        //     stock:94,
        //     brand:"Apple",
        //     category:"smartphones",
        //     thumbnail:"https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        //     images:[
        //     "https://cdn.dummyjson.com/product-images/1/1.jpg",
        //     "https://cdn.dummyjson.com/product-images/1/2.jpg",
        //     "https://cdn.dummyjson.com/product-images/1/3.jpg",
        //     "https://cdn.dummyjson.com/product-images/1/4.jpg",
        //     "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"],
        // },
    ]);
    useEffect(()=>{
        fetch("https://dummyjson.com/product")
        .then(result=>result.json())
        .then(data=>{
            setProducts(data.products)
        })
    },[]);
  return (
    <div className='container m-3 d-flex flex-wrap'>
        {products.map(product=>(
            <Card
            id={product.id}
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            brand={product.brand}
            category={product.category}
            thumbnail={product.thumbnail}
            />
        ))}
    </div>
  )
        }


export default Mycard