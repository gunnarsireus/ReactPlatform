import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Parent from './Parent.jsx';
import Radios from './Radios.jsx';



export default class Test extends Component {
    constructor(props) {
        super(props); 
		this.state = {
            radioChecked: 1	
        };
        this.setRadio1 = this.setRadio1.bind(this);
        this.setRadio2 = this.setRadio2.bind(this);   
        this.setRadio3 = this.setRadio3.bind(this);							
    };
	
    setRadio1() {
        this.setState({
            radioChecked : 0
        });
        alert('set Radio 1');
    };

    setRadio2() {
        this.setState({
            radioChecked : 1
        });
        alert('set Radio 2');
    };
    setRadio3() {
        this.setState({
            radioChecked : 2
        });
        alert('set Radio 3');
    };
    render() {var radioList = [{radioNumber:0, radioText: " radio 1", onClick: this.setRadio1 }, 
							{radioNumber:1, radioText: "radio 2", onClick: this.setRadio2  }, 
							{radioNumber:2, radioText: "radio 3", onClick: this.setRadio3  }]

        return <div><h1>Test of Radios</h1>
				<Radios getRadios={radioList} radioChecked={this.state.radioChecked} name={'rbRadio'}/>
				</div>;
    }

};