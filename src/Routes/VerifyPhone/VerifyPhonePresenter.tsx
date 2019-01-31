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

const VerifyPhonePresenter = () => (
  <Container>
    <Helmet>
      <title>Verify Phone | Juber</title>
    </Helmet>
    <Header title={"Verify Phone Number"} backTo={"/phone-login"} />
    <Form>
      <ExtendedInput
        value={""}
        onChange={null}
        placeholder={"Enter Verification Code"}
      />
      <Button value={"Submit"} onClick={null} />
    </Form>
  </Container>
);

export default VerifyPhonePresenter;
