
import { useRef } from "react";
export default function UncontrolledForm() {
    const error = useRef();
    const search = (formData) => {
        error.current.textContent = "";
        const query = formData.get("query");
        if (!query) {
            error.current.textContent = "Se pudrió todo...";
            return;
        }
        alert(`You searched for '${query}'`);
    };


    return (
        <form action={search}>
            <input name="query" type="search" />
            <br />
            <div ref={error}></div>
            <br />
            <button type="submit">Search</button>
        </form>
    );
}
