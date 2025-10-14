import { useParams } from "react-router";
import useGetData from '../hooks/useGetData';

export default function ProductDetail() {
    const { id } = useParams();
    const { data, isLoading, error } = useGetData("/products/" + id);
    if (isLoading) return <h3>Vamos a ver...</h3>;
    if (error) return <h3>Se esfumó...</h3>;
    return (

        <div>ProductDetail {id}
            <br />
            {JSON.stringify(data)}
        </div>
    );
}
