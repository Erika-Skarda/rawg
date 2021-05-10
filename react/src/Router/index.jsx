import React from 'react';
import { QueryClient, QueryClientProvider} from 'react-query'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SplashScreen from '../Pages/SplashScreen';
import HomePage from '../Pages/HomePage';
import GamePage from '../Pages/GamePage';

const queryClient = new QueryClient();
export const routes = {
  splashscreen:"/",
  home: "/home",
  game: "/game/:id"
};

export default function Router() {
  return (
    <div>
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
    </div>
  );
}