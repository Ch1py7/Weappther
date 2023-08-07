import { FC, ReactElement } from 'react'

export const Footer: FC = (): ReactElement => {
  return (
    <footer className='flex justify-center items-center py-10'>
      <small className='text-lg text-center text-primaryText'>Made with 💖 by Gerardo Garcia</small>
    </footer>
  )
}
