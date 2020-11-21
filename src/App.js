import React from 'react';
import ShowCount from './components/ShowCount';
import IncrementCounter from './components/IncrementCounter';
import DecrementCounter from './components/DecrementCounter';

class App extends React.Component {
  render() {
    return (
      <div>
       <h1>Redux Counter</h1>
       <ShowCount />
       <IncrementCounter />
       <DecrementCounter />
      </div>
    );
  }
}

export default App;
