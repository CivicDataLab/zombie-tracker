import './App.scss';
import Blog from './components/Blog';
import Navbar from './components/Navbar';

import React, {lazy, useState, Suspense, useEffect} from 'react';
import {Route, Redirect, Switch, useLocation} from 'react-router-dom';
import useDarkMode from 'use-dark-mode';
import { addDays } from 'date-fns';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const State = lazy(() => import('./components/State'));
const Privacy = lazy(() => import('./components/Privacy'));


const App = () => {
  const darkMode1 = useDarkMode(false);
  const location = useLocation();
  const [message, setMessage] = useState("Total");
  const [state, setState] = useState([
	  {
	    startDate: new Date(),
	    endDate: addDays(new Date(), 7),
	    key: 'selection'
	  }
	]);

  const pages = [
    {
      pageLink: '/viz/',
      view: Home,
      displayName: 'Primary',
      showInNavbar: true,
    },
    {
      pageLink: '/viz/',
      view: Blog,
      displayName: 'Secondary',
      showInNavbar: true,
    },
    {
      pageLink: '/viz/',
      view: About,
      displayName: 'Methodlogy',
      showInNavbar: true,
    },
    {
      pageLink: '/viz/state/TT',
      view: Home,
      displayName: 'Primary',
      showInNavbar: false,
    },
    {
      pageLink: '/viz/state/:stateCode',
      view: State,
      displayName: 'State',
      showInNavbar: false,
    },
  ];



  return (
    <div className="App">
      {/*<Suspense fallback={<div />}>
        <LanguageSwitcher
          {...{showLanguageSwitcher, setShowLanguageSwitcher}}
        />
      </Suspense>*/}

      {/*<Navbar
        pages={pages}
        {...{darkMode1}}
        {...{showLanguageSwitcher, setShowLanguageSwitcher}}
      />*/}

      <Suspense fallback={<div />}>
        <Switch location={location}>
          {pages.map((page, index) => {
            return (
              <Route
                exact
                path={page.pageLink}
                render={({match}) => <page.view {...{message, setMessage, state, setState}}/>}
                key={index}
              />
            );
          })}
          <Redirect to="/error" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
