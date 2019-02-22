import React from "react";
import Helmet from "react-helmet";
import styled from "../../typed-components";

const Map = styled.div``;

interface IProps {
  mapRef: any;
}

class FindAddressPresenter extends React.Component<IProps> {
  public render() {
    const { mapRef } = this.props;
    return (
      <div>
        <Helmet>
          <title>Find Address | Juber</title>
        </Helmet>
        <Map ref={mapRef} />
      </div>
    );
  }
}

export default FindAddressPresenter;
