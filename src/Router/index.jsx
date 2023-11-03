import Home from '../Pages/Home'
import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from '../Pages/Layout';
import Create from '../Pages/Create';
import Search from '../Pages/Search';
import BookDetail from '../Pages/BookDetail';


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children : [
        {
          path : '',
          element : <Home/>
        },
        {
          path : '/create',
          element : <Create/>
        },
        {
          path : '/search',
          element :  <Search/>
        },
        {
          path : '/books/:id',
          element : <BookDetail/>
        }
      ]
    },
  ]);

  export default router;