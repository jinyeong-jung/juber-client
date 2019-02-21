import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import Header from "src/Components/Header";
import Place from "src/Components/Place";
import { getPlaces } from "src/types/api";
import styled from "../../typed-components";

const Container = styled.div`
  padding: 0 40px;
`;

const SLink = styled(Link)`
  text-decoration: underline;
`;

interface IProps {
  data?: getPlaces;
  loading: boolean;
}

const PlacesPresenter: React.SFC<IProps> = ({
  data: { GetMyPlaces: { places = null } = {} } = {},
  loading
}) => (
  <React.Fragment>
    <Helmet>
      <title>Places | Juber</title>
    </Helmet>
    <Header title={"Places"} backTo={"/"} />
    <Container>
      {!loading && places && places.length === 0 && (
        <SLink to={"/add-place"}>Add your places 🏠</SLink>
      )}
      {!loading &&
        places &&
        places.map(place => (
          <Place
            key={place!.id}
            name={place!.name}
            address={place!.address}
            isFav={place!.isFav}
          />
        ))}
    </Container>
  </React.Fragment>
);

export default PlacesPresenter;
