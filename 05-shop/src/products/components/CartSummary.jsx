import { useContext } from "react";
import * as Icon from "react-bootstrap-icons";
import { CartContext } from "../../App";
export default function CartSummary() {
    const { cart } = useContext(CartContext);

    return (
        <div>
            {!cart.length ?
                <Icon.Cart2 /> :
                <article style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center" }}>
                    <Icon.CartCheckFill />
                    {JSON.stringify(cart[7].price)}
                    <small>Products: {cart.length}</small>
                    <small>${cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)}</small>
                </article>
            }
        </div>
    );
}