import { SearchIcon } from '../../icons/Search'
import './Search.css'

export function Search ({ handleChange, handleSubmit }) {
  return (
    <form className='search' onSubmit={handleSubmit}>
      <SearchIcon />
      <input type='text' placeholder='Search for a country...' onChange={handleChange} />
    </form>
  )
}
