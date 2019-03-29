import React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { USER_PROFILE } from "src/sharedQueries";
import { getRide, getRideVariables, userProfile } from "src/types/api";
import RidePresenter from "./RidePresenter";
import { GET_RIDE } from "./RideQueries";

class RideQuery extends Query<getRide, getRideVariables> {}
class ProfileQuery extends Query<userProfile> {}

interface IProps extends RouteComponentProps<any> {}

class RideContainer extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    if (!props.match.params.rideId) {
      props.history.push("/");
    }
  }
  public render() {
    const {
      match: {
        params: { rideId }
      }
    } = this.props;
    return (
      <ProfileQuery query={USER_PROFILE}>
        {({ data: userData }) => (
          <RideQuery query={GET_RIDE} variables={{ rideId: Number(rideId) }}>
            {({ data, loading }) => (
              <RidePresenter
                data={data}
                userData={userData}
                loading={loading}
              />
            )}
          </RideQuery>
        )}
      </ProfileQuery>
    );
  }
}

export default RideContainer;
