import Providers from '@/components/Providers'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

export const metadata = {
  title: 'Job Portal',
  description: 'Find and post jobs with ease.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
            <Navbar />
            {children}
            <Footer />
        </Providers>
      </body>
    </html>
  )
}
