import { Container } from 'react-bootstrap';

import Footer from './shared/components/Footer';
import Navigation from './shared/components/Navigation';
import { Outlet } from 'react-router';
import CartSummary from './cart/components/CartSummary';

export default function HomeLayout() {


    return (


        <Container >


            <Navigation />
            <CartSummary />
            <Outlet />

            <Footer />

        </Container>

    );
}
