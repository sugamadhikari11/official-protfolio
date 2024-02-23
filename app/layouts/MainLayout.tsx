// app/layouts/MainLayout.tsx
import React, { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
