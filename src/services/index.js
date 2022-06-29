export async function getAllCountries () {
  const url = 'https://restcountries.com/v2/all'
  const response = await fetch(url)
  if (response.ok) return await response.json()
  else return []
}
