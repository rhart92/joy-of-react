'use client'
import React, { ReactNode } from 'react'
import { COLORS } from './constants'

type Theme = 'light' | 'dark'

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
  colors: typeof COLORS[Theme]
}

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {
    throw new Error('Context never set.')
  },
  colors: COLORS['light'],
})

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = React.useState<Theme>(() => {
    const theme = window.localStorage.getItem('color-theme')
    if (theme !== 'light' && theme !== 'dark') {
      return 'light'
    }
    return theme
  })

  React.useEffect(() => {
    window.localStorage.setItem('color-theme', theme);
  }, [theme]);


  const toggleTheme = React.useCallback(() => {
    setTheme((currentTheme) => {
      return currentTheme === 'light' ? 'dark' : 'light'
    })
  }, [])

  const colors = COLORS[theme]

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        colors,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
