import React from 'react';
import './Accordian.css';

class Accordian extends React.Component {

    state = {
        currentIndex: '',
        currentContent: ''
    }

    static defaultProps = {
        sections: []
    }

    handleClick(index){
        console.log('getting new index', index);
        const newContent = this.props.sections[index].content;
        this.setState({
            currentIndex: index,
            currentContent: newContent
        })

    }

    renderContent(){
        console.log('rendering content');
        return(
            <p>{this.state.currentContent}</p>
        )
    }

    render(){

        const sectionsJSXList = 
            this.props.sections.map((section, index) => {
            console.log('mapping section buttons', section);
            console.log(index)
            return( 
                <li key={index}>
                    <button onClick={()=>this.handleClick(index)}>{section.title}</button>
                    {this.state.currentIndex===index && this.renderContent()}
                </li>
        )
        })
        console.log(sectionsJSXList);

        return(
            <ul>
                {sectionsJSXList}
            </ul>
        )
    }
}

export default Accordian;
