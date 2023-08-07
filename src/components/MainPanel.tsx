import { FC, ReactElement } from 'react'
import { WeeklyForecast } from './Forecast'
import { ForecastSection } from './Forecast/ForecastSection'

export const MainPanel: FC = (): ReactElement => {
  return (
    <>
      <ForecastSection />
      <WeeklyForecast />
    </>
  )
}
