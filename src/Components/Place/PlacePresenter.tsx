import React from "react";
import { MutationFn } from "react-apollo";
import styled from "../../typed-components";

const Place = styled.div`
  margin: 15px 0;
  display: flex;
  align-items: center;
  & i {
    font-size: 12px;
  }
`;

const Icon = styled.span`
  cursor: pointer;
`;

const Container = styled.div`
  margin-left: 10px;
`;

const Name = styled.span`
  display: block;
`;

const Address = styled.span`
  color: ${props => props.theme.greyColor};
  font-size: 14px;
`;

interface IProps {
  name: string;
  address: string;
  isFav: boolean;
  onIconPress: MutationFn;
}

const PlacePresenter: React.SFC<IProps> = ({
  name,
  address,
  isFav,
  onIconPress
}) => (
  <Place>
    <Icon onClick={onIconPress as any}>{isFav ? "★" : "☆"}</Icon>
    <Container>
      <Name>{name}</Name>
      <Address>{address}</Address>
    </Container>
  </Place>
);

export default PlacePresenter;
