import Card from 'react-bootstrap/card';

export default function EpisodeCard({ name, air_date, episode }) {
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
                    {air_date}
                </Card.Text>
                <Card.Text>
                    {episode}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
