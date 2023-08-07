import { Icon } from '@iconify/react'
import { DataContext } from 'context/data.context'
import { ChangeEvent, FC, FormEvent, ReactElement, useContext, useState } from 'react'

export const Header: FC = (): ReactElement => {
  const { setCity } = useContext(DataContext)
  const [query, setQuery] = useState<string>('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setCity(query)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  return (
    <header className='flex justify-between items-center px-24 py-6'>
      <h1 className='text-3xl font-[900] text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text'>
        We<i>app</i>ther
      </h1>
      <div className='flex gap-10'>
        <form className='relative h-11' onSubmit={handleSubmit}>
          <input
            className='bg-[#161627] h-full w-56 px-2 rounded-lg text-base text-primaryText'
            type='text'
            placeholder='Search'
            onChange={handleChange}
          />
          <button
            title='search'
            className='absolute top-0 right-0 flex justify-center items-center h-full w-16 bg-[#454554] rounded-lg'
          >
            <Icon icon='entypo:magnifying-glass' height={22} color='#e3e6e8' />
          </button>
        </form>
      </div>
    </header>
  )
}
