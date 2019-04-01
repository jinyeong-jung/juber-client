import React from "react";
import { Query } from "react-apollo";
import { USER_PROFILE } from "src/sharedQueries";
import { getRideHistory, userProfile } from "src/types/api";
import TripsPresenter from "./TripsPresenter";
import { RIDE_HISTORY } from "./TripsQueries";

class ProfileQuery extends Query<userProfile> {}
class RideHistoryQuery extends Query<getRideHistory> {}

class TripsContainer extends React.Component {
  public render() {
    return (
      <ProfileQuery query={USER_PROFILE}>
        {({ data: userData }) => (
          <RideHistoryQuery query={RIDE_HISTORY}>
            {({ data, loading }) => (
              <TripsPresenter
                userData={userData}
                data={data}
                loading={loading}
              />
            )}
          </RideHistoryQuery>
        )}
      </ProfileQuery>
    );
  }
}

export default TripsContainer;
