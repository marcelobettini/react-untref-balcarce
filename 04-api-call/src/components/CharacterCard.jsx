import { Card } from "react-bootstrap";

export default function CharacterCard({ ch }) {
    return (
        <Card
            bg="dark"
            text="white"
            className="mt-3 round rounded-3 text-center"
            style={{ width: '15rem' }}
        >

            <Card.Body>
                <Card.Header>
                    <Card.Title>
                        {ch.name}
                    </Card.Title>
                </Card.Header>
                <Card.Img src={ch.image} alt={ch.name} className="round rounded-circle" />
            </Card.Body>
        </Card>
    );
}
