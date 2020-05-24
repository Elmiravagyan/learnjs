import React, { Component } from 'react';
import {DummyCounter} from './components/DummyCounter';
import {StateFullCounter} from './components/StateFullCounter';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = { count1: 0, count2: 0 }
    };

    increment = () => {
       this.setState({count1: ++this.state.count1})
    };

    decrement = () => {
       this.setState({count1: --this.state.count1})
    };

    increment1 = () => {
       this.setState({count2: ++this.state.count2})
    };

    decrement1 = () => {
       this.setState({count2: --this.state.count2})
    };
  render() {
    return (
        <>
            <DummyCounter count={this.state.count1} increment={this.increment} decrement={this.decrement}/>
            <DummyCounter count={this.state.count2} increment={this.increment1} decrement={this.decrement1}/>
            <h2>StateFull</h2>
            <StateFullCounter />
            <StateFullCounter />
            {/*TODO Թվել DummyCounter֊ի և StateFullCounter֊ի մեկական թերություն և առավելություն*/}
        </>
    )
  }
}

export default App;