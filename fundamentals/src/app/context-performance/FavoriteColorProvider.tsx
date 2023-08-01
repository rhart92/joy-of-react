import React, { ReactNode } from 'react'

type FavoriteColorContextType = {
  favoriteColor?: string
  setFavoriteColor?: (c: string) => void
}

export const FavoriteColorContext =
  React.createContext<FavoriteColorContextType>({})

function FavoriteColorProvider({ children }: { children: ReactNode }) {
  const [favoriteColor, setFavoriteColor] = React.useState('#EBDEFB')

  const memoizedContextValue = React.useMemo(() => {
    return { favoriteColor, setFavoriteColor }
  }, [favoriteColor, setFavoriteColor])

  // TIL: Rule of thumb is whenever we are passing an object as the `value` to a
  // context provider, it should _almost_ ALWAYS be memoized.
  return (
    <FavoriteColorContext.Provider value={memoizedContextValue}>
      {children}
    </FavoriteColorContext.Provider>
  )
}

// TIL: One other way one might think to solve this problem would be to wrap the
// `FavoriteColorProvider` in `React.memo` but this would not work because this
// component accepts `children` as a prop which will be re-genererated on each
// re-render so this component will have a change in props and therefore will
// re-render. Remember, `children` isn't anything special, it just allows
// special syntactic sugar for passing a value between the open and closing tags
// in JSX, but it's still a prop and it's still passed a reference to an object
// which will change on every re-render. As a general rule of thumb, memozing
// components that receive react elements as children won't really work as
// expected. In these cases, we must memoize the value we receive via context as
// we've done above.
export default FavoriteColorProvider
