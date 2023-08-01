import React from 'react'

import ProductDetails from './ProductDetails'

export type Product = {
  id: string
  title: string
  description: string
  price: string,
  rating: number,
  photos: Array<string>
}

const product: Product = {
  id: 'abc123',
  title:
    'Sandwich Maker Toaster and Electric Panini Press with Futuristic Spaceship Design Non Stick Plates LED Indicator Lights Cool Rocketship Best Toaster',
  description: `Make Hot Sandwiches and More: Get the  sandwich maker, it cooks the hot sandwich maker quickly in the morning, lets you have the fast and healthy breakfast. The sandwich maker presses sandwiches, grills omelets, and even crisps French toast in one product. Simple and efficient.

Easy to Clean: Thanks to the non-stick grill plates, it ensures effortless food release and quick cleanup, simply wipe them clean with a damp cloth once they’ve cooled. The dimension of nonstick plates is 8.46x4.92in.

Compact Design&Storage: Built for small spaces and outdoor use, the sandwich machine is compact in size and can be stored upright, taking up minimal cabinet space. What’s more, it’s convenient to take outside to use in your yard, garden.`,
  price: '129.99',
  rating: 4,
  photos: [
    'https://sandpack-bundler.vercel.app/img/space-toaster-01.jpg',
    'https://sandpack-bundler.vercel.app/img/space-toaster-02.jpg',
    'https://sandpack-bundler.vercel.app/img/space-toaster-03.jpg',
    'https://sandpack-bundler.vercel.app/img/space-toaster-04.jpg',
  ],
}

function App() {
  return (
    <>
      <ProductDetails product={product} />
    </>
  )
}

export default App
