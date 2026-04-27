import './globals.css'

export const metadata = {
  title: 'Fléchettes entre copains',
  description: 'Application interactive de fléchettes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
