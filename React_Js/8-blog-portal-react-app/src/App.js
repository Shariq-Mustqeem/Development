import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Layout/HomePage";
import FrontendDeveloper from "./pages/Layout/FrontendDeveloper";
import PostDetail from "./pages/Layout/PostDetail";
import { AUTHENTICATED_ROUTES, UNAUTHENTICATED_ROUTES } from "./utils/constant";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import CategoryDetail from "./pages/Layout/CategoryDetail";
import SearchDetail from "./pages/Layout/SearchDetail";
import Register from "./pages/Layout/Register";
import Login from "./pages/Layout/Login";
import AdminLayout from "./pages/Admin/Layout/AdminLayout";
import { AuthService } from "./utils/auth.service";
import AdmitCategories from "./pages/Admin/Layout/AdmitCategories";
import AdmitPosts from "./pages/Admin/Layout/AdmitPosts";
import AdmitUsers from "./pages/Admin/Layout/AdmitUsers";
import AdmitAddCategory from "./pages/Admin/Layout/AdmitAddCategory";
import AdmitAddPosts from "./pages/Admin/Layout/AdmitAddPosts";
import AdmitAddUsers from "./pages/Admin/Layout/AdmitAddUsers";
import AdminComments from "./pages/Admin/Layout/AdminComments";
import Dashboard from "./pages/Admin/Layout/Dashboard";

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
  const isUserLoggedIn = AuthService.isUserLoginIn();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<FrontendDeveloper />}>
            <Route path={UNAUTHENTICATED_ROUTES.HOME} element={<HomePage />} />
            <Route
              path={UNAUTHENTICATED_ROUTES.POST_DETAIL}
              element={<PostDetail />}
            />
            <Route
              path={UNAUTHENTICATED_ROUTES.CATEGORY_DETAIL}
              element={<CategoryDetail />}
            />
            <Route
              path={UNAUTHENTICATED_ROUTES.SEARCH_DETAIL}
              element={<SearchDetail />}
            />
            <Route
              path={UNAUTHENTICATED_ROUTES.REGISTER}
              element={<Register />}
            />
            <Route path={UNAUTHENTICATED_ROUTES.LOGIN} element={<Login />} />
          </Route>

          {isUserLoggedIn && (
            <Route element={<AdminLayout />}>
              <Route
                path={AUTHENTICATED_ROUTES.DASHBOARD}
                element={<Dashboard />}
              />
              <Route
                path={AUTHENTICATED_ROUTES.CATEGORIES}
                element={<AdmitCategories />}
              />
              <Route
                path={AUTHENTICATED_ROUTES.ADD_CATEGORY}
                element={<AdmitAddCategory />}
              />
              <Route
                path={AUTHENTICATED_ROUTES.USERS}
                element={<AdmitUsers />}
              />
              <Route
                path={AUTHENTICATED_ROUTES.ADD_USERS}
                element={<AdmitAddUsers />}
              />
              <Route
                path={AUTHENTICATED_ROUTES.POSTS}
                element={<AdmitPosts />}
              />
              <Route
                path={AUTHENTICATED_ROUTES.ADD_POSTS}
                element={<AdmitAddPosts />}
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
