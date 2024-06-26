import "./style.css";

// Importing components
import Hero from "../../components/Hero";

const Home = () => {
  return (
    <main className="main container">
      <Hero
        title="Have you ever dreamed of tons of cute kitties"
        caption="Well stop dreaming and go see them now!!!!"
        addButton={true}
        buttonUrl="/kitties"
        buttonCaption="Let's see them 😻"
      />
    </main>
  );
};

export default Home;
