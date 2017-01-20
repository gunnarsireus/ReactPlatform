import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'fullcalendar';
import 'fullcalendar/dist/fullcalendar.min.css';
import 'fullcalendar/dist/locale/sv.js';


export default class Calendar  extends Component {
    constructor(props){
        super(props);
    };

    componentDidMount(){
        const {calendar} = this.refs;
        $(calendar).fullCalendar({events:this.props.events,
            locale:'sv',
            selectable: true,
            allDaySlot: false,
            weekNumbers:true,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            editable: true,
            droppable: true,
            drop: function(date) {
                alert("Dropped on " + date.format());
            },
            defaultDate: Date.now(),
            timezone: 'local',
            eventLimit: true,
            select: function (start, end, jsEvent, view) {
                alert("select start " + start.format() + ' end ' + end.format());
                if (slotLeftClick && jsEvent.shiftKey) {
                    slotLeftClick(start, end, jsEvent, $(this));
                }
            },
            eventClick: function (item, jsEvent, view) {
                alert("eventClick item " + item);
                if (jsEvent.which === 1 && itemLeftClick != null) {
                    itemLeftClick(item, jsEvent, $(this));
                }
                else if (jsEvent.which === 3 && itemRightClick != null) {
                    itemRightClick(item, jsEvent, $(this));
                }
            },
            dayClick: function (start, jsEvent, view) {
                var end = moment(start);
                end.add(1, 'hours');
                alert("dayClick start " + start.format() + ' end ' + end.format());
                if (slotLeftClick && (jsEvent.timeStamp - thiz.prevclick) < 500) {
                    slotLeftClick(start, end, jsEvent, $(this));
                }
                thiz.prevclick = jsEvent.timeStamp;
            },
            eventDrop: function (item, delta, revertFunc, jsEvent) {
                alert("eventDrop item " + item);
                if (itemMove != null) {
                    itemMove(item, jsEvent, $(this), revertFunc);
                }
            },
            eventResize: function (item, delta, revertFunc, jsEvent, ui, view) {
                alert("eventResize item " + item);
                if (itemResize != null) {
                    itemResize(item, jsEvent, $(this), revertFunc);
                }
            }
        });
    };

    componentWillUnmount(){
        const {calendar} = this.refs;
        $(calendar).fullCalendar('destroy');
    };

    render(){ 
        return (
            <div ref="calendar"> </div>  );
    }
}