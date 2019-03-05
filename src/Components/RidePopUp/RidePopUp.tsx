import React from "react";
import styled from "../../typed-components";
import Button from "../Button";

interface IPops {
  pickUpAddress: string;
  dropOffAddress: string;
  price: number;
  distance: string;
  passengerName: string;
  passengerPhoto: string;
  acceptRideFn: any;
  id: number;
}

const Container = styled.div`
  background-color: white;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 80%;
  height: 80%;
  z-index: 9;
  padding: 20px;
  border-radius: 10px;
`;

const Title = styled.div`
  font-weight: 800;
  margin-top: 30px;
  margin-bottom: 7px;
  &:first-child {
    margin-top: 0;
  }
  font-size: 13px;
`;

const Data = styled.span`
  color: ${props => props.theme.blueColor};
  font-size: 13px;
`;

const Passenger = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Img = styled.img`
  border-radius: 50%;
  margin-right: 20px;
  width: 20%;
  hight: 20%;
`;

const RidePopUp: React.SFC<IPops> = ({
  pickUpAddress,
  dropOffAddress,
  price,
  distance,
  passengerName,
  passengerPhoto,
  acceptRideFn,
  id
}) => (
  <Container>
    <Title>Pick Up Address</Title>
    <Data>{pickUpAddress}</Data>
    <Title>Drop Off Address</Title>
    <Data>{dropOffAddress}</Data>
    <Title>Price</Title>
    <Data>${price}</Data>
    <Title>Distance</Title>
    <Data>{distance}m</Data>
    <Title>Passenger:</Title>
    <Passenger>
      <Img src={passengerPhoto} />
      <Data>{passengerName}</Data>
    </Passenger>
    <Button
      value={"Accept Ride"}
      onClick={() => acceptRideFn({ variables: { rideId: id } })}
    />
  </Container>
);

export default RidePopUp;
