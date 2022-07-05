import { useContext, useEffect, useState } from 'react'
import { Filter } from '../components/Filter'
import { Header } from '../components/Header'
import { ListOfCountries } from '../components/ListOfCountries'
import { Search } from '../components/Search'
import { getAllCountries } from '../services'
import ThemeContext from '../context/ThemeContext'

const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

export function HomePage () {
  const [filter, setFilter] = useState('Filter by Region')
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState([])
  const [showData, setShowData] = useState([])

  const { theme } = useContext(ThemeContext)
  document.body.style.backgroundColor = theme.style === 'dark' ? '#202c37' : '#fafafa'

  const getCountries = async () => {
    const countries = await getAllCountries()
    setShowData(countries)
    setData(countries)
  }

  useEffect(function () {
    getCountries()
  }, [])

  const showContent = () => setVisible(!visible)

  const selectRegion = (region) => {
    if (region === 'All') setShowData(data)
    else {
      const filterCountries = data.filter(country => country.region.toLowerCase() === region.toLowerCase())
      setShowData(filterCountries)
    }
    setFilter(region)
    showContent(!visible)
  }

  const handleChange = (e) => {
    const search = e.target.value.toLowerCase()
    const filterCountries = data.filter(country => country.name.toLowerCase().includes(search))
    setShowData(filterCountries)
  }

  const handleSubmit = (e) => e.preventDefault()

  return (
    <main className={theme.style}>
      <Header />
      <div className='content'>
        <section className='content-header'>
          <Search
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <Filter
            regions={regions}
            filter={filter}
            visible={visible}
            selectRegion={selectRegion}
            showContent={showContent}
          />
        </section>
        <ListOfCountries listOfCountries={showData} />
      </div>
    </main>
  )
}
