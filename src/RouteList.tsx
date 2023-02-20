import { BrowserRouter,Routes,  Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

const RouteList = () => (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    </BrowserRouter>
)
export default RouteList;