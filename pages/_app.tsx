// pages/_app.tsx
import React from 'react';
import MainLayout from '../app/layouts/MainLayout';

import '../styles/tailwind.css'; // Include global styles if you have any
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

interface MyAppProps {
  Component: React.ComponentType;
  pageProps: any; // You might want to define a more specific type for pageProps
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider 
    attribute="class"> 
      <MainLayout >
        <Component  {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
};


