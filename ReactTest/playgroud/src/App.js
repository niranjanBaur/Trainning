import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import TextFeild from './Components/TextFeild';

function App() {
  return (
    <>
      <Navbar title = "Hey bro!"/>

      <div className='container'>
        <h3 className="mt-3">Hey you are in the right place to change your text !!!</h3>
        <TextFeild/>
      </div>
    </>
    
  )
}

export default App;
