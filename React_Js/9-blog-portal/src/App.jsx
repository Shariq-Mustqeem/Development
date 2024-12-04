import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppContext from "contextApi/AppContext";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "routes/AppRoutes";

const queryClient = new QueryClient();

const App = () => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <AppContext>
                        <AppRoutes />
                    </AppContext>
                </BrowserRouter>
            </QueryClientProvider>
        </>
    );
};

export default App;
