import Card from 'react-bootstrap/card';

export default function LocationCard({ name, type, dimension }) {
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
                        {name}
                    </Card.Title>
                </Card.Header>
                <Card.Text>
                    {type}
                </Card.Text>
                <Card.Text>
                    {dimension}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
