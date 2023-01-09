import React, { useEffect, useState } from "react";
import Content from "../components/Content";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const [searchText, setSearchtxt] = useState("Avanger");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
            `https://www.omdbapi.com/?
            t=${searchText}&apikey=${process.env.REACT_APP_API_KEY}`
        );
        const data = await response.json();
        setMovie(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [searchText]);
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading</h1>
      </section>
    );
  }
  return (
    <div>
      <Navbar />

      <div className="searchc">
        <form className="searchf">
          <input
            type="text"
            className="searchf"
            value={searchText}
            onChange={(e) => setSearchtxt(e.target.value)}
            placeholder="search movie"
          />
        </form>
      </div>
      {searchText ? (
        <Content movie={movie} />
      ):(
        <div className="container" >
            <h4>pls search movie</h4>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default Home
