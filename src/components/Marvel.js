import { useEffect, useState } from 'react';
import axios from 'axios';

const url = 'https://ocean-bcknd-cloud-18-01-2022.herokuapp.com/herois';

const backend = axios.create({ baseURL: url });

function Marvel() {
    const [itens, setItens] = useState([]);
    useEffect(() => {
        backend
            .get(url, {
                headers: {
                    Authorization: 'Basic 123456',
                },
            })
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
