import React from 'react';
import ShowCount from './components/ShowCount';
import IncrementCounter from './components/IncrementCounter';
import DecrementCounter from './components/DecrementCounter';
import IncrementAsyncCounter from './components/IncrementAsyncCounter';

class App extends React.Component {
  render() {
    return (
      <div>
       <h1>Redux Counter</h1>
       <ShowCount />
       <IncrementCounter />
       <DecrementCounter />
       <IncrementAsyncCounter />
      </div>
    );
  }
}

export default App;
