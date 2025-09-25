import { useState } from 'react';
import Spinner from 'react-bootstrap/spinner';
import Button from 'react-bootstrap/button';
import { ButtonGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import CharacterCard from './CharacterCard';
import useGetData from '../hooks/useGetData';


export default function CharacterList() {
    const [endpoint, setEndpoint] = useState("character");
    const { data, loading, error } = useGetData(endpoint);
    let url;
    if (data.info) {
        url = new URL(data.info.next);
        console.log(url);
    }

    const handleNext = () => {
        if (!data.info.next) return;
        setEndpoint(`character/${url.search}`);
    };



    return (
        <Container>
            <Row >
                <header className='d-flex  flex-column align-items-center'>
                    <h1 className='text-center'>Characters</h1>
                    <ButtonGroup>
                        <Button variant='success'>Prev</Button>
                        <Button onClick={handleNext}>Next</Button>
                    </ButtonGroup>
                </header>
            </Row>
            <section className='grid-container'>

                {
                    loading ?
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
            </section>
        </Container>
    );
}
