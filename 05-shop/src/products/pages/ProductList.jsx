
import { Row } from "react-bootstrap";
import useGetData from "../hooks/useGetData";
import ProductItem from "../components/ProductItem";

export default function ProductList() {

    const { data, isLoading } = useGetData('/products');
    if (isLoading) return <p>Aguantá...</p>;

    return (
        <Row as={"section"}>
            <h1>Listado de Productos</h1>
            {data.map(p => <ProductItem key={p.id} product={p} />)}
        </Row>
    );
}
