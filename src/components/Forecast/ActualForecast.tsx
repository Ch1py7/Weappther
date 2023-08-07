import { DataContext } from 'context/data.context'
import { FC, ReactElement, useContext } from 'react'

export const ActualForecast: FC = (): ReactElement => {
  const { geolocation: forecast } = useContext(DataContext)
  return (
    <div className=' flex flex-col justify-between'>
      <div>
        <h1 className='text-primaryText text-5xl font-[900]'>{forecast.name}</h1>
      </div>
      <div className='flex  flex-col gap-1 text-xl'>
        <p className='text-primaryText text-6xl font-[900] mb-2'>
          {Math.round(forecast.main.temp)}
          <span className='text-bGray2'>°</span>
        </p>
        <p className='text-primaryText flex justify-between'>
          Feels like
          <span className='text-secondaryBText'>{Math.round(forecast.main.feels_like)}°</span>
        </p>
        <p className='text-primaryText flex justify-between'>
          Wind <span className='text-secondaryBText'>{forecast.wind.speed}km/h</span>
        </p>
        <p className='text-primaryText flex justify-between'>
          Humidity <span className='text-secondaryBText'>{forecast.main.humidity}%</span>
        </p>
      </div>
    </div>
  )
}
