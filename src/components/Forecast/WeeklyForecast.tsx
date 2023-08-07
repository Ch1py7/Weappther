import { DataContext } from 'context/data.context'
import { FC, ReactElement, useContext } from 'react'
import { WeeklyForecastCards } from '.'

export const WeeklyForecast: FC = (): ReactElement => {
  const { currentCity: cityLocation } = useContext(DataContext)

  return (
    <section className='flex flex-col gap-2 px-24'>
      <h1 className='col-span-full text-2xl font-bold text-primaryText'>Weekly forecast</h1>
      <div className='grid grid-cols-[repeat(auto-fit,_minmax(10rem,1fr))] gap-8'>
        {cityLocation?.daily?.slice(0, 7).map((day, index) => (
          <WeeklyForecastCards key={index} data={day} />
        ))}
      </div>
    </section>
  )
}
