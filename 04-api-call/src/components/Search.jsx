import Form from "react-bootstrap/form";
import Button from "react-bootstrap/button";
import ButtonGroup from "react-bootstrap/buttonGroup";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";


export default function Search({ setEndpoint }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.elements.query.value;
        const status = form.elements.status.value;
        const gender = form.elements.gender.value;
        if (!name.trim() && !status && !gender) return;
        const endpointWithQuery = `character?name=${name}&status=${status}&gender=${gender}`;
        setEndpoint(endpointWithQuery);
    };
    return (
        <Form onSubmit={(e) => handleSubmit(e)} className="px-2 py-3 bg-primary-subtle round rounded-2">
            <Form.Group>
                <Form.Label>
                    Search Name
                    <Form.Control type="search" placeholder="rick, morty, beth..." name="query"></Form.Control>
                </Form.Label>
            </Form.Group>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>
                            Status
                            <Form.Select type="select" name="status">
                                <option value="">All</option>
                                <option value="alive">Alive</option>
                                <option value="dead">Dead</option>
                                <option value="unknown">Unknown</option>
                            </Form.Select>
                        </Form.Label>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>
                            Gender
                            <Form.Select type="select" name="gender">
                                <option value="">All</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="genderless">Genderless</option>
                                <option value="unknown">Unknown</option>
                            </Form.Select>
                        </Form.Label>
                    </Form.Group>
                </Col>
            </Row>
            <ButtonGroup>
                <Button type="submit">Search</Button>
            </ButtonGroup>
        </Form>
    );
}
