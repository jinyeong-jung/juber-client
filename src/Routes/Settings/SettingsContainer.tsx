import React from "react";
import { Mutation, Query } from "react-apollo";
import { LOG_USER_OUT } from "src/localSharedQueries";
import { USER_PROFILE } from "src/sharedQueries";
import { userProfile } from "src/types/api";
import SettingsPresenter from "./SettingsPresenter";

class MiniProfileQuery extends Query<userProfile> {}

class SettingsContainer extends React.Component {
  public render() {
    return (
      <Mutation mutation={LOG_USER_OUT}>
        {logUserOut => (
          <MiniProfileQuery query={USER_PROFILE}>
            {({ data: userData, loading: userDataLoading }) => (
              <SettingsPresenter
                logUserOut={logUserOut}
                userData={userData}
                userDataLoading={userDataLoading}
              />
            )}
          </MiniProfileQuery>
        )}
      </Mutation>
    );
  }
}

export default SettingsContainer;
