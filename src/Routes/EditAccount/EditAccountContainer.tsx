import axios from "axios";
import React from "react";
import { Mutation, Query } from "react-apollo";
import { RouteComponentProps } from "react-router";
import { toast } from "react-toastify";
import { USER_PROFILE } from "src/sharedQueries";
import {
  updateProfile,
  updateProfileVariables,
  userProfile
} from "src/types/api";
import EditAccountPresenter from "./EditAccountPresenter";
import { UPDATE_PROFILE } from "./EditAccountQueries";

interface IState {
  firstName: string;
  lastName: string;
  email: string;
  profilePhoto: string;
  uploading: boolean;
}

interface IProps extends RouteComponentProps<any> {}

class ProfileQuery extends Query<userProfile> {}

class UpdateProfileMutation extends Mutation<
  updateProfile,
  updateProfileVariables
> {}

class EditAccountContainer extends React.Component<IProps, IState> {
  public state = {
    email: "",
    firstName: "",
    lastName: "",
    profilePhoto:
      "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
    uploading: false
  };
  public render() {
    const { firstName, lastName, email, profilePhoto, uploading } = this.state;
    return (
      <ProfileQuery
        query={USER_PROFILE}
        onCompleted={this.updateFields}
        fetchPolicy={"cache-and-network"}
      >
        {() => (
          <UpdateProfileMutation
            mutation={UPDATE_PROFILE}
            variables={{ firstName, lastName, email, profilePhoto }}
            refetchQueries={[{ query: USER_PROFILE }]}
            onCompleted={data => {
              const { UpdateMyProfile } = data;
              if (UpdateMyProfile.ok) {
                toast.success("Profile updated!");
              } else if (UpdateMyProfile.error) {
                toast.error(UpdateMyProfile.error);
              }
            }}
          >
            {(updateProfileFn, { loading }) => (
              <EditAccountPresenter
                firstName={firstName}
                lastName={lastName}
                email={email}
                profilePhoto={profilePhoto}
                loading={loading}
                onInputChange={this.onInputChange}
                onSubmit={updateProfileFn}
                uploading={uploading}
              />
            )}
          </UpdateProfileMutation>
        )}
      </ProfileQuery>
    );
  }

  public onInputChange: React.ChangeEventHandler<
    HTMLInputElement
  > = async event => {
    const {
      target: { name, value, files }
    } = event;

    if (files) {
      this.setState({
        uploading: true
      });
      const formData = new FormData();
      formData.append("file", files[0]);
      formData.append("api_key", "561697398576422");
      formData.append("upload_preset", "qxnxc23l");
      formData.append("timestamp", String(Date.now() / 1000));
      const {
        data: { secure_url }
      } = await axios.post(
        "https://api.cloudinary.com/v1_1/dy2fdcshe/image/upload",
        formData
      );
      if (secure_url) {
        this.setState({
          profilePhoto: secure_url,
          uploading: false
        });
      }
    }

    this.setState({
      [name]: value
    } as any);
  };

  public updateFields = (data: {} | userProfile) => {
    const { firstName } = this.state;
    if (firstName === "" || null) {
      if ("GetMyProfile" in data) {
        const {
          GetMyProfile: { user }
        } = data;
        if (user !== null) {
          const { firstName, lastName, email, profilePhoto } = user;
          this.setState({
            email,
            firstName,
            lastName,
            profilePhoto
          } as any);
        }
      }
    }
  };
}

export default EditAccountContainer;
