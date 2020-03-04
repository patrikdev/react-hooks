import React from 'react';

class Classes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <p>Você clicou {this.state.count} vezes</p>
        <button onClick={() => this.setState({count: this.state.count + 1 })}>
          Clicar
        </button>
      </div>
    )
  }
}

export default Classes