import React from 'react';
import './notifications.css';

class Notifications extends React.Component {
    render () {
        const badge = this.props.unread 
        ? <div className="number badge example">{this.props.unread}</div> 
        : null;
        console.log('making notification box', this.props);
        return (
            <div className="message">
                {this.props.name}
                {badge}
            </div>
        )
    }
}
export default Notifications;