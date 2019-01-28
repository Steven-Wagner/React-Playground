import React from "react";

class Tabs extends React.Component {
    static defaultProps = { tabs: [] };

    state = {
        currentSelectedIndex: 0
    }

    handleClick(index){
        this.setState({
            currentSelectedIndex: index
        })
        console.log('button clicked', index);
        console.log(this.state);
    }

    renderButtons(){
        return this.props.tabs.map((button, index)=>(
            <button onClick={()=>this.handleClick(index)} key={index}>{button.name}</button>))
    }

    renderContent(){
        console.log('renderingContent')
        const currentTab = this.props.tabs[this.state.currentSelectedIndex];
        console.log('the oject for  current', this.state.currentSelectedIndex)
        return (<div className='content'>
                    {currentTab.content}
                </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderButtons()}
                {!!this.props.tabs.length && this.renderContent()}
            </div>
            )
        } 
}

export default Tabs;