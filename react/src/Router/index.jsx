import React from 'react';
import { QueryClient, QueryClientProvider} from 'react-query'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// import Page404 from './404';
// import CookieBar from './cookieBar';
// import Header from './header';
// import Footer from './footer';

import SplashScreen from '../Pages/SplashScreen';
import HomePage from '../Pages/HomePage';
import GamePage from '../Pages/GamePage';


export const routes = {
  splashscreen:"/",
  home: "/home",
  game: "/game/:id"
};

const queryClient = new QueryClient();

export default function Router() {
  return (
    <div>
      {/* <CookieBar />
      <Header /> */}
      <BrowserRouter>
        <Switch>
          <QueryClientProvider client={queryClient}>
            <Route exact path={routes.splashscreen} component={SplashScreen} />
            <Route exact path={routes.home} component={HomePage} />
            <Route path={routes.game} component={GamePage} />
           {/*  <Route component={Page404} /> */}
          </QueryClientProvider>
        </Switch>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}