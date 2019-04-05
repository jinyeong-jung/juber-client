import React from "react";
import { MutationFn } from "react-apollo";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import Header from "src/Components/Header";
import Place from "src/Components/Place";
import { getPlaces, userProfile } from "src/types/api";
import styled from "../../typed-components";

const Container = styled.div`
  padding: 0px 40px;
`;

const GridLink = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 10px;
  margin-bottom: 10px;
`;

const Image = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
`;

const Keys = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

const Key = styled.span`
  display: block;
  margin-bottom: 7px;
  font-size: 14px;
`;

const FakeLink = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

const SLink = styled(Link)`
  display: block;
  text-decoration: underline;
  margin: 20px 0px;
`;

interface IProps {
  logUserOut: MutationFn;
  userData?: userProfile;
  placesData?: getPlaces;
  userDataLoading: boolean;
  placesLoading: boolean;
}

const SettingsPresenter: React.SFC<IProps> = ({
  logUserOut,
  userData: { GetMyProfile: { user = null } = {} } = {},
  placesData: { GetMyPlaces: { places = null } = {} } = {},
  userDataLoading,
  placesLoading
}) => (
  <React.Fragment>
    <Helmet>
      <title>Settings | Juber</title>
    </Helmet>
    <Header title={"Account Settings"} backTo={"/juber-client"} />
    <Container>
      <GridLink to={"/juber-client/edit-account"}>
        {!userDataLoading && user && (
          <React.Fragment>
            <Image src={user.profilePhoto} />
            <Keys>
              <Key>{user.fullName}</Key>
              <Key>{user.email}</Key>
            </Keys>
          </React.Fragment>
        )}
      </GridLink>
      {!placesLoading &&
        places &&
        places.map(place => (
          <Place
            key={place!.id}
            id={place!.id}
            name={place!.name}
            address={place!.address}
            isFav={place!.isFav}
          />
        ))}
      <SLink to={"/juber-client/places"}>Go to Places</SLink>
      <FakeLink onClick={logUserOut}>Log Out</FakeLink>
    </Container>
  </React.Fragment>
);

export default SettingsPresenter;
