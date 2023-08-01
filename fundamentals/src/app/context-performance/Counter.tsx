import React from 'react'

import { FavoriteColorContext } from './FavoriteColorProvider'

function Counter({
  count,
  setCount,
}: {
  count: number
  setCount: (n: number) => void
}) {
  const { favoriteColor, setFavoriteColor } = React.useContext(
    FavoriteColorContext
  )

  return (
    <div
      className="counter"
      style={{
        backgroundColor: favoriteColor,
      }}
    >
      <button className='p-2 bg-gray-200 rounded m-4 text-black' onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  )
}

export default React.memo(Counter)
