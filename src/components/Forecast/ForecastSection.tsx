import { FC, ReactElement } from 'react'
import { ActualForecast, HourlyForecast } from '.'
import { WeatherIcon } from './WeatherIcon'

export const ForecastSection: FC = (): ReactElement => {
  return (
    <section className='grid px-24 grid-cols-[repeat(auto-fit,_minmax(10rem,1fr))] gap-10'>
      <div className='grid grid-cols-3 col-span-3'>
        <ActualForecast />
        <WeatherIcon />
      </div>
      <HourlyForecast />
    </section>
  )
}
