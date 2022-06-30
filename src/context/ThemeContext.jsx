import { useState, createContext } from 'react'
import sun from '../images/sun.svg'
import moon from '../images/moon.svg'

const darkTheme = {
  text: 'Light Mode',
  style: 'dark',
  icon: sun
}

const lightTheme = {
  text: 'Dark Mode',
  style: 'light',
  icon: moon
}

const ThemeContext = createContext()

export function ThemeProvider ({ children }) {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useState(defaultDark ? darkTheme : lightTheme)

  const handleTheme = () => {
    theme.style === 'dark'
      ? setTheme(lightTheme)
      : setTheme(darkTheme)
  }

  const data = { theme, handleTheme }

  return (
    <ThemeContext.Provider value={data}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
