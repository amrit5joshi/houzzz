import React, { useEffect, useState } from 'react';
import './App.css';
import endpoint from './config.js';
import axios from "axios";
import Beers from './Components/Beer';
import styled from "styled-components";

import "antd/lib/spin/style/index.css";
import { Spin } from "antd";

const BeerList = styled.div`
  background: white;
  display: flex;
  flex-direction: row;
  height: fit-content;
  padding: 0.2rem 0.6rem;
  flex-wrap: wrap;
  max-width: 400px;
  margin:auto;
  margin-top: 3rem;
  justify-content: space-around;

  @media screen and (min-width: 1000px) {
    max-width: 920px;
  }
`;

function App() {
  const [beers, setBeers] = useState([]);
  const [spin, setSpin] = useState(true);
  const [count, setCount] = useState(1);
  const increaseCount = () => setCount(count + 1);
  const resetCount = () => setCount(1);
  const fetchCourses = async () => {
    await axios
      .get(endpoint.apiUrl + "beers?page=" + count + "&per_page=10")
      .then((res) => {
        setBeers(res.data)
        setSpin(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setSpin(true);
    fetchCourses();
  }, [count]);

  return (
    <>
      <BeerList>
        {spin ?
          (
            <Spin
              tip="Loading..."
              size="large"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          )
          : beers.length === 0 ?
            (<div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}>Seems like You have reached end of the list...<button onClick={resetCount} className="reset-button">Start Again</button></div>)
            :
            beers.map((beer) => (
              <Beers
                key={beer.id}
                image_url={beer.image_url}
                description={beer.description}
                name={beer.name}
                yeast={beer.name}
                ingredients={beer.ingredients}
              />
            ))}
      </BeerList>
      {spin ? "" :
        (<div className="text-center">
          {
            beers.length !== 0 && <button onClick={increaseCount} className="load-button">Load More&nbsp;&nbsp;<i className="arrow down"></i></button>
          }
        </div>)
      }
    </>
  );
}

export default App;
