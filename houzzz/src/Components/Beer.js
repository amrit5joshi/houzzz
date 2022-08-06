import styled from "styled-components";

const Detail = styled.div`
  margin-left: 2rem;
`;

const Header = styled.h3`
  font-size: 0.8rem;
  max-width: 16rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (min-width: 1400px) {
    font-size: 1rem;
  }
`


export default function Beers({ name, image_url, description, ingredients}) {

  return (
      <div className="beer-item">
        <span className="hovertext" data-hover={`Ingredient: ${Object.keys(ingredients).join(',')}`} >
        <img src={image_url} width="20" height="80" />
        </span>
        <Detail>
        <Header>{name}</Header>
        <p className="yeast">{ingredients.yeast}</p>
        <p className="description">{description}</p>
        </Detail>
      </div>
  );
}
