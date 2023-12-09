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
            // },
            // {
            //     path: '/services',
            //     element: <Services/>
            // },
            // {
            //     path: '/skills',
            //     element: <Skills/>
            // },
            // {
            //     path: '/portfolio',
            //     element: <Portfolio/>
            // },
            // {
            //     path: '/contact',
            //     element: <Contact/>
            }  
        ]
    }
])

export default Routers