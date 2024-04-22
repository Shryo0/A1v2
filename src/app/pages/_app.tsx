import React from 'react';
import Page from '../page'; 

const MyApp = () => {
  return <Page />;
};

// Defina o componente MyApp como um cliente usando uma função
export default function ClientApp() {
  return typeof window !== 'undefined' && <MyApp />;
}
