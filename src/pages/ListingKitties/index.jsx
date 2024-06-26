import "./style.css";

// Importing custom hook
import { useFetch } from "../../hooks/useFetch";

// Importing utils function
import { fetchKitties } from "../../utils/http";

// Importing Components
import ListingItems from "../../components/ListingItems";

const ListingKitties = () => {
  const {
    isFetching: loading,
    error,
    fetchedData: kitties,
  } = useFetch(fetchKitties, []);

  if (error) {
    return <p>{error.message}</p>;
  }

  return loading ? (
    <p className="container txt-center">The Kitties are coming!!!</p>
  ) : (
    <main className="main container">
      <ListingItems kittyArray={kitties} isClickable={true} />
    </main>
  );
};

export default ListingKitties;
