import "./style.css";

// Importing components
import heartImg from "../../assets/heart.png";

const ListingItems = ({ kittyArray, isClickable }) => {
  const handleFavorite = (id, kittyUrl) => {
    console.log("add logic for post here");
  };

  return (
    <ul className="listing d-flex flex-wrap">
      {kittyArray.map((kitty) => (
        <li className="listing__item position-r" key={kitty.id}>
          {isClickable && (
            <button
              onClick={() => handleFavorite(kitty.id, kitty.url)}
              className="listing__like"
            >
              <img className="listing__like-img" src={heartImg} alt="heart" />
            </button>
          )}
          <img className="listing__img" src={kitty.url} alt={kitty.id} />
        </li>
      ))}
    </ul>
  );
};

export default ListingItems;
