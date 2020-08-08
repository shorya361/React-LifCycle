import React from 'react';
import './App.css';
import Counter from './Counter';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('App Constructor');
    this.state = {
      mount: true,
      ignoreProps: 0,
      seed: 40,
    };
    this.mountCounter = () => this.setState({ mount: true });
    this.ignoreProps = () => this.setState({ ignoreProps: Math.random() });
    this.UnmountCounter = () => {
      this.setState({ mount: false });
    };
    this.seedGenerator = () =>
      this.setState({ seed: Number.parseInt(Math.random() * 100) });
  }

  render() {
    return (
      <div className='App'>
        <button onClick={this.mountCounter} disabled={this.state.mount}>
          mountCounter
        </button>
        <button onClick={this.UnmountCounter} disabled={!this.state.mount}>
          UnmountCounter
        </button>
        <button onClick={this.ignoreProps}>ignoreProps</button>

        <button onClick={this.seedGenerator}>seedGenerator</button>
        {this.state.mount ? (
          <Counter
          // ignoreProps={this.state.ignoreProps}
          // seed={this.state.seed}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
