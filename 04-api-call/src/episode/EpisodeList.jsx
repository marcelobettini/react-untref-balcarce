import useGetData from "../hooks/useGetData";
import Spinner from 'react-bootstrap/spinner';
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
    const { data, loading, error } = useGetData("episode");
    return (
        <>
            <header>
                <h1 className="text-center">Episodes</h1>
            </header>
            <section className="grid-container">
                {
                    loading ?
                        <Spinner />
                        :
                        error ?
                            <h3>Error porque: {error.message}</h3>
                            :
                            data.results.map((ep) => <EpisodeCard {...ep} key={ep.id} />)
                }
            </section>

        </>
    );
}
