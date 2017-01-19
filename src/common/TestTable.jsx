import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Table from './Table.jsx';



export default class TestTable extends Component {
    constructor(props) {
        super(props); 						
    };
	
    render() {
        return <div><h1>Test of Table</h1>
				<Table />
				</div>;
    }

};