'use client'
import React, { useMemo, useState } from 'react'

type Item = {
  id: string
  imageSrc: string
  imageAlt: string
  title: string
  price: string
  inStock: boolean
}
export default function ShoppingCart() {
  const [items, setItems] = useState<Array<Item>>(() => [
    {
      id: 'hk123',
      imageSrc:
        'https://sandpack-bundler.vercel.app/img/shopping-cart-coffee-machine.jpg',
      imageAlt: 'A pink drip coffee machine with the “Hello Kitty” logo',
      title: '“Hello Kitty” Coffee Machine',
      price: '89.99',
      inStock: true,
    },
    {
      id: 'co999',
      imageSrc:
        'https://sandpack-bundler.vercel.app/img/shopping-cart-can-opener.jpg',
      imageAlt: 'A black can opener',
      title: 'Safety Can Opener',
      price: '19.95',
      inStock: false,
    },
    {
      id: 'cnl333',
      imageSrc:
        'https://sandpack-bundler.vercel.app/img/shopping-cart-night-light.png',
      imageAlt:
        'A kid-friendly nightlight sculpted to look like a dog astronaut',
      title: 'Astro-pup Night Light',
      price: '130.00',
      inStock: true,
    },
    {
      id: 'scb777',
      imageSrc:
        'https://sandpack-bundler.vercel.app/img/shopping-cart-backpack.jpg',
      imageAlt: 'A pink backpack with a unicorn illustration',
      title: 'Magical Unicorn Backpack',
      price: '74.98',
      inStock: true,
    },
  ])

  // Adding state for zipcode.
  const [zipCode, setZipCode] = useState<string>('')

  // Since these are passed to `Table` which is memoized, the arrays also need to
  // be memoized or React will still re-render Table even if items content hasn't
  // changed since the references will be different.
  const inStock = useMemo(() => items.filter((item) => item.inStock), [items])
  const outOfStock = useMemo(
    () => items.filter((item) => !item.inStock),
    [items]
  )

  return (
    <div className="flex flex-col p-4">
      <h2 className="text-center text-xl font-bold mb-4">Shopping Cart</h2>
      <div className="border border-dashed border-white flex items-center flex-col p-4 mb-8">
        <span>Enter zipcode for shipping estimate:</span>
        <input
          className="text-black"
          type="number"
          minLength={5}
          maxLength={5}
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
      </div>
      <Table items={inStock} />
      <button className="border px-4 py-2 self-end rounded hover:-translate-y-1 hover:bg-green-700 transition-transform ease-in-out">
        Continue checkout
      </button>
      <h2 className="text-center text-xl font-bold my-4">Sold out</h2>
      <Table items={outOfStock} />
    </div>
  )
}

const Table = React.memo(function Table(props: { items: Array<Item> }) {
  const { items } = props
  // TIL: In strict mode, remember that all components render twice on inital
  // render so you'll see this message twice for each render.
  console.log('rendering table...')
  return (
    <table className="table table-fixed w-full m-x-4">
      <thead>
        <tr className="border-b-2">
          <TableHeaderEntry name="" />
          <TableHeaderEntry name="Title" />
          <TableHeaderEntry name="Price" />
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <TableRowEntry
            key={item.id}
            title={item.title}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            price={item.price}
          />
        ))}
      </tbody>
    </table>
  )
})

function TableHeaderEntry(props: { name: string }) {
  return <td className="font-bold w-3/4">{props.name}</td>
}

function TableRowEntry(props: {
  title: string
  imageSrc: string
  imageAlt: string
  price: string
}) {
  return (
    <tr>
      <td>
        <img alt={props.imageAlt} className="max-h-36" src={props.imageSrc} />
      </td>
      <td className="px-4">{props.title}</td>
      <td className="px-4">${props.price}</td>
    </tr>
  )
}
