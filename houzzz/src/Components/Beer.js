import styled from "styled-components";

const Detail = styled.div`
  margin-left: 2rem;
`;

const Image = styled.div`
  cursor:pointer;
  margin-left: 2rem;
  padding-top: 1rem;
`;

const Header = styled.h3`
  font-size: 0.8rem;
`


export default function Beers({ name, image_url, description, yeast, ingredients}) {

  return (
      <div className="beer-item">
        <span className="hovertext" data-hover={`Ingredient: ${Object.keys(ingredients).join(',')}`} >
        <img src={image_url} width="20" height="80" />
        </span>
        <Detail>
        <Header>{name}</Header>
        <p className="yeast">{yeast}</p>
        <p className="description">{description}</p>
        </Detail>
      </div>
  );
}
