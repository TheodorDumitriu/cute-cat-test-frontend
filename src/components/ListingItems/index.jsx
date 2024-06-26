import "./style.css";

// Importing packages
import axios from "axios";

// Importing components
import heartImg from "../../assets/heart.png";

const ListingItems = ({ kittyArray, isClickable }) => {
  const handleFavorite = (id, kittyUrl) => {
    if (id) {
      const postKitty = async () => {
        try {
          const url =
            "https://site--cute-cat-backend--yq48zswblh2x.code.run/post-cuteness";
          const kittyIdToPost = { id, kittyUrl };

          await axios.post(url, kittyIdToPost);
        } catch (error) {
          console.log(error);
        }
      };
      postKitty();
    }
  };

  return (
    <ul className="listing d-flex flex-wrap">
      {kittyArray.map((kitty) => (
        <li className="listing__item position-r" key={kitty.id}>
          {isClickable ? (
            <button
              onClick={() => handleFavorite(kitty.id, kitty.url)}
              className="listing__like d-flex align-items-center justify-content-center"
            >
              <img className="listing__like-img" src={heartImg} alt="heart" />
            </button>
          ) : (
            <p className="listing__love-score position-a d-flex align-items-center justify-content-center">
              <span className="listing__love-score-caption">
                {kitty.loveScore}
              </span>
              ❤️
            </p>
          )}
          <img className="listing__img" src={kitty.url} alt={kitty.id} />
        </li>
      ))}
    </ul>
  );
};

export default ListingItems;
