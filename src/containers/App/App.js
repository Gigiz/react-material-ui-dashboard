import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Main from '@src/containers/Main/Main';
import TopMenu from '@src/components/TopMenu/TopMenu';
import UserContextProvider from '@src/models/context/UserContext/UserContext';

const App = () => <BrowserRouter>
  <UserContextProvider>
    <CssBaseline />
    <TopMenu />
    <Main />
  </UserContextProvider>
</BrowserRouter>;

export default App;
