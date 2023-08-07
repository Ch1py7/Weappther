import { FC, ReactElement } from 'react'
import { Footer, Header } from './HeaderFooter'
import { MainPanel } from './MainPanel'

export const Routes: FC = (): ReactElement => {
  return (
    <div className='h-[100vh] flex flex-col justify-between gap-10'>
      <Header />
      <MainPanel />
      <Footer />
    </div>
  )
}
