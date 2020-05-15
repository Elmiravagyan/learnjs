import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import Test from './Test';
import Modalo from './components/Modal';
import ModaloF from './components/FunctionalModal';

class App extends Component{
  render() {
    return (
        <>
          {/*<Test items={[5, 7]} title={() => {console.log("hamo")}}/>*/}
          <Button>Open Modal</Button>
            {/*<Modalo />*/}
            <ModaloF />
        </>
    )
  }
}

export default App;