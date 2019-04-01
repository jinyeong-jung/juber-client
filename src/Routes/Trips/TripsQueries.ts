import { gql } from "apollo-boost";

export const RIDE_HISTORY = gql`
  query getRideHistory {
    GetRideHistory {
      ok
      error
      rides {
        id
        pickUpAddress
        dropOffAddress
        price
        distance
        duration
        driverId
        createdAt
      }
    }
  }
`;
