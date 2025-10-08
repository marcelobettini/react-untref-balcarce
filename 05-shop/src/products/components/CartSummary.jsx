import { useContext } from "react";

import { Link } from "react-router";
import * as Icon from "react-bootstrap-icons";

import { CartContext } from "../../App";

export default function CartSummary() {
    const { cart } = useContext(CartContext);

    return (
        <div>
            {!cart.length ?
                <Icon.Cart2 /> :

                <article style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center" }}>
                    <Link to="/cart" className="text-decoration-none">
                        <Icon.CartCheckFill />
                        <small> {cart.length}</small>
                    </Link>
                </article>
            }
        </div >
    );
}