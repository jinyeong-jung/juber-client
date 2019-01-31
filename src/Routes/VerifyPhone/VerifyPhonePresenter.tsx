import React from "react";
import Helmet from "react-helmet";
import Button from "../../Components/Button";
import Header from "../../Components/Header";
import Input from "../../Components/Input";
import styled from "../../typed-components";

const Container = styled.div``;

const Form = styled.form`
  padding: 0px 40px;
`;

const ExtendedInput = styled(Input)`
  margin-bottom: 20px;
`;

interface IProps {
  key: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const VerifyPhonePresenter: React.SFC<IProps> = ({ key, onChange }) => (
  <Container>
    <Helmet>
      <title>Verify Phone | Juber</title>
    </Helmet>
    <Header title={"Verify Phone Number"} backTo={"/phone-login"} />
    <Form>
      <ExtendedInput
        value={key}
        onChange={onChange}
        placeholder={"Enter Verification Code"}
        name={"key"}
      />
      <Button value={"Submit"} onClick={null} />
    </Form>
  </Container>
);

export default VerifyPhonePresenter;