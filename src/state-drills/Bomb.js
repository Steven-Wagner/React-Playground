import React from 'react';

class Bomb extends React.Component {

    state = {
        count: 0,
        bomb: ''
    }

    componentDidMount() {
        this.interval = setInterval(() =>{
            console.log('interval starting with count as ', this.state.count);
            let newCount = this.state.count + 1;
            console.log('state changing to ', newCount);
            this.setState({
                count: newCount
            })
            if (newCount>=8){
                this.setState({
                    bomb: 'BOOM'
                })
                clearInterval(this.interval);
            }
            
            else if (newCount%2 === 0){
                this.setState({
                    bomb: 'tock'
                })
            }
            else {
                this.setState({
                    bomb: 'tick'
                }) 
            }
            console.log('state is ', this.state);
        }, 1000)
    }

    render () {
        console.log('rendering');
        return (
            <div>
                <p>{this.state.bomb}</p>
            </div>
        )
    }
}

export default Bomb;