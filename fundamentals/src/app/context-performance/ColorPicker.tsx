import React from 'react'

import { FavoriteColorContext } from './FavoriteColorProvider'

function ColorPicker() {
  const id = React.useId()

  const { favoriteColor, setFavoriteColor } =
    React.useContext(FavoriteColorContext)

  console.log('ColorPicker rendered!')

  return (
    <div className="color-picker">
      <label htmlFor={id}>Select a color:</label>
      <input
        type="color"
        value={favoriteColor}
        onChange={(event) => {
          setFavoriteColor && setFavoriteColor(event.target.value)
        }}
      />
    </div>
  )
}

// TIL: We are memoizing this component to give it "superpowers" so that even if
// it's parent re-renders, this component will ONLY re-render if it's props or
// state change or so that _should_ be the case but context throws a bit of
// wrench in this. Since we are using context, anytime the context changes,
// we'll also re-render this component. Since it's rendered as children of `App`
// which renders `FavoriteColorProvider`, anytime `App` re-renders, we'll also
// re-create the context which will cause this component to re-render. We can
// fix this by memozing the context value so if the color or setter function
// haven't changed, React will provide the same (referentially the same) object
// as context which means this component won't re-render unless the context
// actually changes.
export default React.memo(ColorPicker)
