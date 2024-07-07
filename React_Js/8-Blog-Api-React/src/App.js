import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import FrontendDeveloper from "./Layout/FrontendDeveloper/FrontendDeveloper";
import HomePage from "./Layout/HomePage/HomePage";
import {
  AUTHENTICATED_ROUTES,
  UNAUTHENTICATED_ROUTES,
} from "./utils/constants";
import PostDetail from "./Layout/PostDetail/PostDetail";
import CategoryDetail from "./Layout/CategoryDetail/CategoryDetail";
import Register from "./Layout/Register/Register";
import Login from "./Layout/Login/Login";
import { AuthService } from "./utils/auth.service";
import AdminLayout from "./Layout/AdminLayout/AdminLayout";
import Dashboard from "./Layout/AdminLayout/Dashboard/Dashboard";
import AdminCategory from "./Layout/AdminLayout/AdminCategory/AdminCategory";
import AdminPosts from "./Layout/AdminLayout/AdminPosts/AdminPosts";
import AdminComments from "./Layout/AdminLayout/AdminComments/AdminComments";
import AdminUsers from "./Layout/AdminLayout/AdminUsers/AdminUsers";
import AdminAddCategory from "./Layout/AdminLayout/AdminCategory/AdminAddCategory";
import AdminAddUsers from "./Layout/AdminLayout/AdminUsers/AdminAddUsers";
import AdminAddPosts from "./Layout/AdminLayout/AdminPosts/AdminAddPosts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: 0,
      staleTime: 5 * 2000,
    },
  },
});
function App() {
  const isUserIsLoggedIn = AuthService.isUserLoggedIn();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<FrontendDeveloper />}>
            <Route path={UNAUTHENTICATED_ROUTES.HOME} element={<HomePage />} />
            <Route
              path={UNAUTHENTICATED_ROUTES.POSTS}
              element={<PostDetail />}
            />
            <Route
              path={UNAUTHENTICATED_ROUTES.CATEGORY}
              element={<CategoryDetail />}
            />
            <Route
              path={UNAUTHENTICATED_ROUTES.REGISTER}
              element={<Register />}
            />
            <Route path={UNAUTHENTICATED_ROUTES.LOGIN} element={<Login />} />
          </Route>

          {isUserIsLoggedIn && (
            <Route element={<AdminLayout />}>
              <Route
                path={AUTHENTICATED_ROUTES.DASHBOARD}
                element={<Dashboard />}
              />
              <Route
                path={AUTHENTICATED_ROUTES.CATEGORIES}
                element={<AdminCategory />}
              />

              <Route
                path={AUTHENTICATED_ROUTES.ADD_CATEGORY}
                element={<AdminAddCategory />}
              />
              <Route
                path={AUTHENTICATED_ROUTES.EDIT_CATEGORY}
                element={<AdminAddCategory />}
              />
              <Route
                path={AUTHENTICATED_ROUTES.USERS}
                element={<AdminUsers />}
              />
              <Route
                path={AUTHENTICATED_ROUTES.ADD_USERS}
                element={<AdminAddUsers />}
              />
              <Route
                path={AUTHENTICATED_ROUTES.EDIT_USERS}
                element={<AdminAddUsers />}
              />
              <Route
                path={AUTHENTICATED_ROUTES.POSTS}
                element={<AdminPosts />}
              />

              <Route
                path={AUTHENTICATED_ROUTES.ADD_POSTS}
                element={<AdminAddPosts />}
              />

              <Route
                path={AUTHENTICATED_ROUTES.EDIT_POSTS}
                element={<AdminAddPosts />}
              />

              <Route
                path={AUTHENTICATED_ROUTES.COMMENTS}
                element={<AdminComments />}
              />
            </Route>
          )}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
