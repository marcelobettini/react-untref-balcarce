import { useContext } from "react";
import { CartContext } from "../CartContext";

export default function Cart() {
    const { cart } = useContext(CartContext);
    console.log(cart);
    return (
        <div><h1>Carriten...</h1>
            <p>{JSON.stringify(cart)}</p></div>
    );
}
