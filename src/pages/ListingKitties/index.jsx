import "./style.css";

// Importing utils function
import { fetchKitties } from "../../utils/http";

const ListingKitties = () => {
  let kitties = fetchKitties();
  console.log(kitties);
  return <h1> fromListingKitties</h1>;
};

export default ListingKitties;
