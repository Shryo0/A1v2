import React from 'react';
import Page from '../page'; 
import Link from 'next/link';

// Componente principal da aplicação
const MyApp = () => {
  return <Page />;
};

// Componente ClientApp, verifica se está no navegador para renderizar MyApp
export default function ClientApp() {
  return typeof window !== 'undefined' && <MyApp />;
}