import React from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  </>
);

export default Layout;
