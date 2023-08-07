const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      bgBlack: '#0A0A0A',
      bgWhite: '#F5F5F5',
      primaryText: '#e3e6e8',
      secondaryBText: '#CDCDCD',
      primaryWText: '#111',
      secondaryWText: '#252525',
      bGray: '#999',
      bGray2: '#555',
      wGray: '#6A6A6A',
      wGray2: '#BBB',
      Highlighted: '#51D1F6',
      primaryBButton: '#FFB200',
      secondaryBButton: '#FFF',
      primaryWButton: '#0A0A0A',
      secondaryWButton: '#1C1C1C',
      sky: colors.sky,
      indigo: colors.indigo,
      emerald: colors.emerald,
      cyan: colors.cyan,
    },
  },
  plugins: [],
}




