import React, { useState } from 'react'
import { Navbar } from '../ui/Navbar';
import {Calendar, momentLocalizer} from 'react-big-calendar'
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { useDispatch } from 'react-redux';
import {messages} from '../../helpers/calendar-messages-es'
import moment from 'moment';
import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { uiOpenModal } from '../../actions/ui';

moment.locale('es');
const localizer = momentLocalizer(moment);

const events = [{
    title: 'Cumpleaños de mi gfecita',
    start: moment().toDate(),
    end: moment().add(2,'hours').toDate(),
    bgcolor: '#fafafa',
    notes: 'Comprar el pastel',
    user: {
        _id: '123',
        name: 'James Howlett'
    }
}]

export const CalendarScreen = () => {

    const dispatch = useDispatch();

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    const onDoubleClick = (e) => {
        dispatch(uiOpenModal());
    }

    const onSelectEvent = (e) => {
        console.log(e);
    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    const eventStyleGetter = ( event,start, end, isSelected) =>{
        // console.log(event,start, end, isSelected);
        const style = {
            backgroundColor : '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: '#ffffff'
        }
        return {
            style
        }
    }
    return (
        <div className="calendar-screen">
            <Navbar/>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages= {messages}
                eventPropGetter={eventStyleGetter}
                onSelectEvent= { onSelectEvent }
                onView= {onViewChange}
                onDoubleClickEvent= {onDoubleClick}
                view = {lastView}
                components= {{
                    event: CalendarEvent
                }}/>
                <CalendarModal/>
        </div>
    )
}
