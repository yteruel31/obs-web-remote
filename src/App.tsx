import {obs} from './lib/obs.ts';
import OBSWebSocket from 'obs-websocket-js';
import React, {useEffect} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Root} from './views/_Root/Root.tsx';
import {loader} from './views/_Root/Root.routes.tsx';
import {Dashboard} from './views/Dashboard/Dashboard.tsx';
import {Login} from './views/Login/Login.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: loader,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

const App = () => {
  useEffect(() => {
    const ws = new OBSWebSocket();
    obs.set(ws);
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
