import React from 'react';

// components
import Header from './header/header.jsx';
import Footer from './footer/footer.jsx';

// styles
import './layout.css';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
