import React from "react";
import { MutationFn } from "react-apollo";
import Helmet from "react-helmet";
import Button from "src/Components/Button";
import Form from "src/Components/Form";
import Header from "src/Components/Header";
import Input from "src/Components/Input";
import PhotoInput from "src/Components/PhotoInput";
import styled from "../../typed-components";

const Container = styled.div``;

const ExtendedForm = styled(Form)`
  padding: 0px 40px;
`;

const ExtendedInput = styled(Input)`
  margin-bottom: 30px;
`;

interface IProps {
  firstName: string;
  lastName: string;
  email: string;
  profilePhoto: string;
  loading: boolean;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: MutationFn;
  uploading: boolean;
}

const EditAccountPresenter: React.SFC<IProps> = ({
  firstName,
  lastName,
  email,
  profilePhoto,
  loading,
  onInputChange,
  onSubmit,
  uploading
}) => (
  <Container>
    <Helmet>
      <title>Edit Account | Juber</title>
    </Helmet>
    <Header title={"Edit Account"} backTo={"/"} />
    <ExtendedForm submitFn={onSubmit}>
      <PhotoInput
        uploading={uploading}
        fileUrl={profilePhoto}
        onChange={onInputChange}
      />
      <ExtendedInput
        type={"text"}
        placeholder={"First name"}
        value={firstName}
        name={"firstName"}
        onChange={onInputChange}
      />
      <ExtendedInput
        type={"text"}
        placeholder={"Last name"}
        value={lastName}
        name={"lastName"}
        onChange={onInputChange}
      />
      <ExtendedInput
        type={"text"}
        placeholder={"Email"}
        value={email}
        name={"email"}
        onChange={onInputChange}
      />
      <Button value={loading ? "Loading" : "Update"} onClick={null} />
    </ExtendedForm>
  </Container>
);

export default EditAccountPresenter;
