import React from "react";
import Header from "src/Components/Header";
import Message from "src/Components/Message";
import { getChat, userProfile } from "src/types/api";
import styled from "../../typed-components";

const Container = styled.div``;

interface IProps {
  data?: getChat;
  userData?: userProfile;
  loading: boolean;
}

const ChatPresenter: React.SFC<IProps> = ({
  data: { GetChat: { chat = null } = {} } = {},
  userData: { GetMyProfile: { user = null } = {} } = {},
  loading
}) => (
  <Container>
    <Header title={"Chat"} />
    {!loading && chat && user && (
      <React.Fragment>
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
      </React.Fragment>
    )}
  </Container>
);

export default ChatPresenter;
