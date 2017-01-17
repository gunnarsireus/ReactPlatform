import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, Glyphicon, Button, ButtonGroup } from 'react-bootstrap';
export default class Child extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return <Button className='warning' onClick={this.props.onClick}	>{this.props.text}</Button>;
    }

};