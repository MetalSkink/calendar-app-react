import React, { useEffect, useState } from 'react'
import { Navbar } from '../ui/Navbar';
import {Calendar, momentLocalizer} from 'react-big-calendar'
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import {messages} from '../../helpers/calendar-messages-es'
import moment from 'moment';
import 'moment/locale/es'
import { uiOpenModal } from '../../actions/ui';
import { eventClearActive, eventSetActive, eventStartLoading } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('es');
const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {

    const {uid} = useSelector(state => state.auth);

    const dispatch = useDispatch();
    const {events, activeEvent} = useSelector(state => state.calendar);
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    useEffect(() => {
        dispatch(eventStartLoading());
    }, [dispatch])

    const onDoubleClick = (e) => {
        dispatch(uiOpenModal());
    }

    const onSelectEvent = (e) => {
        dispatch(eventSetActive(e));
    }

    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    const onSelectSlot = (e)=>{
        dispatch(eventClearActive())
    }

    const eventStyleGetter = ( event,start, end, isSelected) =>{
        // console.log(event,start, end, isSelected);
        const style = {
            backgroundColor : (uid=== event.user._id) ? '#367CF7' : '#465660',
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
                onSelectSlot={ onSelectSlot}
                selectable= {true}
                view = {lastView}
                components= {{
                    event: CalendarEvent
                }}/>
                <CalendarModal/>
                <AddNewFab/>
                { activeEvent && <DeleteEventFab/> }
        </div>
    )
}
