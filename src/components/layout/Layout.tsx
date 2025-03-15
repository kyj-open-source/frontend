import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="fixed w-full">
        <Header />
      </header>

      {/* Main Content */}
      <main className="flex-grow mt-[70px] px-[10vw] py-[40px] bg-white h-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
