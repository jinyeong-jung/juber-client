import React from "react";
import { Mutation } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { toast } from "react-toastify";
import { GET_PLACES } from "src/sharedQueries";
import { addPlace, addPlaceVariables } from "src/types/api";
import AddPlacePresenter from "./AddPlacePresenter";
import { ADD_PLACE } from "./AddPlaceQueries";

interface IState {
  address: string;
  name: string;
  lat: number;
  lng: number;
}

interface IProps extends RouteComponentProps<any> {}

class AddPlaceMutation extends Mutation<addPlace, addPlaceVariables> {}

class AddPlaceContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const { location: { state = {} } = {} } = props;
    this.state = {
      address: state.address || "",
      lat: state.lat || 0,
      lng: state.lng || 0,
      name: ""
    };
  }
  public render() {
    const { name, address, lat, lng } = this.state;
    const { history } = this.props;
    return (
      <AddPlaceMutation
        mutation={ADD_PLACE}
        variables={{ name, address, lat, lng, isFav: false }}
        refetchQueries={[{ query: GET_PLACES }]}
        onCompleted={data => {
          const { AddPlace } = data;
          if (AddPlace.ok) {
            toast.success("Place added!");
            setTimeout(() => {
              history.push("/juber-client/places");
            }, 2000);
          } else {
            toast.error(AddPlace.error);
          }
        }}
      >
        {(addPlaceFn, { loading }) => (
          <AddPlacePresenter
            name={name}
            address={address}
            onSubmit={addPlaceFn}
            loading={loading}
            onInputChange={this.onInputChange}
            pickedAddress={lat !== 0 && lng !== 0}
          />
        )}
      </AddPlaceMutation>
    );
  }
  public onInputChange: React.ChangeEventHandler<
    HTMLInputElement
  > = async event => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    } as any);
  };
}

export default AddPlaceContainer;
