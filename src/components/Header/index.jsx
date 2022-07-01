import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'
import './Header.css'

export function Header () {
  const { theme, handleTheme } = useContext(ThemeContext)

  return (
    <header className='header'>
      <h1>Where in the world?</h1>
      <button onClick={handleTheme} className='header__button'>
        <img src={theme.icon} alt='' />
        <p>{theme.text}</p>
      </button>
    </header>
  )
}
