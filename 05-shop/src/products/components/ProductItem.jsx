import Button from "react-bootstrap/button";
import Card from "react-bootstrap/card";
import Col from "react-bootstrap/col";
import { useContext } from "react";
import { CartContext } from "../../App";

export default function ProductItem({ product }) {
    const { setCart } = useContext(CartContext);
    function handleCart() {
        setCart((prev) => ([...prev, product]));
    }

    return (
        <Col xs={12} sm={6} md={4}>
            <Card as={"article"} className="mb-2">
                <Card.Header className="bg-success-subtle">
                    <Card.Title as={"p"}>{product.title}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Img src={product.image} alt={product.title}></Card.Img>
                    <Button variant="outline-primary" className="mt-3" onClick={handleCart}>buy</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}
