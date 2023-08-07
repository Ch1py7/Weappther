import { GeolocationProps } from 'types/location'

export module WeatherService {
  export const geolocationUrl = ({ lat, lon }: GeolocationProps) => {
    return `https://weappther-api-production.up.railway.app/api/geolocation?lat=${lat}&lon=${lon}`
  }

  export const cityUrl = (city: string | null) => {
    return `https://weappther-api-production.up.railway.app/api/city?city=${city}`
  }
}
