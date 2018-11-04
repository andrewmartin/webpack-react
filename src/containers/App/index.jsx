import React, { Component } from 'react';

export default class App extends Component {
  state = {
    isMounted: false,
  };

  componentDidMount() {
    this.setState({
      isMounted: 'mounted',
    });
  }

  render() {
    const { isMounted } = this.state;
    return (
      <div>
        <h3>
          Mounted:
          {isMounted}
        </h3>
      </div>
    );
  }
}
