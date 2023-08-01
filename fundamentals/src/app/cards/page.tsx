import React from 'react'

import UserProfileCard from './UserProfileCard'
import ProductInfoCard from './ProductInfoCard'

function App() {
  return (
    <div className='flex flex-col py-64 px-32 gap-16 absolute left-0 right-0 top-0 bottom-0 bg-purple-300 text-black'>
      <UserProfileCard
        user={{
          avatarSrc: 'https://sandpack-bundler.vercel.app/img/avatars/009.png',
          avatarDescription: 'Cartoon bear',
          name: 'Ben Thorn',
          handle: 'benjaminthorn',
        }}
      />
      <ProductInfoCard
        product={{
          id: 'hk123',
          imageSrc:
            'https://sandpack-bundler.vercel.app/img/shopping-cart-coffee-machine.jpg',
          imageAlt: 'A pink drip coffee machine with the “Hello Kitty” logo',
          title: '“Hello Kitty” Coffee Machine',
          price: '89.99',
          inStock: true,
        }}
      />
    </div>
  )
}

export default App
