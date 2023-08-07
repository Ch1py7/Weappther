const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const Months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const getCurrentDate = () => {
  const date = new Date()
  const day = date.getDate()
  const weekDay = date.getDay()
  const month = date.getMonth()
  return {
    day,
    weekDay: Days[weekDay],
    month: Months[month],
  }
}

export const getUTCDate = (date: number) => {
  const utcDate = new Date(date * 1000)
  const day = utcDate.getUTCDate()
  const weekDay = utcDate.getUTCDay()
  const month = utcDate.getUTCMonth()
  return {
    day,
    weekDay: Days[weekDay],
    month: Months[month],
  }
}
