import React from 'react';
import reactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import Marvel from './components/Marvel';

function HelloJampa() {
    return <p>Não sou de Jampa</p>;
}

reactDOM.render(
    <div>
        <HelloWorld nome={'Paulo'} sobrenome={'Ribeio Jr'} idade={48} />
        <HelloJampa />
        <Marvel />
        <p>Fim</p>
    </div>,
    document.getElementById('root'),
);
