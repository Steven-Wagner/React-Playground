import React from 'react';

class TheDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        console.log('constructor');
    }
    componentDidMount() {
        console.log('componentDidMount');
        this.interval = setInterval(() => {
          this.setState({
            date: new Date()
          })
        }, 1000)
      }

    componentWillUnmount() {
        console.log('componentWillMount');
        clearInterval(this.interval)
    }
  render() {
    console.log(this.state);
    console.log('render');
    return (
    <div>
        <p>{this.state.date.toLocaleString()}</p>
    </div>)
  }
}

export default TheDate