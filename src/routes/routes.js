import { Route, Routes } from "react-router-dom";

import React from "react";

import "../amplify/index";
import ProtectedRoute from "../components/ProtectedRoute";
import MainPage from "../pages/MainPage";
import SignInPage from "../pages/SignInPage";
import PublicRoute from "../components/PublicRoute";

const routes = () => (
    <Routes>
      <Route
        path="/"
        element={(
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
          )}
      />
    <Route
      path="/login"
      element={(
        <PublicRoute>
          <SignInPage />
        </PublicRoute>
        )}
    />

    </Routes>
)


export default routes;