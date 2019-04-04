import PropTypes from "prop-types";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AddPlace from "../../Routes/AddPlace";
import Chat from "../../Routes/Chat";
import EditAccount from "../../Routes/EditAccount";
import FindAddress from "../../Routes/FindAddress";
import Home from "../../Routes/Home";
import Login from "../../Routes/Login";
import PhoneLogin from "../../Routes/PhoneLogin";
import Places from "../../Routes/Places";
import Ride from "../../Routes/Ride";
import Settings from "../../Routes/Settings";
import SocialLogin from "../../Routes/SocialLogin";
import Trips from "../../Routes/Trips";
import VerifyPhone from "../../Routes/VerifyPhone";

interface IProps {
  isLoggedIn: boolean;
}

const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) => (
  <BrowserRouter>
    {isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
  </BrowserRouter>
);

const LoggedOutRoutes: React.SFC = () => (
  <Switch>
    <Route path={"/juber-client"} exact={true} component={Login} />
    <Route path={"/juber-client/phone-login"} component={PhoneLogin} />
    <Route path={"/juber-client/verify-phone"} component={VerifyPhone} />
    <Route path={"/juber-client/social-login"} component={SocialLogin} />
    <Redirect from={"*"} to={"/juber-client/"} />
  </Switch>
);

const LoggedInRoutes: React.SFC = () => (
  <Switch>
    <Route path={"/juber-client"} exact={true} component={Home} />
    <Route path={"/juber-client/ride/:rideId"} exact={true} component={Ride} />
    <Route path={"/juber-client/chat/:chatId"} exact={true} component={Chat} />
    <Route path={"/juber-client/trips"} exact={true} component={Trips} />
    <Route
      path={"/juber-client/edit-account"}
      exact={true}
      component={EditAccount}
    />
    <Route path={"/juber-client/settings"} exact={true} component={Settings} />
    <Route path={"/juber-client/places"} exact={true} component={Places} />
    <Route path={"/juber-client/add-place"} exact={true} component={AddPlace} />
    <Route
      path={"/juber-client/find-address"}
      exact={true}
      component={FindAddress}
    />
    <Redirect from={"*"} to={"/juber-client/"} />
  </Switch>
);

AppPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppPresenter;
