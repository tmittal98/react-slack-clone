import React, { Component } from 'react';
import { SignIn } from './';

// function App() {
//   return <div className="App">Hello World</div>;
// }

class App extends Component {
  state = {
    counter: 5,
  };
  render() {
    return (
      <div>
        <SignIn />
      </div>
    );
  }
}

export default App;
