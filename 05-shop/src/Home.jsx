import { Container } from 'react-bootstrap';

import useGetData from './products/hooks/useGetData';
import ProductList from './products/pages/ProductList';
import CartSummary from './products/components/CartSummary';

export default function Home() {
    const { loading, error, data } = useGetData("/products");

    return (


        <Container>
            <CartSummary />

            {loading ? <p>Carganding...</p>
                :
                error ? <p>   {error.message}</p>
                    :
                    // prop drilling: pasamos una prop por ProductList solo para llegar a ProductItem
                    <ProductList products={data} />
            }
        </Container>

    );
}
