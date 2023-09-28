import React from 'react';
import Home from './components/Home';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
    

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home />
    },
    {
      path:'/signin',
      element: <SignIn />
    },
    {
      path:"/register",
      element:<Register />
    }
  ])


  return (
    <RouterProvider router={router}>
    <div className="App">
       <Home />
    </div>
    </RouterProvider>
  );
}

export default App;
