import React from 'react';

// components
import Layout from './components/layout/layout.js';

// pages
import Home from './pages/home/home.js';

const App: React.FC = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};
export default App;
