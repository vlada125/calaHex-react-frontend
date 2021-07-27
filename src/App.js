import React, { Fragment, Suspense, lazy } from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Provider} from 'react-redux';
// import 'bootstrap/dist/css/bootstrap.min.css';   

import { LanguageProvider } from "./utils/Language";
import store from './redux';
import theme from "./utils/theme";
import GlobalStyles from "./utils/GlobalStyles";
import * as serviceWorker from "./utils/ServiceWorker";
import Pace from "./utils/Pace";
import { setCurrentUser } from "./redux/actions/auth";
import { getItem } from './utils/helper';

const MainComponent = lazy(() => import("./components/Main"));

let access_token = getItem('access_token');
if(access_token) {
    store.dispatch(setCurrentUser(access_token));
}

function App() {
    return (
        <Router>
            <LanguageProvider>
                <Provider store={store}>
                    <MuiThemeProvider theme={theme}>
                        <CssBaseline />
                        <GlobalStyles />
                        <Pace color={theme.palette.primary.light} />
                        <Suspense fallback={<Fragment />}>
                            <Switch>
                                <Route>
                                    <MainComponent />
                                </Route>
                            </Switch>
                        </Suspense>
                    </MuiThemeProvider>
                </Provider>
            </LanguageProvider>
        </Router>
    );
}

serviceWorker.register();

export default App;
