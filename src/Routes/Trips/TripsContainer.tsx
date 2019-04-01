import React from "react";
import { Query } from "react-apollo";
import { USER_PROFILE } from "src/sharedQueries";
import { userProfile } from "src/types/api";
import TripsPresenter from "./TripsPresenter";

class ProfileQuery extends Query<userProfile> {}

class TripsContainer extends React.Component {
  public render() {
    return (
      <ProfileQuery query={USER_PROFILE}>
        {({ data: userData }) => <TripsPresenter userData={userData} />}
      </ProfileQuery>
    );
  }
}

export default TripsContainer;
