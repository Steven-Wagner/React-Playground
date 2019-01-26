import React from 'react';

class RouletteGuess extends React.Component {

    state = {
        chamber: null,
        spinningTheChamber: false,
    }

    static defaultProps = {
        bulletInChamber: 8
    }

    componentWillUnmount(){
        clearTimeout(this.timeout);
    }

    clickHandle = () =>{
        console.log('click clicked', this.state);
        this.setState({
            spinningTheChamber: true
        })
        console.log('chamber spinning', this.state);
        this.timeout = setTimeout(()=> {
            let randomNum = Math.ceil(Math.random() * 8);
            this.setState({
                chamber: randomNum,
                spinningTheChamber: false
            })
            console.log('chamber set to ', this.state.chamber);
        }, 2000)
    }

    displayRender(){
        if (this.state.spinningTheChamber){
            return 'spinning the chamber and pulling the trigger!';
        }
        else if (this.props.bulletInChamber === this.state.chamber){
            return 'BANG!!!';
        }
        else {
            return ('You\'re safe');
        }
    }

    render () {
        return(
            <div>
                <p>{this.displayRender()}</p>
                <button onClick={this.clickHandle}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGuess;