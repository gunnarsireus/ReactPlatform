import React, { Component } from 'react';

export default class Table extends Component {
  constructor(props){
    super(props);
    this.state = {width:3,
				height: this.props.gridResultsSize/3,
				tableData : {}		
        };

	    this.props.gridResults.map(item =>  this.state.tableData.push(item));
  }
  render(){
    let rows = [];
    for (var i = 0; i < this.state.height; i++){
      let rowID = `row${i}`
      let cell = []
      for (var idx = 0; idx < this.state.width; idx++){
        let cellID = `cell${i}-${idx}`
        cell.push(<td key={cellID} id={cellID}>this.state.tableData[i + idx]</td>)
      }
      rows.push(<tr key={i} id={rowID}>{cell}</tr>)
    }
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <table id="simpleTable">
               <tbody>
                 {rows}
               </tbody>
             </table>
          </div>
        </div>
      </div>
    )
  }
}