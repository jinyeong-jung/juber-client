import React from "react";
import { Mutation, Query } from "react-apollo";
import { LOG_USER_OUT } from "src/localSharedQueries";
import { GET_PLACES, USER_PROFILE } from "src/sharedQueries";
import { getPlaces, userProfile } from "src/types/api";
import SettingsPresenter from "./SettingsPresenter";

class MiniProfileQuery extends Query<userProfile> {}

class PlaceQuery extends Query<getPlaces> {}

class SettingsContainer extends React.Component {
  public render() {
    return (
      <Mutation mutation={LOG_USER_OUT}>
        {logUserOut => (
          <MiniProfileQuery query={USER_PROFILE}>
            {({ data: userData, loading: userDataLoading }) => (
              <PlaceQuery query={GET_PLACES}>
                {({ data: placesData, loading: placesLoading }) => (
                  <SettingsPresenter
                    logUserOut={logUserOut}
                    userData={userData}
                    placesData={placesData}
                    userDataLoading={userDataLoading}
                    placesLoading={placesLoading}
                  />
                )}
              </PlaceQuery>
            )}
          </MiniProfileQuery>
        )}
      </Mutation>
    );
  }
}

export default SettingsContainer;
