import * as Icon from "react-bootstrap-icons";

export default function CartSummary({ products }) {
    return (
        <div>
            {!products.length ?
                <Icon.Cart2 /> :
                <>
                    <Icon.CartCheckFill /> <span>{products.length}</span>
                </>
            }
        </div>
    );
}