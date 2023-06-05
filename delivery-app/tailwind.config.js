/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [],
  safelist: [
    'bg-emerald-200',
    'text-emerald-700',
    'bg-red-200',
    'text-red-700',
    'bg-blue-200',
    'text-blue-700',
    'bg-gray-200',
    'text-gray-700'
  ]
}
