import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/login";
import Navbar from "../components/Navbar";

function AppRoutes(){
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/home" element={<Home />}/>
            </Routes>
        </>
    )
}
export default AppRoutes;