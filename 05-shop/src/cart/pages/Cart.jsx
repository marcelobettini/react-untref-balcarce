import { useContext } from "react";
import { CartContext } from "../CartContext";
import { Link } from "react-router";
import { getComputedCart } from "../../utils/getComputedCart";
import { getTotalCartPrice } from '../../utils/getTotalCartPrice';
export default function Cart() {
    const { cart } = useContext(CartContext);
    const computedCart = getComputedCart(cart);
    console.log(computedCart);

    return (
        <article>
            <header><h3>Mi carrito ({cart.length} items)</h3></header>
            <ul className={"list-unstyled text-start"}>
                {computedCart.map(p => <li key={p.id}>{p.title} - ${p.price} - {p.quantity} - ${p.totalPrice}</li>
                )}
            </ul>
            <p>Total: ${getTotalCartPrice(cart)}</p>
            <Link to="/">volver</Link>
        </article>
    );
}
