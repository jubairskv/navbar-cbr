import Header from "./Components/Header"
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from "./Components/Home"
import Service from "./Components/Service"
import Support from "./Components/Support"
import About from "./Components/About"
import Contact from "./Components/Contact"
import './App.css';


const Layout = () => (
  <div>
    <Header />
    <Outlet />
  </div>
);


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'service',
        element: <Service />
      },
      {
        path: 'support',
        element: <Support />
      },
    ],
  },
]);

const App = () => {
  return  <RouterProvider router={router} />;
};

export default App;