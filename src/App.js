import React, { Component } from 'react';
import { Provider } from 'unstated';
import CreateJob from './components/CreateJob';
import Jobs from './components/Jobs';

class App extends Component {
  render() {
    return (
      <Provider>
        <CreateJob />
        <Jobs />
      </Provider>

    );
  }
}

export default App;
