import './CountryCard.css'

export function CountryCard ({ flag, name, population, region, capital }) {
  const populationFormatted = population.toLocaleString()

  return (
    <section className='country-card'>
      <div className='country-card__flag'>
        <img src={flag} alt='United States Flag' />
      </div>
      <div className='country-card__info'>
        <h2 className='country-card__name'>
          {name}
        </h2>
        <p className='country-card__population'>
          Population: <span>{populationFormatted}</span>
        </p>
        <p className='country-card__region'>
          Region: <span>{region}</span>
        </p>
        <p className='country-card__capital'>
          Capital: <span>{capital}</span>
        </p>
      </div>
    </section>
  )
}
