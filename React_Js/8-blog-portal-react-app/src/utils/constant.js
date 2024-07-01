export const UNAUTHENTICATED_ROUTES = {
  HOME: "/",
  POST_DETAIL: "/post/:postId",
  CATEGORY_DETAIL: "/category/:catId",
  SEARCH_DETAIL: "/search/:query",
  REGISTER: "/register",
  LOGIN: "/login",
};

export const AUTHENTICATED_ROUTES = {
  DASHBOARD: "/admin/dashboard",
  CATEGORIES: "/admin/categories",
  ADD_CATEGORY: "/admin/categories/add",
  USERS: "/admin/users",
  ADD_USERS: "/admin/users/add",
  POSTS: "/admin/posts",
  ADD_POSTS: "/admin/posts/add",
  COMMENTS: "/admin/comments",
};
