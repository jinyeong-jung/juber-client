import { gql } from "apollo-boost";

export const REPORT_MOVEMENT = gql`
  mutation reportMovement($lat: Float!, $lng: Float!) {
    ReportMovement(lastLat: $lat, lastLng: $lng) {
      ok
    }
  }
`;
