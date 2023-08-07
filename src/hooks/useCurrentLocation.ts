import { useCallback, useEffect, useState } from 'react'
import { currentCity } from 'types/current'
import { GeolocationProps } from 'types/location'

const url = (lat: number, lon: number) =>
  `http://localhost:5173/api/current?lat=${lat}&lon=${lon}`

export const useCurrentLocation = ({ lat, lon }: GeolocationProps) => {
  const [data, setData] = useState<currentCity>()
  const getData = useCallback(async () => {
    try {
      const res = await fetch(url(lat, lon))
      const data = await res.json()
      setData(data)
    } catch (error) {
      console.error(error)
    }
  }, [lat, lon])

  useEffect(() => {
    getData()
  }, [getData])

  return { data }
}
