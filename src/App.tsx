import React from 'react'; 
import Text from './Text';
import './App.css';

let array : object = {};
enum anything { coks= 'red',  }

const App: React.FC = () => {
  // array = [{red: 'red'}];
  // array = {red: 'one'}
  // console.log(array)
  console.log(anything)
  return (
    <Text body="Bilkis" handleChange={(e) => console.log(e)} />
  )
}

export default App;
