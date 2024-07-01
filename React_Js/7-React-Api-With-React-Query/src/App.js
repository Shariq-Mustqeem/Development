import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import Posts from "./Pages/Posts/Posts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomLayout from "./Components/Layout/CustomLayout";
import CreatePost from "./Pages/Posts/CreatePost";
import EditPost from "./Pages/Posts/EditPost";

const queryClient = new QueryClient({
  // defaultOptions: {
  //   queries: {
  //     staleTime: 5 * 60 * 1000,
  //     refetchOnWindowFocus: false,
  //     refetchOnMount: false,
  //     refetchOnReconnect: false,
  //     retry: false,
  //   },
  // },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<CustomLayout />}>
            <Route path="/" element={<Posts />} />
            <Route path="/post/create-post" element={<CreatePost />} />
            <Route path="/edit-post/:id" element={<EditPost />} />
            <Route path="/contact" element={<h1>Contact Us</h1>} />
            <Route path="/about" element={<h1>About</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
