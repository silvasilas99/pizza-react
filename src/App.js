import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import Feature from './components/Feature';
import { productData, productDataTwo } from './components/Products/data';

function App() {
  return (
    <Router>
      <GlobalStyle />      
      <Hero />
      <Products heading="Escolha seus queridinhos" data={productData} />
      <Feature />
      <Products heading="Doces feitos para você" data={productDataTwo} />
    </Router>
  );
}

export default App;
