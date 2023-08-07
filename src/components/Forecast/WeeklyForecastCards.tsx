import { FC, ReactElement } from 'react'
import { Daily } from 'types/current'
import { getUTCDate, weatherIcon } from 'utils'

interface Props {
  data: Daily
}

export const WeeklyForecastCards: FC<Props> = ({ data }): ReactElement => {
  const { weekDay } = getUTCDate(data.dt)
  return (
    <article className='flex flex-col justify-center gap-4 text-center text-primaryText bg-[#1d1d1d60] px-4 py-6 rounded-lg duration-300 hover:scale-105'>
      <h2>{weekDay}</h2>
      <img src={`/${weatherIcon[data.weather[0]!.main]}.svg`} className='w-20 mx-auto' />
      <div className='flex justify-center gap-10 font-bold text-xl'>
        <span>{Math.round(data.temp.max)}°</span>
        <span>{Math.round(data.temp.min)}°</span>
      </div>
    </article>
  )
}
