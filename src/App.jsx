import React from 'react';
import Person from './components/Person';
import Product from './components/Product';

const App = () => {
  return <div>
    
    <Person 
      name="Sudipta Seal"
      age={38} />

      <Product
        name="iPhone"
        price={30000} />

  </div>
}
export default App;

