import React from "react";
import { MutationFn } from "react-apollo";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import Header from "src/Components/Header";
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

interface IProps {
  logUserOut: MutationFn;
}

const SettingsPresenter: React.SFC<IProps> = ({ logUserOut }) => (
  <React.Fragment>
    <Helmet>
      <title>Settings | Juber</title>
    </Helmet>
    <Header title={"Account Settings"} backTo={"/"} />
    <Container>
      <GridLink to={"/edit-account"}>
        <React.Fragment>
          <Image
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8WXtgkHOd-jo7S7n036wB18OVqNWDBxSWF6bfrdo15-P7tSFb"
            }
          />
          <Keys>
            <Key>Jinyeong</Key>
            <Key>jinyeong32@gmail.com</Key>
          </Keys>
        </React.Fragment>
      </GridLink>
      <FakeLink onClick={logUserOut}>Log Out</FakeLink>
    </Container>
  </React.Fragment>
);

export default SettingsPresenter;
