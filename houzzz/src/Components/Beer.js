import { useState } from "react";
import styled from "styled-components";

const Detail = styled.div`
  margin-left: 2rem;
`;

const Header = styled.h3`
  font-size: 0.8rem;
  max-width: 10rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (min-width: 1000px) {
    font-size: 1rem;
    max-width: 16rem;
  }
`


export default function Beers({ name, image_url, description, ingredients }) {
  const [show, setShow] = useState(false);

  const toggleTriangle = () => {
    setShow(!show);
  }

  return (
    <div className="beer-item">
      <span
        className="hovertext"
        onMouseEnter={toggleTriangle}
        onMouseLeave={toggleTriangle}
        data-hover={`Ingredient: ${Object.keys(ingredients).join(',')}`} >
        <div style={{ visibility: show ? "visible" : "hidden" }} className="arrow-down" />
        <img className="image-beer" src={image_url} width="20" height="80" />
      </span>
      <Detail>
        <Header>{name}</Header>
        <p className="yeast">{ingredients.yeast}</p>
        <p className="description">{description}</p>
      </Detail>
    </div>
  );
}
