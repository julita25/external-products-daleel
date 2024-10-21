import React from 'react';
import { useRoutes } from 'react-router-dom';

import AdminLayout from 'layouts/adminLayout/AdminLayout';
import SignInPage from './SignInAdminPage';
import MainPage from './MainPage';

const AdminPage = () => {
  const routes = [
    {
      path: '/',
      element: <MainPage />,
      children: [
        { path: '', element: <SignInPage /> },
        { path: '/dashboard', element: <MainPage /> }
      ]
    }
  ];

  return useRoutes(routes);
};

export default AdminPage;
