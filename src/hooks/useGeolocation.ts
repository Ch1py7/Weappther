import { useCallback, useEffect, useState } from 'react'
import { GeolocationProps } from 'types/location'

const defaultOptions = {
  enableHighAccuracy: true,
  maximumAge: 1000,
}

interface Error {
  code: number
  message: string
}

function getGeolocation() {
  return new Promise<GeolocationCoordinates>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (currentPosition) => resolve(currentPosition.coords),
      (error) => reject(error),
      defaultOptions
    )
  })
}
export const useGeolocation = () => {
  const [location, setLocation] = useState<GeolocationProps>({ lat: -30, lon: -71 })
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(true)

  const handleLocation = useCallback(async () => {
    try {
      const { latitude: lat, longitude: lon } = await getGeolocation()
      setLocation({ lat, lon })
    } catch (error: any) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    (async () => handleLocation())()
  }, [handleLocation])

  return { location, error, loading }
}
