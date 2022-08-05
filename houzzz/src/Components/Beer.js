import styled from "styled-components";

const Beer = styled.div`
  background: white;
  box-shadow: 0px 0px 5px 2.5px #bfbbb0;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex: 50%;
  height: fit-content;
  justify-content: space-between;
  margin: 0.1rem;
  padding: 0.2rem 0.6rem;

  @media only screen and (min-width: 1400px) {
    margin: 0.2rem;
    padding: 0.5rem 1rem;
  }
`;

const BeerDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Detail = styled.div`

  margin-left: 2rem;
`;

const Header = styled.h3`
  margin-left: 0rem;
`


export default function Beers({ name,image_url, id, description }) {

  return (
    <Beer>
      <BeerDetails>
        <img src={image_url} className="hovertext" data-hover="Hello, this is the tooltip" width="30" height="90" /> 
        <Detail>
        <Header>{name}</Header>
        <p>{description}</p>
        </Detail>
      </BeerDetails>
    </Beer>
  );
}
