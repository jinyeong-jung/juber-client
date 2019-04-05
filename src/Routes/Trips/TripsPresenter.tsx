import React from "react";
import Header from "src/Components/Header";
import { getRideHistory, userProfile } from "src/types/api";
import styled from "../../typed-components";

const Container = styled.div`
  padding: 20px;
`;

const Wrap = styled.div`
  background-color: #eee;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 10px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
`;

const Data = styled.span`
  display: flex;
  font-size: 12px;
  margin-bottom: 10px;
  color: ${props => props.theme.blueColor};
`;

interface IProps {
  userData?: userProfile;
  data?: getRideHistory;
  loading: boolean;
}

const TripsPresenter: React.SFC<IProps> = ({
  userData: { GetMyProfile: { user = null } = {} } = {},
  data
}) => (
  <React.Fragment>
    <Header title={"Trips : Ride History"} backTo={"/juber-client"} />
    <Container>
      {data &&
        data.GetRideHistory &&
        data.GetRideHistory.rides &&
        data.GetRideHistory.rides.map(ride => (
          <React.Fragment key={ride!.id}>
            <Wrap>
              <Title>[{ride!.id}]</Title>
              <Title>Date (Unix Timestamp)</Title>
              <Data>{ride!.createdAt}</Data>
              <Title>From</Title>
              <Data>{ride!.pickUpAddress}</Data>
              <Title>To</Title>
              <Data>{ride!.dropOffAddress}</Data>
              <Title>Price</Title>
              <Data>${ride!.price}</Data>
              <Title>Duration</Title>
              <Data>{ride!.duration}</Data>
            </Wrap>
          </React.Fragment>
        ))}
    </Container>
  </React.Fragment>
);

export default TripsPresenter;
