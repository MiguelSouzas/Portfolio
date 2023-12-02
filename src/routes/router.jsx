import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Home from "../views/Home";
import About from "../views/AboutMe";

const Routers = createBrowserRouter([
    {
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about', 
                element: <About/>
            }
        ]
    }
])

export default Routers