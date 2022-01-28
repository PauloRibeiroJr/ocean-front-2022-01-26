import React from 'react';
import reactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import Marvel from './components/Marvel';
import Calendar from 'react-calendar/dist/umd/Calendar';
import 'react-calendar/dist/Calendar.css';
//import { Carousel } from 'react-bootstrap';

function HelloJampa() {
    return <p>Não sou de Jampa</p>;
}

reactDOM.render(
    <div className="text-center">
        <img
            alt="Teste"
            src="https://picsum.photos/400/300?random=2"
            className="img-fluid"
        />
        <HelloWorld nome={'Paulo'} sobrenome={'Ribeio Jr'} idade={48} />
        <HelloJampa />
        <Marvel />
        <Calendar calendarType="US" />
        <p>Fim</p>
    </div>,
    document.getElementById('root'),
);
