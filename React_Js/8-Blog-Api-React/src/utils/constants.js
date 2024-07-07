export const UNAUTHENTICATED_ROUTES = {
  HOME: "/",
  POSTS: "/posts",
  CATEGORY: "/category/:catId",
  REGISTER: "/register",
  LOGIN: "/login",
};

export const AUTHENTICATED_ROUTES = {
  DASHBOARD: "/admin/dashboard",
  CATEGORIES: "/admin/categories",
  ADD_CATEGORY: "/admin/categories/add",
  EDIT_CATEGORY: "/admin/categories/edit/:catId",
  USERS: "/admin/users",
  ADD_USERS: "/admin/users/add",
  EDIT_USERS: "/admin/users/edit/:userId",
  POSTS: "/admin/posts",
  ADD_POSTS: "/admin/posts/add",
  EDIT_POSTS: "/admin/posts/edit/:postId",
  COMMENTS: "/admin/comments",
  ADD_COMMENTS: "/admin/comments/add",
};
