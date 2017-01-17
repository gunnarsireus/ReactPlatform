import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Child from './Child.jsx';


export default class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childrenData : this.getChildrenState()
        }
        this.getChildrenState = this.getChildrenState.bind(this);
        this.handleChildClick = this.handleChildClick.bind(this);
    };
    getChildrenState() {
        return [{childText: "Click me 1!", childNumber: 0 }, {childText: "Click me 2!", childNumber: 1 }];     
    };
	
	handleChildClick(event){
        alert(event.target.outerHTML);
    }
    
    render() {   
			return <div>
			{this.state.childrenData.map(item => 
			<Child {...item} key={item.childNumber} onClick={this.handleChildClick}  text = {item.childText}/> )}              
            </div>;

    };
};
