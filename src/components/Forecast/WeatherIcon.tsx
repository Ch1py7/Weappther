import { DataContext } from 'context/data.context'
import { FC, ReactElement, useContext } from 'react'
import { weatherIcon } from 'utils'

export const WeatherIcon: FC = (): ReactElement => {
  const { currentCity: cityLocation } = useContext(DataContext)
  
  return (
    <div className='grid col-span-2 place-items-center'>
      <img src={`/${weatherIcon[cityLocation.current.weather[0]!.main]}.svg`} className='h-52' />
    </div>
  )
}
