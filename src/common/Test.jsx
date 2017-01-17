import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Parent from './Parent.jsx';
import Radios from './Radios.jsx';


export default class Test extends Component {
    constructor(props) {
        super(props); 
        this.setRepair = this.setRepair.bind(this);
        this.setNoRepair = this.setNoRepair.bind(this);   
        this.setMaybeRepair = this.setMaybeRepair.bind(this);
		this.radioList = this.radioList.bind(this);
    };
	
	radioList() { return [{radioNumber:0, radioText: "Ja", onClick: this.setRepair }, 
							{radioNumber:1, radioText: "Nej", onClick: this.setNoRepair  }, 
							{radioNumber:2, radioText: "Kanske", onClick: this.setMaybeRepair  }]
	}
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
        return <div><h1>Test of Radios</h1>
				<Radios getRadios={this.radioList}/>
				</div>;
    }

};