import React, { Component } from 'react';
import 'root/node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class PhotoTable extends Component {
    constructor(props){
        super(props);
        this.state = {width:0,
            height: 0,
            tableData : []		
        };
    };

    componentDidMount() {
        let item = {id:0,
            workorderid:0,
            caption:'',
            rotation:0,
            image:{},
            createdname:'',
            createddate:'',
            deleteimage:{}
        };
        let arr = new Array();
        for (var i = 0; i < this.props.gridResultsSize; i++) {
            var current = Object.assign({}, item);
            current.id = this.props.gridResults[i].id;
            current.workorderid = this.props.gridResults[i].workorderid;
            current.caption = this.props.gridResults[i].caption;
            current.rotation = this.props.gridResults[i].rotation;
            current.image = this.props.gridResults[i].image;
            current.createdname = this.props.gridResults[i].createdname;
            current.createddate = this.props.gridResults[i].createddate;
            current.deleteimage = this.props.gridResults[i].delete;
            arr.push(current);
        }
        this.state = {width:(this.props.gridResultsSize===0)?0:2,
            height: parseInt(this.props.gridResultsSize/2 + 1),
            tableData : arr		
        };
    }

    componentWillReceiveProps(newProps) {
        let item = {id:0,
            workorderid:0,
            caption:'',
            rotation:0,
            image:{},
            createdname:'',
            createddate:'',
            deleteimage:{}
        };
        let arr = new Array();
        for (var i = 0; i < newProps.gridResultsSize; i++) {
            var current = Object.assign({}, item);
            current.id = newProps.gridResults[i].id;
            current.workorderid = newProps.gridResults[i].workorderid;
            current.caption = newProps.gridResults[i].caption;
            current.rotation = newProps.gridResults[i].rotation;
            current.image = newProps.gridResults[i].image;
            current.createdname = 'Fotograf: ' + newProps.gridResults[i].createdname;
            current.createddate = 'Datum: ' + newProps.gridResults[i].createddate;
            current.deleteimage = newProps.gridResults[i].delete;
            arr.push(current);
        }
        this.state = {width:(newProps.gridResultsSize===0)?0:2,
            height: parseInt(newProps.gridResultsSize/2 + 1),
            tableData : arr		
        };
    };


    render(){ if (this.state.tableData.length===0) { return <div/>; }
        let rows = [];
        let self = this;
        for (var i = 0; i < self.state.height; i++){
            let rowID = `row${i*2}`;
            let cell = [];
            for (var idx = 0; idx < self.state.width; idx++){
                let cellID = `cell${i*2}-${idx}`
                if (self.state.tableData[i*self.state.width + idx]!==undefined) {
                    cell.push(<td style={{width:"12%", height:"20px"}}>{self.state.tableData[i*self.state.width + idx].createddate}</td>)
                    cell.push(<td style={{width:"20%", height:"20px"}}>{self.state.tableData[i*self.state.width + idx].createdname}</td>)
                    cell.push(<td style={{width:"15%", height:"20px"}}>{self.state.tableData[i*self.state.width + idx].caption}</td>)
                    cell.push(<td><div><span className="grid-cell-clickable"><img src={self.state.tableData[i*self.state.width + idx].deleteimage.properties.src}  alt='' /></span></div></td>)  
                }
                else
                {
                    cell.push(<td></td>)
                    cell.push(<td></td>)
                    cell.push(<td></td>)  
                    cell.push(<td></td>) 
                }
            }  
            rows.push(<tr key={i*2} id={rowID}>{cell}</tr>);
            rowID = `row${i*2+1}`;
            cell=[];
            for (var idx = 0; idx < self.state.width; idx++){
                if (self.state.tableData[i*self.state.width]===undefined) { break;}
                let cellID = `cell${i*2+1}-${idx}`
                if (self.state.tableData[i*self.state.width + idx]!==undefined) {
                    cell.push(<td colSpan={4} style={{border:"1px solid black", width:"30%", height:"20%"}} key={cellID} id={cellID}><img src={self.state.tableData[i*self.state.width + idx].image.properties.src} alt='' height='50%'  width='100%' /></td>)     
                }
                else
                {
                    cell.push(<td colSpan={4} style={{border:"1px solid black"}} key={cellID} id={cellID}>Tom cell&nbsp;&nbsp;</td>);
                }
            }
            rows.push(<tr key={i*2 + 1} id={rowID}>{cell}</tr>)
        }
    return(
            <table style={{border:"1px solid black", align:"left", width:"100%"}}>
               <tbody>
                 {rows}
               </tbody>
             </table>
    )
  }
}