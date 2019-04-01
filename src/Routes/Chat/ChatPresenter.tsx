import React from "react";
import Form from "src/Components/Form";
import Header from "src/Components/Header";
import Input from "src/Components/Input";
import Message from "src/Components/Message";
import { getChat, userProfile } from "src/types/api";
import styled from "../../typed-components";

const Container = styled.div``;

const Chat = styled.div`
  height: 65vh;
  overflow: auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InputCont = styled.div`
  padding: 0 20px;
`;

interface IProps {
  data?: getChat;
  userData?: userProfile;
  loading: boolean;
  messageText: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const ChatPresenter: React.SFC<IProps> = ({
  data: { GetChat: { chat = null } = {} } = {},
  userData: { GetMyProfile: { user = null } = {} } = {},
  messageText,
  loading,
  onInputChange,
  onSubmit
}) => (
  <Container>
    <Header title={"Chat"} />
    {!loading && chat && user && (
      <React.Fragment>
        <Chat>
          {chat.messages &&
            chat.messages.map(message => {
              if (message) {
                return (
                  <Message
                    key={message.id}
                    text={message.text}
                    mine={user.id === message.userId}
                  />
                );
              }
              return null;
            })}
        </Chat>
        <InputCont>
          <Form submitFn={onSubmit}>
            <Input
              value={messageText}
              placeholder={"Type your message"}
              onChange={onInputChange}
              name={"message"}
            />
          </Form>
        </InputCont>
      </React.Fragment>
    )}
  </Container>
);

export default ChatPresenter;
