import ProductItem from "../components/ProductItem";
import { Row } from "react-bootstrap";

export default function ProductList({ products, setCart }) {
    return (
        <Row as={"section"}>
            {products?.map((p) => <ProductItem key={p.id} product={p} setCart={setCart} />)}
        </Row>
    );
}
