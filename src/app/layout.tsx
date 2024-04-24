import React, { ReactNode } from 'react';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Defina a fonte Inter para uso global
const inter = Inter({ subsets: ['latin'] })

// Metadados da aplicação
export const metadata: Metadata = {
  title: 'Minha Aplicação',
  description: 'Uma descrição da minha aplicação',
}

// Componente de layout
export default function Layout({
  children,
}: {
  children: ReactNode // Definindo explicitamente o tipo como ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Adicione outros metadados, links para fontes, etc., conforme necessário */}
      </head>
      <body className={inter.className}>
        <header style={{ backgroundColor: '#333', color: '#fff', padding: '20px' }}>
       
        </header>
        <main style={{ padding: '20px' }}>
          {children}
        </main>
        <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
          &copy; {new Date().getFullYear()} Minha Aplicação. Todos os direitos reservados.
        </footer>
      </body>
    </html>
  )
}
