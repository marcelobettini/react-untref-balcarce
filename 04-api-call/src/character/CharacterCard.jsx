import { Card, Spinner } from "react-bootstrap";
import { useState } from "react";
import './CharacterCard.css';

export default function CharacterCard({ ch }) {
    const [imgLoaded, setImgLoaded] = useState(false);
    return (


        <Card
            bg="dark-subtle"

            className="mt-3 round rounded-3 text-center"
            style={{
                width: '15rem',

            }}
        >
            <Card.Body>
                <Card.Header className="mb-2">
                    <Card.Title>
                        {ch.name}
                    </Card.Title>

                </Card.Header>
                {!imgLoaded && <Spinner />}
                <Card.Img src={ch.image} alt={ch.name} className="round rounded-circle"
                    style={{ aspectRatio: '1/1' }}
                    onLoad={() => setImgLoaded(true)} />
                <Card.Text className={ch.status}>{ch.status}</Card.Text>
            </Card.Body>
        </Card>

    );
}
