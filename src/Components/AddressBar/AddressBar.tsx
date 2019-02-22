import React from "react";
import styled from "../../typed-components";

const Container = styled.input`
  position: absolute;
  background-color: white;
  border-radius: 5px;
  -webkit-appearance: none;
  z-index: 2;
  width: 80%;
  border: 0;
  font-size: 14px;
  padding: 15px 10px;
  box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), 0 8px 15px rgba(0, 0, 0, 0.07);
  margin: auto;
  bottom: 30px;
  left: 0;
  right: 0;
  height: auto;
`;

interface IProps {
  value: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}

const AddressBar: React.SFC<IProps> = ({ value, name, onChange, onBlur }) => {
  return (
    <Container
      plceholder={"Type address"}
      value={value}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default AddressBar;
