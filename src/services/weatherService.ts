import { GeolocationProps } from 'types/location'

export module WeatherService {
  export const geolocationUrl = ({ lat, lon }: GeolocationProps) => {
    return `http://localhost:5173/api/geolocation?lat=${lat}&lon=${lon}`
  }

  export const cityUrl = (city: string | null) => {
    return `http://localhost:5173/api/city?city=${city}`
  }
}
