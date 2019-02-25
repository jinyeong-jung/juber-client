import { GoogleApiWrapper } from "google-maps-react";
import { MAPS_KEY } from "src/keys";
import HomeContainer from "./HomeContainer";

export default GoogleApiWrapper({ apikey: MAPS_KEY })(HomeContainer);
