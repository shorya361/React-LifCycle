import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    // First
    console.log('constructor');
    super(props);
    this.state = {
      counter: 0,
      seed: 0,
    };
    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }
  static getDerivedStateFromProps(props, state) {
    //Second
    console.log('getDerivedStateFromProps');
    console.log('--------------------------------');
    if (props.seed && state.seed !== props.seed) {
      return { seed: props.seed, counter: props.seed };
    }
    return null;
  }

  // componentWillReceiveProps(props) {
  //   console.log('component will receive props ');
  //   console.log('-----------------------------------');
  // }

  componentDidMount() {
    //FOurth
    console.log('component did mount');
    console.log('--------------------');
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('component did UPDATE');
    console.log('----------------------');
  }
  componentWillUnmount() {
    console.log('component will unmount');
    console.log('------------------------');
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProps &&
      this.props.ignoreProps !== nextProps.ignoreProps
    ) {
      console.log('should component update --DO not RENDER');
      console.log('------------------------');

      return false;
    }
    console.log('should component update --RENDER');
    console.log('------------------------');

    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return null;
  }

  render() {
    console.log('render'); //Third

    return (
      <div>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>

        <div>Counter:{this.state.counter}</div>
      </div>
    );
  }

  componentDidCatch(error, info) {
    console.log('component did catch');
  }
}
