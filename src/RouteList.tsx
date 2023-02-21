import { BrowserRouter,Routes,  Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Profile from "./pages/ProfileSearch";

const RouteList = () => (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>} />    
            <Route path="/profile" element={<Profile/>} />    
        </Routes>
    </BrowserRouter>
)
export default RouteList;