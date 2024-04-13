import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Home from '../Pages/Components/Home';
import Page1 from '../Pages/Components/Page1';
import Page2 from '../Pages/Components/Page2';
import NotFound from "../Pages/Components/NotFound";
import './style.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    redirect: "/home",
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/page1",
    element: <Page1 />,
  },
  {
    path: "/page2",
    element: <Page2 />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

function App() {
  return (
    <Container fluid className="main-container">
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
