import type { FC, ReactNode } from 'react'
import 'the-new-css-reset/css/reset.css'

interface RootLayoutProps {
  children: ReactNode
}
const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
