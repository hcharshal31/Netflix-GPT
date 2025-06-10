import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import Error from './Error';
import AppLayout from './AppLayout';

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />,
            errorElement: <Error />
        },
        {
            path: '/browse',
            element: <AppLayout />, // wrapper that includes <Header />
            children: [
            {
                path: '',
                element: <Browse />
            }
            ]
        },
        {
            path: '/error',
            element: <Error />
        }
    ]);

    

  return (
    <div className="h-full bg-black">
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body