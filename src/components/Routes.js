import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PropsRoute from "../utils/PropsRoute";
import Landing from "../pages/Home/Landing";
import SignUp from "../pages/Auth/SignUp";
import Login from "../pages/Auth/LogIn";
import TokenInfoBase from "../pages/Tokens/TokenBaseInfo";
import TokenExchange from "../pages/Tokens/TokenExchange";
import CryptoExchange from "../pages/Crypto/CryptoExchange";
import Terms from "../pages/Help/Terms";
import ESign from "../pages/Help/ESign";
import CookiePolicy from "../pages/Help/CookiePolicy";
import PrivatePolicy from "../pages/Help/PrivatePolicy";
import Future from "../pages/Future/Future";
import CommingSoon from "../pages/CommingSoon/CommingSoon";
import Margin from "../pages/Market/Margin";
import AboutUs from "../pages/Help/AboutUs";
import BuyCrypto from "../pages/BuyCrypto/BuyCrypto";
import FeeInfo from "../pages/Help/FeeInfo";

function Routes(props) {
    const { selectLanding } = props;

    return (
        <Switch>
            <PropsRoute path="/" exact component={Landing} selectLanding={selectLanding} />
            <PropsRoute path="/login" exact component={Login} selectLanding={selectLanding} />
            <PropsRoute path="/sign-up" exact component={SignUp} selectLanding={selectLanding} />
            <PropsRoute path="/token-info-base" exact component={TokenInfoBase} selectLanding={selectLanding} />
            <PropsRoute path="/token-exchange" exact component={TokenExchange} selectLanding={selectLanding} />
            <PropsRoute path="/crypto-exchange" exact component={CryptoExchange} selectLanding={selectLanding} />
            <PropsRoute path="/margin-trading" exact component={Margin} selectLanding={selectLanding} />
            <PropsRoute path="/future-trading" exact component={Future} selectLanding={selectLanding} />
            <PropsRoute path="/buy-crypto" exact component={BuyCrypto} selectLanding={selectLanding} />
            <PropsRoute path="/terms" exact component={Terms} selectLanding={selectLanding} />
            <PropsRoute path="/esign" exact component={ESign} selectLanding={selectLanding} />
            <PropsRoute path="/cookie-policy" exact component={CookiePolicy} selectLanding={selectLanding} />
            <PropsRoute path="/private-policy" exact component={PrivatePolicy} selectLanding={selectLanding} />
            <PropsRoute path="/comming-soon" exact component={CommingSoon} selectLanding={selectLanding} />
            <PropsRoute path="/about-us" exact component={AboutUs} selectLanding={selectLanding} />
            <PropsRoute path="/fee-info" exact component={FeeInfo} selectLanding={selectLanding} />
        </Switch>
    );
}

Routes.propTypes = {
    selectLanding: PropTypes.func.isRequired,
};

export default memo(Routes);
