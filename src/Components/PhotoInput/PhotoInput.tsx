import React from "react";
import styled from "../../typed-components";

const Container = styled.div``;

const Image = styled.label`
  cursor: pointer;
  height: 80px;
  width: 80px;
  display: block;
  border-radius: 50%;
  margin-bottom: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  overflow: hidden;
  & img {
    width: 80px;
    height: 80px;
  }
`;

const Input = styled.input`
  color: white;
  opacity: 0;
  height: 1px;
  &:focus {
    outline: none;
  }
`;

interface IProps {
  uploading: boolean;
  fileUrl: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PhotoInput: React.SFC<IProps> = ({ uploading, fileUrl, onChange }) => (
  <Container>
    <Input id={"photo"} type="file" accept="image/*" onChange={onChange} />
    <Image htmlFor="photo">
      {uploading && (
        <img
          src={
            "https://66.media.tumblr.com/695ce9a82c8974ccbbfc7cad40020c62/tumblr_o9c9rnRZNY1qbmm1co1_1280.gif"
          }
        />
      )}
      {!uploading && <img src={fileUrl} />}
    </Image>
  </Container>
);

export default PhotoInput;
