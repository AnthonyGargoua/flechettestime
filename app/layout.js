import './globals.css'

export const metadata = {
  title: 'Darts 301 Tracker',
  description: 'Application interactive de fléchettes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
