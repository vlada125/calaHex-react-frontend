import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PropsRoute from "../utils/PropsRoute";
import Landing from "../pages/Home/Landing";
import SignUp from "../pages/Auth/SignUp";
import Login from "../pages/Auth/LogIn";

function Routes(props) {
    const { selectLanding } = props;
    return (
        <Switch>
            <PropsRoute path="/" exact component={Landing} selectLanding={selectLanding} />
            <PropsRoute path="/login" exact component={Login} selectLanding={selectLanding} />
            <PropsRoute path="/sign-up" exact component={SignUp} selectLanding={selectLanding} />
        </Switch>
    );
}

Routes.propTypes = {
    selectLanding: PropTypes.func.isRequired,
};

export default memo(Routes);
