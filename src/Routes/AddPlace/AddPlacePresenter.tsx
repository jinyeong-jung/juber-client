import React from "react";
import { MutationFn } from "react-apollo";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import Button from "src/Components/Button";
import Form from "src/Components/Form";
import Header from "src/Components/Header";
import Input from "src/Components/Input";
import styled from "../../typed-components";

const Container = styled.div`
  padding: 0 40px;
`;

const ExtendedInput = styled(Input)`
  margin-bottom: 40px;
  font-size: 14px;
`;

const ExtendedLink = styled(Link)`
  text-decoration: underline;
  margin-bottom: 30px;
  display: block;
  font-size: 14px;
  text-align: center;
`;

interface IProps {
  name: string;
  address: string;
  onSubmit: MutationFn;
  loading: boolean;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  pickedAddress: boolean;
}

const AddPlacePresenter: React.SFC<IProps> = ({
  onSubmit,
  loading,
  onInputChange,
  name,
  address,
  pickedAddress
}) => (
  <React.Fragment>
    <Helmet>
      <title>Add Place | Juber</title>
    </Helmet>
    <Header title={"Add Place"} backTo={"/"} />
    <Container>
      <Form submitFn={onSubmit}>
        <ExtendedInput
          placeholder={"Name"}
          type={"text"}
          value={name}
          name={"name"}
          onChange={onInputChange}
        />
        <ExtendedInput
          placeholder={"Address"}
          type={"text"}
          value={address}
          name={"address"}
          onChange={onInputChange}
        />
        <ExtendedLink to={"/find-address"}>
          Pick place from this map
        </ExtendedLink>
        {pickedAddress && (
          <Button
            onClick={null}
            value={loading ? "Adding place" : "Add Place"}
          />
        )}
      </Form>
    </Container>
  </React.Fragment>
);

export default AddPlacePresenter;
