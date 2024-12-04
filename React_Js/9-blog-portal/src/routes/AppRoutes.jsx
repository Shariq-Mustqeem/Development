import Home from "container/Pages/Home";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </>
    );
};

export default AppRoutes;
