// pages/_app.tsx
import React from 'react';
import MainLayout from '../app/layouts/MainLayout';
import '../styles/tailwind.css'; // Include global styles if you have any

interface MyAppProps {
  Component: React.ComponentType;
  pageProps: any; // You might want to define a more specific type for pageProps
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
};

export default MyApp;
