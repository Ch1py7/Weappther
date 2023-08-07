import { DataContext } from 'context/data.context'
import { FC, ReactElement, useContext } from 'react'
import { weatherIcon } from 'utils'

export const HourlyForecast: FC = (): ReactElement => {
  const { currentCity: cityLocation } = useContext(DataContext)
  return (
    <div className='col-span-3 bg-[#1d1d1d60] rounded-lg px-4 grid grid-cols-[repeat(auto-fit,_minmax(6rem,1fr))] py-4 gap-8'>
      {cityLocation?.hourly?.slice(1, 13).map((hour) => {
        return (
          <article
            key={hour.dt}
            className='text-xl text-secondaryBText flex flex-col items-center justify-center'
          >
            <p>{new Date(hour.dt * 1000).getHours()}:00</p>
            <img src={`/${weatherIcon[hour.weather[0]!.main]}.svg`} className='w-20 mx-auto' />
          </article>
        )
      })}
    </div>
  )
}
