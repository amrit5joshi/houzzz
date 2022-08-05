import React, { useEffect, useState } from 'react';
import './App.css';
import endpoint from './config.js';
import axios from "axios";
import Beers from './Components/Beer';
import styled from "styled-components";

const Content = styled.div`
  background: white;
  box-shadow: 0 0.8rem 0.8rem -1.2rem black;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: fit-content;
  justify-content: space-between;
  margin: 0.1rem;
  padding: 0.2rem 0.6rem;

  @media only screen and (min-width: 1400px) {
    margin: 0.2rem;
    padding: 0.5rem 1rem;
  }
`;

function App() {
  const [beers, setBeers] = useState([]);
  const [spin, setSpin] = useState(true);
  const [count, setCount] = useState(1);
  const increaseCount = () => setCount(count+1) 
  const fetchCourses = async () => {
    await axios
      .get(endpoint.apiUrl+"beers?page="+count+"&per_page=10")
      .then((res) => {
        setBeers(res.data)
        setSpin(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCourses();
  },[count]);

  return (
    <Content>
         <div className="App">
     {   spin ? "...Loading":
     beers.map((beer) => (
          <Beers
            key={beer.id}
            image_url = {beer.image_url}
            description={beer.description}
            id={beer.id}
            name={beer.name}
          />
          ))}
    </div>
    <button onClick={increaseCount} >Load More</button>
    </Content>
  );
}

export default App;
