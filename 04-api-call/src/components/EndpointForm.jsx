import Form from "react-bootstrap/form";
import Button from "react-bootstrap/button";
import ButtonGroup from "react-bootstrap/buttonGroup";

export default function EndpointForm({ setEndpoint }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const { value } = form.elements.endpoint;
        setEndpoint(value);
    };
    return (
        <Form onSubmit={(e) => handleSubmit(e)} className="px-2 py-3 bg-primary-subtle round rounded-2">
            <Form.Group>
                <Form.Label>
                    Endpoint
                </Form.Label>
                <Form.Control type="text" placeholder="enter endpoint to fetch..." name="endpoint"></Form.Control>
                <Form.Text><small>type a valid endpoint as described in API docs</small></Form.Text>
            </Form.Group>
            <ButtonGroup>
                <Button type="submit">Submit</Button>
                <Button type="reset">Reset</Button>
            </ButtonGroup>
        </Form>
    );
}
