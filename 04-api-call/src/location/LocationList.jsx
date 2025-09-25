import useGetData from "../hooks/useGetData";
import LocationCard from "./LocationCard";
import Spinner from 'react-bootstrap/spinner';
export default function LocationList() {
    const { data, loading, error } = useGetData("location");
    return (
        <>
            <header>
                <h1 className="text-center">Locations</h1>
            </header>
            <section className="grid-container">
                {
                    loading ?
                        <Spinner />
                        :
                        error ?
                            <h3>Error porque: {error.message}</h3>
                            :
                            data.results.map((loc) => <LocationCard {...loc} key={loc.id} />)
                }
            </section>

        </>
    );
}
