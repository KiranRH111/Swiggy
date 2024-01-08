import './App.css';
import About from './components/About';
import Body from './components/Body';
import Contact from './components/Contact';
import Error from './components/Error';
import Header from './components/Header';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import RestaurentMenu from './components/RestaurentMenu';

const AppLayout = () =>  {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
}


export const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    children:[
      {
        path:"/about",
        element: <About/>,
    
      },
      {
        path:"/contact",
        element: <Contact/>,
      },
      {
        path:"/",
        element: <Body/>,
      },
      {
        path:"/restaurents/:resId",
        element: <RestaurentMenu/>,
      },

    ],
    errorElement:<Error/>
  }
  
])

export default AppLayout;
