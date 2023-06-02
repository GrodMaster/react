// // import { Inter } from 'next/font/google'
import Navigation from './cmponents/Navigation'
import './style/main.scss'

// // const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <section>
          <Navigation />
        {children}
        <footer>Подвал</footer>
        </section>
      </body>
    </html>
  )
}
