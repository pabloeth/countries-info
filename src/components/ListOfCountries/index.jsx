import { CountryCard } from '../CountryCard'
import './ListOfCountries.css'

export function ListOfCountries ({ listOfCountries }) {
  return (
    <div className='list-of-countries'>
      {
        listOfCountries.map(country => <CountryCard key={country.name} {...country} />)
      }
    </div>
  )
}
