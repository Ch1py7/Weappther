import { useCallback, useEffect, useState } from 'react'

export const useFetch = <T>(url: string, load: boolean = true) => {
  const [data, setData] = useState<T | null>(null)

  const getData = useCallback(async () => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      setData(data)
    } catch (error) {
      console.error(error)
    }
  }, [url])

  useEffect(() => {
    if (!load) return
    getData()
  }, [getData, load])

  return { data }
}
