import React from 'react';

class Hello extends React.Component {
    static defaultProps = {
        button1: 'world',
        button2: 'friend',
        button3: 'react'
    }
    
    state = {
        who: 'world'
    }

    handleClick = (e) =>{
        console.log('click logged', e.target.value);
        const newGreeting = e.target.value;
        this.setState({
            who: newGreeting
        })
        console.log('state hopefully changed', newGreeting);
    }

    render () {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button value={this.props.button1} onClick={this.handleClick}>{this.props.button1}</button>
                <button value={this.props.button2} onClick={this.handleClick}>{this.props.button2}</button>
                <button value={this.props.button3} onClick={this.handleClick}>{this.props.button3}</button>
            </div>
        )
    }

}

export default Hello;