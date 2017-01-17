import React, { Component } from 'react';
export default class Input extends Component {
    displayName: 'Input';
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            disabled: this.props.disabled,
            checked: this.props.checked,
            className:this.props.className,
            maxLength:this.props.maxLength,
            placeholder:this.props.placeholder,
            id:this.props.id,
            name:this.props.name,
            type:this.props.name,
            oldValue:this.props.value
        };
        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };
    componentWillReceiveProps(nextProps) {
        if (this.props.value != nextProps.value) {
            this.setState({ value: nextProps.value});
        };
        if (this.props.disabled != nextProps.disabled) {
            this.setState({ disabled: nextProps.disabled});
        };
        if (this.props.checked != nextProps.checked) {
            this.setState({ checked: nextProps.checked});
        };
        if (this.props.className != nextProps.className) {
            this.setState({ className: nextProps.className});
        };
        if (this.props.maxLength != nextProps.maxLength) {
            this.setState({ maxLength: nextProps.maxLength});
        };
        if (this.props.placeholder != nextProps.placeholder) {
            this.setState({ placeholder: nextProps.placeholder});
        };
    };
    componentDidMount() {
        this.setState({ value: this.props.value,
                     disabled: this.props.disabled,
                     checked: this.props.checked,
                     className:this.props.className,
                     maxLength:this.props.maxLength,
                     placeholder:this.props.placeholder
        });                                        
    };
    handleBlur(event) {
        if ((this.props.checkError===null)||(this.props.checkError(event) === true)) {
            this.setState({ value: event.target.value,
                            oldValue: event.target.value
            })
        }
        else
        {
            this.setState({ value: this.state.oldValue })
        }
    };

    handleChange(event) {
        if (this.state.value !== event.target.value) {
            this.setState({ value: event.target.value })
        }
        if (this.props.onClick!==null) {
            this.props.onClick();
        }
    };
    render() {  
            return <input value={this.state.value} 
                            maxLength={this.state.maxLength} 
                            placeholder={this.state.placeholder} 
                            className={this.state.className}
                            id={this.props.id}
                            name={this.props.name}
                            type={this.props.type}
                            disabled={this.state.disabled} 
                            checked={this.state.checked} 
                            onBlur={this.handleBlur}
                            onChange={this.handleChange}/>
        }
};
Input.propTypes= 
{
    value:React.PropTypes.string,
    placeholder:React.PropTypes.string,
    maxLength: React.PropTypes.number,
    tabIndex: React.PropTypes.number,
    disabled:React.PropTypes.bool,
    checked:React.PropTypes.bool,
    className:React.PropTypes.string,
    id:React.PropTypes.string,
    name:React.PropTypes.string,
    type:React.PropTypes.string,
    readOnly:React.PropTypes.bool,
    checkError: React.PropTypes.func,
    onClick: React.PropTypes.func
}
Input.defaultProps =
{
    placeholder:'',
    maxLength:100,
    tabIndex:0,
    disabled:false,
    checked:false,
    value:'',
    className:'',
    id:'',
    name:'',
    type:'text',
    checkError:null,
    onClick:null
}