import { Dispatch, SetStateAction, createContext } from 'react'
import { Geolocation } from 'types/geolocation'
import { currentCity } from 'types/current'

interface DataContextState {
  city: string | null
  setCity: Dispatch<SetStateAction<string | null>>
  geolocation: Geolocation
  currentCity: currentCity
}

export const DataContext = createContext<DataContextState>({
  city: null,
  setCity: () => {},
  geolocation: {} as Geolocation,
  currentCity: {} as currentCity,
})
