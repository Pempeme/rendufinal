import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import Write from "./Pages/Write"
import Home from "./Pages/Home"
import Single from "./Pages/Single"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./style.scss"

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },

      {
        path: "/post/:id",
        element: <Single/>,
      },

      {
        path: "/Write",
        element: <Write/>,
      },
    ]
  },

  {
    path: "/Register",
    element: <Register/>,
  },

  {
    path: "/Login",
    element: <Login/>,
  },

]);

function App() {
  return (
    <div className="app">
      <div className="container">
      <RouterProvider router={router}/>
    </div>
   </div>
  );
}

export default App;
