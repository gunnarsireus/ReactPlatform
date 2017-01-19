import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Radio from './Radio.jsx';
import Input from './Input.jsx';

import { Grid, Row, Col, Glyphicon, Button, ButtonGroup } from 'react-bootstrap';


export default class Radios extends Component {
    constructor(props) {
		super(props);
		this.state = {
            radioChecked: this.props.radioChecked,
			radioData : []		
        };
		
        for (var i = 0; i < this.props.gridResultsSize; i++) { 
            radioData.push(this.props.gridResults[i].caption);
        }
	    this.props.getRadios.map(item =>  this.state.radioData.push(item));

	};
	
	componentWillReceiveProps(newProps){
		this.setState(
			{radioChecked : newProps.radioChecked}
		)
	}
	render() {
		return <div>
			<Row>
                 {this.state.radioData.map(item => 
                     <Radio {...item} key={item.radioNumber} checked={this.state.radioChecked===item.radioNumber} onClick={item.onClick.bind(this)}  text = {item.radioText}  name={this.props.name}/> )}              
           </Row>
		 </div>
	}
}

