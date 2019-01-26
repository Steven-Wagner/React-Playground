import React from 'react';

class BarbuttonsClass extends React.Component {
    static defaultProps = {color: 'blue'};
    render() {
        return (
            <div className={'bar' + this.props.className} style={{color: this.props.color}}>
                <ul>
                    <li>This div is {this.props.color}</li>
                    <li>{this.props.children}</li>
                </ul>
            </div>)
    }
}

export default BarbuttonsClass;