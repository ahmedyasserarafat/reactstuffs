import React from 'react'
import ProductList from '../features/product-list'

import data from '../data/products.json'

export default function HomePage(props) {
  return <div>
    <h1>Home</h1>
    <ProductList products={data.products} />
  </div>
}