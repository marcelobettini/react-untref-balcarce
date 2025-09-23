import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import CharacterCard from './CharacterCard';
import EndpointForm from './EndpointForm';
const BASE_URL = "https://rickandmortyapi.com/api/";

export default function ApiCall() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [endpoint, setEndpoint] = useState("character");
    const getData = async (endpoint) => {
        try {
            setLoading(true);
            setError(null);
            const res = await fetch(BASE_URL + endpoint);
            if (!res.ok) throw new Error("Network Error");
            const parsedData = await res.json();
            setData(parsedData);
            console.log(parsedData);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        console.log("Corre useEffect");
        getData(endpoint);
    }, [endpoint]);
    return (
        <div>


            <h1>Api Call</h1>
            <h3>valor de endpoint: {endpoint}</h3>
            <EndpointForm setEndpoint={setEndpoint} />
            {loading ?
                <Spinner variant='primary' animation='grow' size='md' />
                :
                error ?
                    <h2>Error: {error.message}</h2>
                    :
                    Array.isArray(data.results) ?
                        data.results.map((ch) => <CharacterCard ch={ch} key={ch.id} />)
                        :
                        <CharacterCard ch={data} />
            }

        </div>
    );
}
