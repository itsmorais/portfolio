
export const metadata = {
  title: 'Michael Morais',
  description: 'Created by M.M',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
