import "./style.css";

// Importing Components
import ListingItems from "../../components/ListingItems";

// Importing Custom Hooks
import { useFetch } from "../../hooks/useFetch";
import { fetchLovedKitties } from "../../utils/http";

const LovedKitties = () => {
  const {
    isFetching: loading,
    error,
    fetchedData: lovedKitties,
  } = useFetch(fetchLovedKitties, []);

  if (error) {
    return <p>{error.message}</p>;
  }

  return loading ? (
    <p>The Loved Kitties are coming!!!</p>
  ) : (
    <main className="main container">
      {/* isClickable is false here because on the this listing we don't need the functionnality */}
      <ListingItems kittyArray={lovedKitties} isClickable={false} />
    </main>
  );
};

export default LovedKitties;
