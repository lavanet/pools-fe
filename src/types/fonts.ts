import localFont from 'next/font/local'

export const sharpGroteskBook = localFont({
  src: [
    { path: '../../public/fonts/sharpgrotesk-book25.woff', },
    { path: '../../public/fonts/sharpgrotesk-book25.woff2', }
  ],
  weight: 'normal',
  style: 'normal',
  display: 'swap',
  variable: '--sharpGroteskBook'
})

export const sharpGroteskMedium = localFont({
  src: [
    { path: '../../public/fonts/sharpgrotesk-medium25.woff', },
    { path: '../../public/fonts/sharpgrotesk-medium25.woff2', }
  ],
  weight: 'normal',
  style: 'normal',
  display: 'swap',
  variable: '--sharpGroteskMedium'
})