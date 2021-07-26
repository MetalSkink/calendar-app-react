import React, { useState } from 'react';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../actions/ui';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1,'hour');
const nowEnd = now.clone().add(2, 'hours');



export const CalendarModal = () => {

    const dispatch = useDispatch()
    const {modalOpen} = useSelector(state => state.ui);

    const [dateStart, setDateStart] = useState(now.toDate());
    const [dateEnd, setDateEnd] = useState(nowEnd.toDate());

    const [titleValid, setTitleValid] = useState(true);

    const [formValues, setFormValues] = useState({
        title: 'Eventiño',
        notes: 'notiñas',
        start: now.toDate(),
        end: nowEnd.toDate()
    });

    const {title, notes, start, end} = formValues;

    const handleInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name] : target.value
        })
    }

    const closeModal = () => {
        dispatch(uiCloseModal());        
    }

    const handleStartDateChange = (e) =>{
        setDateStart(e);
        setFormValues({
            ...formValues,
            start: e
        })
    }

    const handleEndDateChange = (e)=>{
        setDateEnd(e);
        setFormValues({
            ...formValues,
            end: e
        })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const momentStart = moment(start);
        const momentEnd = moment(end);
        // console.table(formValues);
        if (momentStart.isSameOrAfter(momentEnd)) {
            return Swal.fire('Error', 'La fecha fin debe ser diferente a la fecha de inicio', 'error')
        }

        if (title.trim().length < 2) {
            return setTitleValid(false);
        }
        setTitleValid(true);
        closeModal();
    }

    return (
            <Modal
                isOpen={modalOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                closeTimeoutMS={200}
                className="modal"
                overlayClassName="modal-fondo"
            >
                <h1> Nuevo evento </h1>
                <hr />
                <form className="container" onSubmit={handleSubmitForm}>
                    <div className="form-group">
                        <label>Fecha y hora inicio</label>
                        <DateTimePicker
                            onChange={handleStartDateChange}
                             value={dateStart}
                             className= "form-control"
                          />
                    </div>

                    <div className="form-group">
                        <label>Fecha y hora fin</label>
                        <DateTimePicker
                            onChange={handleEndDateChange}
                             value={dateEnd}
                             minDate= {dateStart}
                             className= "form-control"
                          />
                    </div>
                    <hr />
                    <div className="form-group">
                        <label>Titulo y notas</label>
                        <input
                            type="text"
                            className={`form-control ${!titleValid && 'is-invalid'}`}
                            placeholder="Título del evento"
                            name="title"
                            value = {title}
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                        <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                    </div>

                    <div className="form-group">
                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="Notas"
                            rows="5"
                            value = {notes}
                            onChange={handleInputChange}
                            name="notes"
                        ></textarea>
                        <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-outline-primary btn-block"
                    >
                        <i className="far fa-save"></i>
                        <span> Guardar</span>
                    </button>

                </form>
            </Modal>
    )
}