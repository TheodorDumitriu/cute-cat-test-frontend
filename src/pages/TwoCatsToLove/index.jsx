import "./style.css";

import axios from "axios";

// Importing native hooks
import { useState, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";

// Importing components
import Hero from "../../components/Hero";

const TwoCatsToLove = () => {
  const [loading, setLoading] = useState(false);
  const [twoRandomkitties, setTwoRandomkitties] = useState([]);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0); // Simple force update curtesy of https://legacy.reactjs.org/docs/hooks-faq.html#is-there-something-like-forceupdate

  useEffect(() => {
    const fetchTwoRandomkitties = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "https://site--cute-cat-backend--yq48zswblh2x.code.run/two-cats-to-love"
        );
        setTwoRandomkitties(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchTwoRandomkitties();
  }, [ignored]);

  const handleWinner = (id, kittyUrl) => {
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
    forceUpdate();
  };

  return loading ? (
    <p className="container txt-center">The Kitties are coming!!!</p>
  ) : (
    <main className="facemash container">
      <Hero
        title="Ready for a combat of cuteness???"
        caption="Pick you favorite kitty and let's see who wins!"
      />
      <ul className="facemash__list d-flex align-items-center justify-content-space-between">
        {twoRandomkitties.map((kitty) => (
          <li key={kitty.id} className="facemash__item">
            <button
              className="facemash__clicker"
              onClick={() => handleWinner(kitty.id, kitty.url)}
            >
              <img className="facemash__img" src={kitty.url} alt={kitty.id} />
            </button>
          </li>
        ))}
      </ul>
      <div className="facemash__go-to-tier-container d-flex justify-content-center">
        <Link className="facemash__go-to-tier txt-center" to="/loved-kitties">
          Check our tier list of cuteness
        </Link>
      </div>
    </main>
  );
};

export default TwoCatsToLove;
