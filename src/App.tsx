import { Routes } from 'components/Routes'
import { DataContext } from 'context/data.context'
import { useCurrentLocation, useFetch, useGeolocation } from 'hooks'
import { FC, ReactElement, useMemo, useState } from 'react'
import { WeatherService } from 'services'
import { Geolocation } from 'types/geolocation'

export const App: FC = (): ReactElement => {
  const { location, loading } = useGeolocation()
  const [city, setCity] = useState<string | null>(null)
  
  const { data: geolocation } = useFetch<Geolocation>(
    city ? WeatherService.cityUrl(city) : WeatherService.geolocationUrl(location),
    !loading
  )

  const currentLocation = useMemo(() => (geolocation?.coord) || location, [geolocation, location])

  const { data: currentCity } = useCurrentLocation(currentLocation)

  if (!geolocation) return <h1>Loading...</h1>
  if (!currentCity) return <h1>Loading...</h1>

  return (
    <DataContext.Provider value={{ city, setCity, geolocation, currentCity }}>
      {loading ? <h1>Loading...</h1> : <Routes />}
    </DataContext.Provider>
  )
}

