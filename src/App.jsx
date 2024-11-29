import React from 'react';
import User from './components/User';

const App = () => {
  return <div>
    
    <User 
      img ="https://upload.wikimedia.org/wikipedia/commons/d/dc/Satyajit_Ray_in_New_York_%28cropped%29.jpg"
      name="Sudipta Seal"
      age={38}
      isMarried={false}
      hobbies={["sleeping","Coding","exercise"]} />

  </div>
}
export default App;

