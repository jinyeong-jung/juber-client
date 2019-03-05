import React from "react";
import { MutationFn } from "react-apollo";
import Helmet from "react-helmet";
import Sidebar from "react-sidebar";
import AddressBar from "src/Components/AddressBar";
import Button from "src/Components/Button";
import RidePopUp from "src/Components/RidePopUp";
import { getNearbyRide, userProfile } from "src/types/api";
import Menu from "../../Components/Menu";
import styled from "../../typed-components";

const Container = styled.div``;

const MenuButton = styled.button`
  appearance: none;
  padding: 10px;
  position: absolute;
  top: 10px;
  left: 10px;
  text-align: center;
  font-weight: 800;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  transform: rotate(90deg);
  z-index: 2;
`;

const Map = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const ExtendedButton = styled(Button)`
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 10;
  height: auto;
  width: 80%;
`;

const RequestButton = styled(ExtendedButton)`
  bottom: 110px;
  background-color: #e53a40;
`;

interface IProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  loading: boolean;
  mapRef: any;
  toAddress: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAddressSubmit: () => void;
  price?: number;
  data?: userProfile;
  requestRideFn?: MutationFn;
  nearbyRide?: getNearbyRide;
  acceptRideFn?: MutationFn;
}

const HomePresenter: React.SFC<IProps> = ({
  isMenuOpen,
  toggleMenu,
  loading,
  mapRef,
  toAddress,
  onInputChange,
  onAddressSubmit,
  price,
  data: { GetMyProfile: { user = null } = {} } = {},
  requestRideFn,
  nearbyRide: { GetNearbyRide: { ride = null } = {} } = {},
  acceptRideFn
}) => {
  return (
    <Container>
      <Helmet>
        <title>Home | Juber</title>
      </Helmet>
      <Sidebar
        sidebar={<Menu />}
        open={isMenuOpen}
        onSetOpen={toggleMenu}
        styles={{
          sidebar: {
            backgroundColor: "white",
            width: "80%",
            zIndex: "10"
          }
        }}
      >
        {!loading && <MenuButton onClick={toggleMenu}>|||</MenuButton>}
        {user && !user.isDriving && (
          <React.Fragment>
            <AddressBar
              value={toAddress}
              name={"toAddress"}
              onChange={onInputChange}
              onBlur={null}
            />
            <ExtendedButton
              onClick={onAddressSubmit}
              value={price ? "Change Address" : "Pick Address"}
              disabled={toAddress === ""}
            />
          </React.Fragment>
        )}

        {price && (
          <RequestButton
            onClick={requestRideFn}
            disabled={toAddress === ""}
            value={`Request Ride ($${price})`}
          />
        )}

        {ride && (
          <RidePopUp
            pickUpAddress={ride.pickUpAddress}
            dropOffAddress={ride.dropOffAddress}
            price={ride.price}
            distance={ride.distance}
            passengerName={ride.passenger.fullName!}
            passengerPhoto={ride.passenger.profilePhoto!}
            acceptRideFn={acceptRideFn}
            id={ride.id}
          />
        )}

        <Map ref={mapRef} />
      </Sidebar>
    </Container>
  );
};

export default HomePresenter;
