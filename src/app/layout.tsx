import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Minha Aplicação',
  description: 'Uma descrição da minha aplicação',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Adicione outros metadados, links para fontes, etc., conforme necessário */}
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
