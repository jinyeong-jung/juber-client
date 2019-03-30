import React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { USER_PROFILE } from "src/sharedQueries";
import { getChat, userProfile } from "src/types/api";
import ChatPresenter from "./ChatPresenter";
import { GET_CHAT } from "./ChatQueries";

interface IProps extends RouteComponentProps<any> {}

class ChatQuery extends Query<getChat> {}
class ProfileQuery extends Query<userProfile> {}

class ChatContainer extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    if (!props.match.params.chatId) {
      props.history.push("/");
    }
  }
  public render() {
    const {
      match: {
        params: { chatId }
      }
    } = this.props;
    return (
      <ProfileQuery query={USER_PROFILE}>
        {({ data: userData }) => (
          <ChatQuery query={GET_CHAT} variables={{ chatId: Number(chatId) }}>
            {({ data, loading }) => (
              <ChatPresenter
                data={data}
                loading={loading}
                userData={userData}
              />
            )}
          </ChatQuery>
        )}
      </ProfileQuery>
    );
  }
}

export default ChatContainer;
