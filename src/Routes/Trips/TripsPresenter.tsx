import React from "react";
import Header from "src/Components/Header";
import { userProfile } from "src/types/api";
import styled from "../../typed-components";

const Container = styled.div`
  padding: 20px;
`;

const Driver = styled.div`
  text-align: center;
  height: 300px;
  line-height: 300px;
`;

interface IProps {
  userData?: userProfile;
}

const TripsPresenter: React.SFC<IProps> = ({
  userData: { GetMyProfile: { user = null } = {} } = {}
}) => (
  <React.Fragment>
    <Header title={"Trips : Ride History"} backTo={"/"} />
    <Container>
      {user && user.isDriving ? (
        <Driver>This page is only for passenger :(</Driver>
      ) : (
        "Trips"
      )}
    </Container>
  </React.Fragment>
);

export default TripsPresenter;
