import { useEffect, useState } from 'react';
import axios from 'axios';

const client = axios.create({
    baseURL: 'https://ocean-bcknd-cloud-18-01-2022.herokuapp.com/herois',
});

function Marvel() {
    const [itens, setItens] = useState([]);
    useEffect(() => {
        axios
            .get('https://ocean-bcknd-cloud-18-01-2022.herokuapp.com/herois')
            .then(response => {
                setItens(response.data);
            });
    }, []);
    return (
        <>
            <h1>Teste</h1>
            <div>
                {itens.map(item => (
                    <div key={item._id}>
                        {' '}
                        Nome: {item.nome}
                        <hr
                            size="5"
                            width="50%"
                            align="left"
                            color="green"
                        ></hr>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Marvel;
