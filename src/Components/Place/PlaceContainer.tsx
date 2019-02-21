import React from "react";
import { Mutation } from "react-apollo";
import { GET_PLACES } from "src/sharedQueries";
import { editPlace, editPlaceVariables } from "src/types/api";
import PlacePresenter from "./PlacePresenter";
import { EDIT_PLACE } from "./PlaceQueries";

interface IProps {
  name: string;
  address: string;
  id: number;
  isFav: boolean;
}

class FavMutation extends Mutation<editPlace, editPlaceVariables> {}

class PlaceContainer extends React.Component<IProps> {
  public render() {
    const { id, name, address, isFav } = this.props;
    return (
      <FavMutation
        mutation={EDIT_PLACE}
        variables={{
          isFav: !isFav,
          placeId: id
        }}
        refetchQueries={[{ query: GET_PLACES }]}
      >
        {editPlaceFn => (
          <PlacePresenter
            onIconPress={editPlaceFn}
            name={name}
            address={address}
            isFav={isFav}
          />
        )}
      </FavMutation>
    );
  }
}

export default PlaceContainer;
