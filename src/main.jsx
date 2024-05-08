import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainRout from './layout/MainRout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Service from './Pages/Service/Service';
import Blogs from './Pages/Blogs/Blogs';
import Contacts from './Pages/Contacts/Contacts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './Form/Login';
import Register from './Form/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import CheackOut from './Pages/Service/CheackOut';
import Bookings from './Pages/Service/Bookings';
import PrivtedRout from './PrivtedRouted/PrivtedRout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainRout></MainRout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/service',
        element: <Service></Service>,
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
      {
        path: '/contact',
        element: <Contacts></Contacts>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/checkout/:id',
        element: <CheackOut></CheackOut>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/servicess/${params.id}`),
      },
      {
        path: '/booking',
        element: (
          <PrivtedRout>
            <Bookings></Bookings>
          </PrivtedRout>
        ),
      },
    ],
  },
]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="max-w-7xl mx-auto">
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </React.StrictMode>
  </div>
);
