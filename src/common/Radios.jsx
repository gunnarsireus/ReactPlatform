import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Radio from './Radio.jsx';
import Input from './Input.jsx';

import { Grid, Row, Col, Glyphicon, Button, ButtonGroup } from 'react-bootstrap';


export default class Radios extends Component {
    constructor(props) {
		super(props);
		alert(this.props.getRadios);
		this.state = {
            repairPossible: 0,
			radioData : [{radioNumber:0, radioText: "Ja", onClick: this.setRepair }, 
							{radioNumber:1, radioText: "Nej", onClick: this.setNoRepair  }, 
							{radioNumber:2, radioText: "Kanske", onClick: this.setMaybeRepair  }]	
			
        };
		this.setRepair = this.setRepair.bind(this);
        this.setNoRepair = this.setNoRepair.bind(this);   
        this.setMaybeRepair = this.setMaybeRepair.bind(this);

	};
	
	setRepair() {
        this.setState({
            repairPossible : 0
        });
        alert('set Repair');
    };

    setNoRepair() {
        this.setState({
            repairPossible : 1
        });
        alert('set No Repair');
    };
    setMaybeRepair() {
        this.setState({
            repairPossible : 2
        });
        alert('set Maybe Repair');
    };

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

