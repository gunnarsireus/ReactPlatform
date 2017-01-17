import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Radio from './Radio.jsx';
import Input from './Input.jsx';

import { Grid, Row, Col, Glyphicon, Button, ButtonGroup } from 'react-bootstrap';


export default class Radios extends Component {
    constructor(props) {
		super(props);
		this.state = {
            repairPossible: this.props.repairPossible,
			radioData : []		
        };

	    this.props.getRadios.map(item =>  this.state.radioData.push(item));

	};
	
	componentWillReceiveProps(newProps){
		this.setState(
			{repairPossible : newProps.repairPossible}
		)
	}
	render() {
		return <div>
			<Row>
                 {this.state.radioData.map(item => 
                    <Radio {...item} key={item.radioNumber} checked={this.state.repairPossible===item.radioNumber} onClick={item.onClick.bind(this)}  text = {item.radioText}/> )}              
           </Row>
		 </div>
	}
}
Radios.propsTypes = 
{
	getRadios:React.PropTypes.array
}

