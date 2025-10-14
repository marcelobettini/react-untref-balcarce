
import { Link } from "react-router";
import ProductItem from "../../products/components/ProductItem";
import { Row } from "react-bootstrap";

export default function ProductList({ products, setCart }) {

    return (
        <Row as={"section"}>
            {products?.map((p) => (
                <Link to={`product/${p.id}`} className="text-decoration-none" key={p.id}>
                    <ProductItem product={p} setCart={setCart} />
                </Link>
            ))}
        </Row>
    );
}
